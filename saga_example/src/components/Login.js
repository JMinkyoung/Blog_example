import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitFrom =(e)=>{
        e.preventDefault();
        dispatch(loginRequestAction({email, password}));
    };

    return (
        <form onSubmit={onSubmitFrom}>
            <input type="email" value={email} onChange={onChangeEmail} required></input>
            <input value={password} onChange={onChangePassword} type="password" required></input>
            <button type="primary">로그인</button>
        </form>
    );
};

export default Login;