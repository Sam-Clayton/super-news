import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function AllArticles() {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        async function fetchArticles(){
            const res = await fetch("https://northcoders-news-database.onrender.com/api/articles");
            const { articles } = await res.json();
            setArticles(articles);
        };
        fetchArticles();
    }, []);

    if (articles) {
        
         return (
            <section className="article-section">
                <div className="articles-grid">
                    {articles.map(article => {
                    const date = new Date(article.created_at)
                    const formattedDate = date.toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'short'
                    });
                    return (
                        
                            <Link 
                                to={`/articles/${article.article_id}`}
                                key={article.article_id}
                                className="article-card"
                                style={{textDecoration: "none", color: "inherit"}}
                                >
                                    <div className="card-top-row">
                                        <span className="article-id">#{article.article_id}</span>
                                        <span className="article-date">{formattedDate}</span>
                                    </div>
                                    <img id="list-img" src={article.article_img_url}/>
                                    <h2 id="article-title">{article.title}</h2>
                            </Link>
                    )
                    })}
                </div>
            </section>
        );
    }
};