import React from 'react';
import './article.css';

// Article component that displays a blog article
const Article = ({ imgUrl, date, text }) => (
  <div className="tech__blog-container_article">
    {/* Article image container */}
    <div className="tech__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>

    {/* Article content container */}
    <div className="tech__blog-container_article-content">
      {/* Date and Title section */}
      <div>
        {/* Date of the article */}
        <p>{date}</p>
        {/* Title of the article */}
        <h3>{text}</h3>
      </div>

      {/* Read Full Article link */}
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
