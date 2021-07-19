export const initialState = {
    logInLoading : false,  // 로그인 시도중
    logInDone : false, 
    logInError : null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const loginRequestAction = () =>{
    console.log('reducer / loginRequestAction ');
    return {
        type: LOG_IN_REQUEST,
    }
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOG_IN_REQUEST:{
            console.log('reducer / 로그인 요청');
            return {
                ...state,
                logInLoading : true,
                logInDone : false,
                logInError : null,
            };
        }
        case LOG_IN_SUCCESS:{
            console.log('reducer / 로그인 완료');
            return {
                ...state,
                logInLoading : false,
                logInDone : true,
            };
        }
        case LOG_IN_FAILURE:{
            console.log('reducer / 로그인 실패');
            return {
                logInLoading : false,
                logInError : action.error,
            };
        }
        default: {
            return{
                ...state,
            }
        }    
    }
};

export default reducer;