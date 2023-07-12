import React from 'react';
import { useLogin } from '../hooks/useLogin';
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login, isLoading, error } = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };
    return (
        <form className='login' onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <label>Email:</label>
            <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email}></input>
            <label>Password:</label>
            <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password}></input>
            <button disabled={isLoading}>Login</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
};
export default Login;