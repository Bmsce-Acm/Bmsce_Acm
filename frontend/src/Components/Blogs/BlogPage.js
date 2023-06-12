import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getPostDetails, clearErrors } from '../../Actions/postsActs.js';
import purify from "dompurify";

const BlogPage = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const params = useParams();

    const { post, error, loading } = useSelector((state) => state.post);
    const postId = params.id;

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getPostDetails(postId));
    }, [error, alert, dispatch, postId]);

    return (
        <div className='blog_cnt'>
            <div dangerouslySetInnerHTML={{ __html: purify.sanitize(post?.content) }} />
        </div>
    )
};

export default BlogPage;