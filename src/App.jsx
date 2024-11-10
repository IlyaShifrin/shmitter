import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });

    return (
        <div className={'app'}>
            <Navigation user={user} setUser={setUser} />
            <Body user={user} setUser={setUser} stats={stats}/>
        </div>
    )
}

export default App
