import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderBlock from './components/HeaderBlock';
import PostsList from './components/PostsList';
import AddPostForm from './components/AddPostForm';
import FullPost from './components/FullPost';

function App() {
  return (
    <div className="App">
      <HeaderBlock 
        title="Simple blog"
        description="Stack: Node.js, Express, MongoDB, React"
      />
      <div className="container">
        {/* <div className="content">
          <button type="button" className="btn btn-primary">
            Add Post
          </button>
        </div> */}

        <div className="content">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={() => (
                <PostsList posts={[
                  {
                    _id: '1',
                    title: 'First post',
                    createdAt: 'November 8, 2019'
                  },
                  {
                    _id: '2',
                    title: 'Second post',
                    createdAt: 'November 8, 2019'
                  },
                  {
                    _id: '3',
                    title: 'Third post',
                    createdAt: 'November 8, 2019'
                  }
                ]} />
              )} />
              <Route path="/post/:id" exact component={() => (
                <FullPost title="Title" createdAt="test" />
              )} />
              <Route path="/post/:id/edit" exact component={AddPostForm} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
