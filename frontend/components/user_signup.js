import React, { useState } from 'react';
import axios from 'axios';

const UserSignUp = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/signup', userData);
            alert('Account created successfully')
        } catch (error) {
            console.error('Error creating account:', error);
            alert('Error creating account');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default UserSignUp;
