import React from 'react';
import PostItem from './../PostItem'

const PostsList = ({ posts }) => (
    <section className="posts-list">
        { posts.map(post => <PostItem key={post._id} {...post} /> )}
    </section>
)

export default PostsList;