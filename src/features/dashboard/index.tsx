import { useAppDispatch, useAppSelector } from 'app/hooks';
import Loading from 'components/common/Loading';
import { useEffect } from 'react';
import {
    dashboardAction,
    selectHightestStudentList,
    selectLoading,
    selectLowestStudentList,
    selectRankingByCityList,
    selectStatistics,
} from './dashboardSclice';
import './styles.scss'
export default function Dashboard() {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectLoading);
    const {maleCount, femaleCount, hightMarkCount, lowMarkCount} = useAppSelector(selectStatistics);
    const hightestStudentList = useAppSelector(selectHightestStudentList);
    const lowestStudentList = useAppSelector(selectLowestStudentList);
    const rankingByCityList = useAppSelector(selectRankingByCityList);
    console.log(loading)
    useEffect(() => {
        dispatch(dashboardAction.fetchData());
    }, [dispatch]);
    return (
    <div className="dashboard">
        <div className="statistics-loading">
        <Loading loading = {loading}/>
        </div>
        {/* statistics */}
        <div className="statistics">
            <div className="statistics__item">
                <p>Male</p>
                <h3>{ maleCount }</h3>
            </div>
            <div className="statistics__item">
                <p>Female</p>
                <h3>{ femaleCount }</h3>
            </div> 
            <div className="statistics__item">
                <p>Mark &gt; 8 </p>
                <h3>{ hightMarkCount }</h3>
            </div>
            <div className="statistics__item">
                <p>Mark &lt; 5 </p>
                <h3>{ lowMarkCount }</h3>
            </div>
        </div>
    </div>
    );
}
