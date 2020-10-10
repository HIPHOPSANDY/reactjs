import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import { auth, db } from "./firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import { Button } from "@material-ui/core";
import Upload from "./ImageUpload";

function App() {
  const [user, setUser] = useState(null);

  const [post, setPost] = useState([]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <div className="app__posts">
              
                {post.map(({ id, post }) => (
                  <Post
                    key={id}
                    postId={id}
                    user={user}
                    username={post.username}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                  />
                ))}
              </div>

              {user?.displayName ? (
                <Upload username={user.displayName} />
              ) : (
                <Upload />
              )}
              {post.map(({ id, post }) => (
                <Post
                  key={id}
                  username={post.username}
                  caption={post.caption}
                  imageUrl={post.imageUrl}
                />
              ))}
            </Route>
            <Route path="/channels">
              <Channles/>
            </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
