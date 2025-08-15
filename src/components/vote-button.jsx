import { useState, useEffect } from "react";
import { patchArticleVotes } from "../api";

export function ChangeArticleVote({ votes, article_id }) {
    const [currentVotes, setCurrentVotes] = useState(votes);

    function handleClickUp() {
        setCurrentVotes(currentVotes + 1);
        patchArticleVotes(article_id, 1)
        .catch(() => {
            setCurrentVotes(currentVotes);
            alert('Upvote failed, please try again');
        });
    }

    function handleClickDown() {
        setCurrentVotes(currentVotes - 1);
        patchArticleVotes(article_id, -1)
        .catch(() => {
            setCurrentVotes(currentVotes);
            alert('Downvote failed, please try again')
        });
    }

    return (
        <>
            <button id="upvote" onClick={ handleClickUp }>
                Upvote 
                <svg id="arrow" width="20" height="20" viewBox="0 0 20 20" style={{verticalAlign: "middle", marginRight: "8px"}}>
                    <polygon points="10,3 17,15 3,15" fill="#215e5f"/>
                </svg>
                </button>
            <p>Votes: {currentVotes}</p>
            <button id="downvote" onClick={ handleClickDown }>
                Downvote
                <svg id="arrow" width="20" height="20" viewBox="0 0 20 20" style={{verticalAlign: "middle", marginRight: "8px"}}>
                    <polygon points="3,5 17,5 10,17" fill="#215e5f"/>
                </svg>
            </button>
        </>
    )
}

export function ChangeCommentVote({ votes, comment_id }) {
    

}