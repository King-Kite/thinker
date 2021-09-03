import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Provider from "./store/Provider";
import HomePage from "./pages/Home";
import PostsPage from "./pages/Posts";
import PostPage from "./pages/Post";
import CreatePostPage from "./pages/CreatePost";

const App = () => (
  <Provider>
    <Router>
      <ScrollToTop>
        <Switch>
            <Route path="/create" component={CreatePostPage} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/posts" component={PostsPage} />
            <Route exact path="/" component={HomePage} />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
)

export default App;
