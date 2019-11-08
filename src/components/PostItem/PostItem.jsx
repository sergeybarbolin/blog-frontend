import React from 'react';
import { Link } from 'react-router-dom'
import './PostItem.scss';

const PostItem = ({ title, createdAt, _id }) => (
    <article className="post-item">
        <Link to={'/post/' + _id} >
            <h3>{ title }</h3>
        </Link>
        <p>
            <i>Posted on { createdAt }</i>
            <a href="">Remove</a>
            <Link to={`/post/${_id}/edit`}>Edit</Link>
        </p>
    </article>
)

export default PostItem;