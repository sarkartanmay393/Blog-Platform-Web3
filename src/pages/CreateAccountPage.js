import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError("Passwords didn't match!")
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate("/articles");
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <h2 className='login-headline'>Create a new Account</h2>
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
                <div className='input-field'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input name='confirmPassword'
                           type='confirmPassword'
                           placeholder='Re-enter your password'
                           value={confirmPassword}
                           onChange={e => setConfirmPassword(e.target.value)}
                           onKeyPress={ (k) => {
                               if (confirmPassword.length > 4 && password === confirmPassword && k.key === "Enter") {
                                   k.preventDefault();
                                   document.getElementById("login-btn").click();
                               }
                           } }
                    />
                </div>
                <button id='login-btn' onClick={createAccount}>Create Account</button>
                <h3>Already have an account? <span onClick={ () => {navigate("/login")} }>Login</span></h3>
            </div>
        </>
    );
}

export default CreateAccount;