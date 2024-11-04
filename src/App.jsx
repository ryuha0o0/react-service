import './App.css';
import Signup from './Signup';
import Login from './Login';
import { useState } from 'react';

function App() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="App">
            <div className="background" /> {/* 배경 요소 추가 */}
            <div className={`flip-container ${showLogin ? '' : 'flipped'}`}>
                {showLogin ? <Login onToggle={() => setShowLogin(false)} /> : <Signup onToggle={() => setShowLogin(true)} />}
            </div>
        </div>
    );
}

export default App;
