import { takeEvery, takeLatest, delay, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {incrementSaga, incrementSagaSuccess} from './counterSlice'

function* handleIncrement(action: PayloadAction<number>){
    console.log('wait 2s')
    yield delay(2000)

    console.log('waiting 2s done, dispacth action success')
    yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga(){
    console.log("counter Saga")
    // yield takeEvery(incrementSaga.toString(), log)
    yield takeLatest(incrementSaga.toString(), handleIncrement)

}