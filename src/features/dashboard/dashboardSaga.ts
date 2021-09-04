import studentApi from 'api/studentApi';
import cityApi from 'api/cityApi';
import { City, ListReponse, Student } from 'models';
import { all, call, fork, takeLatest, put } from 'redux-saga/effects';
import { dashboardAction } from './dashboardSclice';

function* fetchStatistics() {
    const responseList: Array<ListReponse<Student>> = yield all([
        call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male' }),
        call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female' }),
        call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
        call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
    ]);
    const stisticesList = responseList.map((x) => x.pagination._totalRows);
    const [maleCount, femaleCount, hightMarkCount, lowMarkCount] = stisticesList;
    yield put(
        dashboardAction.setStatistics({ maleCount, femaleCount, hightMarkCount, lowMarkCount })
    );
}

function* fetchHightestStudentList() {
    const {data} : ListReponse<Student> = yield call(studentApi.getAll, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'desc',
    });
    yield put(dashboardAction.setHightestStudentList(data));
}

function* fetchLowestStudentList() {
    const { data }: ListReponse<Student> = yield call(studentApi.getAll, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'asc',
    });
    yield put(dashboardAction.setLowestStudentList(data));
}

function* fetchRankingByCityList() {
    // fetch data city
    const { data: listCity }: ListReponse<City> = yield call(cityApi.getAll);
    // fetch rankin pre cities list
    const callList = listCity.map((x) =>
        call(studentApi.getAll, {
            _page: 1,
            _limit: 5,
            _sort: 'mark',
            _order: 'desc',
            city: x.code
        })
    );
    const responseList: Array<ListReponse<Student>> = yield all(callList);
    const rankingByCityList = responseList.map((x, idx) =>({
        cityId: listCity[idx].code,
        rankingList: x.data
    }))
    yield put(dashboardAction.setRankingByCityList(rankingByCityList));
}

function* fetchDashboardData() {
    try {
        yield all([
            call(fetchStatistics),
            call(fetchHightestStudentList),
            call(fetchLowestStudentList),
            call(fetchRankingByCityList),
        ]);
        yield put(dashboardAction.fetchDataSuuccess())
    } catch (error) {
        console.log(error);
        yield put(dashboardAction.fetchDataFailed())

    }
}
export default function* dashboardSaga() {
    yield takeLatest(dashboardAction.fetchData.type, fetchDashboardData);
}
