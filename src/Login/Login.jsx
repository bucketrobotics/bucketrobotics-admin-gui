import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signIn() {
        const auth = props.auth;
        signInWithEmailAndPassword(auth, email, password);
    }

    return (
        <div className="login">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button type="button" onClick={signIn}>Login</button>
        </div>
    )
}

export { Login };