import React from 'react';
import './PostItem.scss';

const PostItem = ({ title, created_ad, _id }) => (
    <article className="post-item">
        <a href={'/post/' + _id} >
            <h3>{ title }</h3>
        </a>
    <p>
        <i>Posted on { created_ad }</i>
        <a href="#">Remove</a>
        <a href="#">Edit</a>
    </p>
    </article>
)

export default PostItem;