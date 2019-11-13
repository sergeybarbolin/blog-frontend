import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderBlock from './components/HeaderBlock';
import AddPostForm from './components/AddPostForm';
import FullPost from './components/FullPost';
import NotFound from './components/NotFound';

import PostsList from './modules/PostsList';

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
              <Route path="/" exact component={ PostsList } />
              <Route path="/post/:id" exact component={() => (
                <FullPost title="Title" createdAt="test" />
              )} />
              <Route path="/post/:id/edit" exact component={ AddPostForm } />
              <Route path="/post/:id/edit" exact component={ AddPostForm } />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
