import React from 'react';
import PostItem from './../PostItem'

const PostsList = ({ items }) => (
    <section className="posts-list">
        { items ? items.map(post => <PostItem key={post._id} {...post} /> ) : 'Loading...' }
    </section>
)

export default PostsList;