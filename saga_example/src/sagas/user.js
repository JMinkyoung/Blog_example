import { all, fork, takeLatest,delay, put} from "redux-saga/effects";
import {LOG_IN_REQUEST,LOG_IN_SUCCESS, LOG_IN_FAILURE} from '../reducers/user';

function* logIn(action) {
    try {
        console.log('saga / logIn');
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: LOG_IN_FAILURE,
            error: error.response.data
        });
    }
}

// 이벤트 리스너 같은 역할을 한다.
function* watchLogin() {
    console.log('saga / watchLogin');
    yield takeLatest(LOG_IN_REQUEST, logIn);

}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
    ])
}