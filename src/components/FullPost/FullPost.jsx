import React from 'react';

const FullPost = ({ title, createdAt }) => (
    <article className="post-item">
        <h3>{ title }</h3>
        <p className="content">
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
        </p>
        <p><i>Posted on { createdAt }</i></p>
    </article>
)

export default FullPost;