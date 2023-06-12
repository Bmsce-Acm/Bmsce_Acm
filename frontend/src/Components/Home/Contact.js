import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { makeNewContact, clearErrors } from "../../Actions/contactActs";

const Contact = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, loading, contact } = useSelector((state) => state.newContact)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [queryContent, setQueryContent] = useState("");

    const newContactSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !queryContent)
            alert.error("Please enter all fields");
        dispatch(makeNewContact(name, email, subject, queryContent));
        alert.success("Your request has been received!");
        setName("");
        setEmail("");
        setSubject("");
        setQueryContent("");
        navigate("/");
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, alert]);

    return (
        <div className="container">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <a href="https://goo.gl/maps/a1KmXR61srfsWq5i9" target="_blank">
                            <i className="fas fa-map-marker-alt"></i>
                        </a>
                        <div className="topic">Address</div>
                        <div className="text one">B.M.S College of Engineering</div>
                        <div className="text two">Basavanagudi, Bangalore</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text one">7204459385</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <a href="mailto:acm@bmsce.ac.in">
                            <div className="text one">acm@bmsce.ac.in</div>
                        </a>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Reach Us out!</div>
                    <form onSubmit={newContactSubmit}>
                        <div className="input-box">
                            <input
                                type="text" placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="email" placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="text" placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="input-box" id="msgBx">
                            <input
                                type="text" placeholder="Message"
                                value={queryContent}
                                onChange={(e) => setQueryContent(e.target.value)}
                            />
                        </div>
                        <div className="input-box message-box"></div>
                        <div className="button">
                            <input type="submit" value="Send Now" />
                        </div>
                    </form>
                </div>
            </div>
            {/* <a>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4814935873596!2d77.56333711464487!3d12.941012190875952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1664289586405!5m2!1sen!2sin" width="600" height="450" loading="lazy">
                </iframe>
            </a> */}
        </div>
    )
}

export default Contact