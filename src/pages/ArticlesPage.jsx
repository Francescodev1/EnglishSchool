// /src/pages/ArticlesPage.js
import React from 'react';
import { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard'; // Assumi che questo componente visualizzi un articolo


const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost/quiz/wordpress/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    
    <div className="articles-container my-3">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
      
    </div>
  );
};

export default ArticlePage;
