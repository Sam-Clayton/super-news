import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SingleArticle() {
    const [article, setArticle] = useState(null);
    const { article_id } = useParams();
    console.log(article, '< Article')

    useEffect(() => {
        async function fetchArticle(){
            const res = await fetch(`https://northcoders-news-database.onrender.com/api/articles/${article_id}`);
            const { article } = await res.json();
            console.log(article, '<<<< Article')
            setArticle(article);
        };
        fetchArticle();
    }, [article_id]);

    if (article) {
        
         return (
            <div>
                <h2>{article.title}</h2>
                <p>Written by: {article.author}</p> 
                <p>Topic: {article.topic}</p>
                <img id="article-img" src={article.article_img_url}/>
                <p id="article-body">{article.body}</p>
                <br/>
                <p>Votes: {article.votes}</p>
            </div>        
        );
    }
};