import React from "react";
import "./article.css";

const Article = (props) => (
  <div className="blog_article">
    <div className="blog_article_img">
      <img src={props.url} alt="BLOG" />
    </div>
    <div className="blog_article_content">
      <div>
        <p>{props.date}</p>
        <h3>{props.text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
