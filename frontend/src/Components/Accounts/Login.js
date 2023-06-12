import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { loginUser, clearErrors } from '../../Actions/userActs';

const Login = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const webUser = useSelector((state) => state.auth);
    const { user, isAuthenticated, error } = webUser;

    const loginSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            alert.show("Please fill in all fields");
        }
        dispatch(loginUser(username, password));
    };

    useEffect(() => {
        if (isAuthenticated)
            navigate('/');
        else if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [isAuthenticated, user, navigate, alert, error, dispatch]);

    return (
        <div className='login__section'>
            <div className='login__display'>
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Login image"
                />
                <form className='login__form' onSubmit={loginSubmit}>
                    <div className="username__box">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="password__box">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        className="login__btn"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;