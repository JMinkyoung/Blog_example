import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actiondecrement, actionincrement } from '../actions';

// const Button = ({onClickIncrease, onClickDecrease}) => {
//     return (
//         <div>
//             <button onClick={onClickIncrease}>+</button>
//             <button onClick={onClickDecrease}>-</button>
//         </div>
//     );
// };

const Button = () => {

    const dispatch = useDispatch();
    
    const onClickIncrease = useCallback(() => {
        dispatch(actionincrement());
    },[]);
    const onClickDecrease = useCallback(() => {
        dispatch(actiondecrement());
    },[]);

    return(
        <div>
            <button onClick={onClickIncrease}>+</button>
            <button onClick={onClickDecrease}>-</button>
        </div>
    );
};

export default Button;