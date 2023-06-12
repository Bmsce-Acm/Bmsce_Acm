import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { allPosts, getCategoryName, clearErrors } from '../../Actions/postsActs.js';
import CardItem from '../Utils/CardItem.js';

const AllBlogs = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { posts, error, loading } = useSelector((state) => state.posts);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(allPosts());
    }, [error, dispatch, alert]);

    return (
        <div className='blogs_container'>
            <div className="blogs-grid">
                <div className="events__main">
                    <div className='cards__container'>
                        <div className="cards__wrapper">
                            {
                                posts.map((blog) => {
                                    return (
                                        <ul className="cards__items">
                                            <CardItem
                                                src={blog.thumbnail}
                                                text={blog.title}
                                                label={blog.category}
                                                path={`/blog/${blog.id}`}
                                            />
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs