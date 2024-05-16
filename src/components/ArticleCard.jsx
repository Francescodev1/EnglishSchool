import React from 'react';
import '../App.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="unique-article-card my-5 shadow-sm">
      {article.acf.copertina && (
        <img
          src={article.acf.copertina.url}
          alt={article.acf.copertina.alt || 'Article Image'}
          className="unique-article-img-top"
          
        />
      )}
      <div className="unique-article-body">
        <h2 className="unique-article-title text-center text-white">{article.title.rendered}</h2>
        <p className="unique-article-text text-white" dangerouslySetInnerHTML={{ __html: article.acf.paragrafo }} />
      </div>
    </div>
  );
};

export default ArticleCard;
