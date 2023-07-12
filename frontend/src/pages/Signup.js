import React from 'react';
import { useSignup } from '../hooks/useSignup';
const Signup = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { signup, isLoading, error } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password)
    };
    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email:</label>
            <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email}></input>
            <label>Password:</label>
            <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password}></input>
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
};
export default Signup;