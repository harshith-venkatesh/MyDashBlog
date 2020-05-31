import React from "react";
import ArticleList from "../components/ArticleList";
import articles from "./ArticleContent";
const ArticleListPage = () => {
  return (
    <React.Fragment>
      <h2>Article List</h2>
      <ArticleList articles={articles} />
    </React.Fragment>
  );
};

//some addition

export default ArticleListPage;
