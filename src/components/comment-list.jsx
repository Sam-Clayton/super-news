import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "./comment";
import { AddComment } from "./add-comment";


export function CommentsList() {
    const [comments, setComments] = useState(null);
    const { article_id } = useParams();

    useEffect(() => {
        async function fetchComments() {
            const res = await fetch(
                `https://northcoders-news-database.onrender.com/api/articles/${article_id}/comments`
            );
            const results = await res.json();
            setComments(results);
        };
        fetchComments();
    }, [article_id]);

    if (comments) {
        const commentsArray = comments.comments
        console.log(comments)
        return (
            <div className="comment-list">
                <h3>Comments</h3>
                <AddComment article_id={article_id} setComments={setComments} />
                <ul>
                    {commentsArray.map((comment) => (
                        <Comment key={comment.comment_id} {...comment} />
                    ))}
                </ul>
            </div>
        );
    }
};