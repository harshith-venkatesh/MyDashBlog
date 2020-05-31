import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import styled from "styled-components";
import NavBar from "./Navbar";
import NotFoundPage from "./pages/NotFoundPage";

const PageBody = styled.div`
  max-width: 700px;
  margin: auto;
  padding-top: 64px;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <PageBody>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articleList" component={ArticleListPage} />
            <Route path="/articlePage/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </PageBody>
      </div>
    </Router>
  );
}

export default App;
