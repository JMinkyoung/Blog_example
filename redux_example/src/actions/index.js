// action의 type을 정의하여 export
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


// 각각의 action을 실제로 정의
export const actionincrement = () => {
    return {
        type:INCREMENT
    };
};

export const actiondecrement = () => {
    return {
        type:DECREMENT
    };
};