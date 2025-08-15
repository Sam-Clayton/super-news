export function fetchComments(article_id) {
    return fetch(`https://northcoders-news-database.onrender.com/api/articles/${article_id}/comments`)
        .then(res => res.json());
}

export function patchArticleVotes(article_id) {
    return fetch(`https://northcoders-news-database.onrender.com/api/articles/${article_id}`, {
        method: 'PATCH',
        body: JSON.stringify(),
        headers: { 'Content-type': 'application/json' }
    })
    .then((res) => res.json())
}

export function postComment(article_id, username, body) {
    return fetch(`https://northcoders-news-database.onrender.com/api/articles/${article_id}/comments`, {
        method: 'POST',
        body: JSON.stringify({ username, body }),
        headers: { 'Content-type': 'application/json' }
    })
    .then((res) => {res.json()})
}