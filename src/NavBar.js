import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
    const { user, isLoading } = useUser();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await signOut(getAuth());
        } catch (e) {
            // do nothing
        }
    }

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="articles">Articles</Link></li>
                <li><Link to="/about">About</Link></li>
                { user ?
                    <li><button className='logout-btn' onClick={logout}>Log Out</button></li>
                    : <li><button className='logout-btn extras' onClick={ () => {navigate("/login")} }>LogIn</button></li> }
            </ul>
        </nav>
    );
};

export default NavBar;