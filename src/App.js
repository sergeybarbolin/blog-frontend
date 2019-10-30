import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <HeaderBlock 
        title="Simple blog"
        description="Stack: Node.js, Express, MongoDB, React"
        imageUrl="https://images.unsplash.com/photo-1542080255-e564af7ae266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1992&q=80"
      />
      <div className="container">
        <div className="content">
          <button type="button" className="btn btn-primary">
            Add Post
          </button>
        </div>

        <div className="content">
          <section className="post-items">
            <PostItem 
              title="Заголовок первого поста"
              created_ad="November 2, 2019"
              _id="1"
            />
            <PostItem 
              title="Заголовок первого поста"
              created_ad="November 2, 2019"
              _id="1"
            />
            <PostItem 
              title="Заголовок первого поста"
              created_ad="November 2, 2019"
              _id="1"
            />
            <PostItem 
              title="Заголовок первого поста"
              created_ad="November 2, 2019"
              _id="1"
            />
            <PostItem 
              title="Заголовок первого поста"
              created_ad="November 2, 2019"
              _id="1"
            />
            <PostItem 
              title="Заголовок первого поста"
              created_ad="November 2, 2019"
              _id="1"
            />
            <PostItem 
              title="Заголовок первого поста"
              created_ad="November 2, 2019"
              _id="1"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
