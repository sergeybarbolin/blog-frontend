import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from './../../../components/PostsList';
import PostsListActions from './../actions';

class PostsListContainer extends Component {
    componentDidMount() {
        const { fetchItems } = this.props;
        
        fetchItems();
    }

    render() {
        return <PostsList {...this.props} />;
    }
}

export default connect(
    ({ posts }) => posts,
    PostsListActions
)(PostsListContainer)