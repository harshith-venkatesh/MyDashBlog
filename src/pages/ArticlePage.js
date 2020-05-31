import React, { useState, useEffect } from "react";
import articles from "./ArticleContent";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articles.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, []);
  const otherArticles = articles.filter((article) => article.name !== name);
  if (!article) return <NotFoundPage />;
  return (
    <React.Fragment>
      <h1>{article.name} </h1>
      <h6>This post has been upvoted {articleInfo.upvotes} times </h6>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph} </p>
      ))}
      <h2>Other Articles</h2>
      <ArticleList articles={otherArticles} />
    </React.Fragment>
  );
};

export default ArticlePage;
