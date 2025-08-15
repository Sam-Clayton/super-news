import { fetchComments, postComment } from "../api";
import { useState, useEffect } from "react";

export function AddComment({ article_id, setComments }) {
    const [username, setUsername] = useState('jessjelly'); //hardcoded for testing
    const [bodyText, setBodyText] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        await postComment(article_id, username, bodyText);
        const results = await fetchComments(article_id)
        setComments(results)
        setBodyText('');
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>Write your comment here</label>
                <input 
                    type="text"
                    value={bodyText}
                    onChange={event => setBodyText(event.target.value)}
                />
                <input type="submit"></input>
            </form>
        </section>
    )
}