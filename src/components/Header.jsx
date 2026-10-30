import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../store/userSlice';

function Header() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const firstName = useSelector(state => state.user.firstName);
    const userName = useSelector(state => state.user.userName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(setLogout());
        navigate("/");
    };

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isLoggedIn ? (
                    <>
                        <Link to="/user" className="main-nav-item" style={{ marginRight: '10px' }}>
                            <i className="fa fa-user-circle"></i>
                            {userName || firstName}
                        </Link>
                        <Link to="/" className="main-nav-item" onClick={handleSignOut}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link to="/signIn" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Header;