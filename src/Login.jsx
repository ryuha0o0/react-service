import React from 'react';
import './App.css';

function Login({ onToggle }) {
    return (
        <div className="auth-container">
            <h2 className="title">Login</h2>
            <form>
                <input type="text" placeholder="Username" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />
                <button type="submit" className="auth-button">Login</button>
            </form>
            <button className="toggle-button" onClick={onToggle}>
                Go to Signup
            </button>
        </div>
    );
}

export default Login;
