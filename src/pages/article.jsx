import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentsList } from "../components/comment-list";
import { ChangeArticleVote } from "../components/vote-button";

export function SingleArticle() {
    const [article, setArticle] = useState(null);
    const { article_id } = useParams();

    useEffect(() => {
        async function fetchArticle(){
            const res = await fetch(`https://northcoders-news-database.onrender.com/api/articles/${article_id}`);
            const { article } = await res.json();
            setArticle(article);
        };
        fetchArticle();
    }, [article_id]);

    if (article) {
        
         return (
            <div className="article-page">
                <h2>{article.title}</h2>
                <p>Written by: {article.author}</p> 
                <p>Topic: {article.topic}</p>
                <img id="article-img" src={article.article_img_url}/>
                <div className="vote-box">
                    <ChangeArticleVote votes={article.votes} article_id={article.article_id} />
                </div>
                    <br/>
                <p id="article-body">{article.body}</p>
                    <br/>
                <CommentsList />
            </div>        
        );
    }
};