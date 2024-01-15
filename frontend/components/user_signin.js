import React, { useState } from 'react';
import axios from 'axios';

const UserSignIn = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/signin', loginData);
            alert('User signed in successfully');
        } catch (error) {
            console.error('Error signing in:', error);
            alert('Error signing in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default UserSignIn;
