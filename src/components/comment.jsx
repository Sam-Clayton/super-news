import { ChangeCommentVote } from "./vote-button";

export function Comment({comment_id, votes, created_at, author, body}) {
    const date = new Date(created_at)
    const formattedDate = date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

        return (
            <li key={comment_id} className="comment-card">
                <div className="comment-top-row">
                    <span className="comment-author">{author}</span>
                    <span className="comment-created">{formattedDate}</span>
                </div>
                <p className="comment-body">{body}</p>
                <p className="votes">{votes}</p>
            </li>
        );
}