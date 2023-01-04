import {useState} from "react";
import { useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate("/articles");
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            {}
        <h2 className='login-headline'>Login to access everything</h2>
            {error && <p className='error'>{error}</p>}
        <div className='login-page-body'>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input name='email'
                       type='email'
                       placeholder='Enter your email'
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input name='password'
                       type='password'
                       placeholder='Enter your password'
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       onKeyPress={ (k) => {
                           if (password.length > 4 && k.key === "Enter") {
                               k.preventDefault();
                               document.getElementById("login-btn").click();
                           }
                       } }
                />
            </div>
            <button id='login-btn' onClick={login}>Login</button>
            <h3>Don't have a account? <span onClick={ () => {navigate("/createAccount")} }>Create an Account</span></h3>
        </div>
        </>
    );
}

export default LoginPage;