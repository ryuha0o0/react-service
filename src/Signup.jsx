import React from 'react';
import './App.css';

function Signup({ onToggle }) {
    return (
        <div className="auth-container">
            <h2 className="title">Sign Up</h2>
            <form>
                <input type="text" placeholder="Username" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />
                <input type="password" placeholder="Confirm Password" className="auth-input" />
                <button type="submit" className="auth-button">Sign Up</button>
            </form>
            <button className="toggle-button" onClick={onToggle}>
                Go to Login
            </button>
        </div>
    );
}

export default Signup;
