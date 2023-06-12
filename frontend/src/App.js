import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Outlet
} from 'react-router-dom';
import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getUserDetails, clearErrors } from "./Actions/userActs.js";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import Blogs from './Components/Blogs/Blogs';
import BlogPage from './Components/Blogs/BlogPage';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Login from './Components/Accounts/Login';

function App() {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, user, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getUserDetails());
    }, [error, dispatch, alert]);

    let username;
    let isAdmin = false;
    if (isAuthenticated) {
        if (user.is_staff === true)
            isAdmin = true;
        username = user?.username;
    } else {
        username = null;
    }

    // function AuthenticatedRoute() {
    //     if (isAuthenticated) {
    //         return (
    //             <>
    //                 <Outlet />
    //             </>
    //         );
    //     } else {
    //         alert.error("Please Login");
    //         return <Navigate to="/" />;
    //     }
    // }

    return (
        <div className="App">
            <Router>
                <Navbar
                    isAuthenticated={isAuthenticated}
                    username={username}
                    isAdmin={isAdmin}
                />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/events" element={<Events />} />
                    <Route exact path="/blogs" element={<Blogs />} />
                    <Route exact path="/blog/:id" element={<BlogPage />} />
                    <Route exact path="/team" element={<About />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
