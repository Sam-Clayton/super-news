# Super News

A Reddit-style front-end application for browsing articles, commenting with up-votes/down-votes. Built with React and Vite.

## Features
- Browse a list of articles
- View individual articles with details
- Add comments to articles
- Upvote and downvote articles
- Responsive and modern UI

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
```
npm install
```

### Running the App
```
npm run dev
```
The app will start on [http://localhost:5173](http://localhost:5173) by default.

## Usage
- Navigate to **All Articles** to browse available articles.
- Click on an article to view details, comments, and voting options.
- Add your own comment and vote on articles.

## Technologies Used
- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [ESLint](https://eslint.org/)

## Folder Structure
```
src/
	api.js           # API calls to backend
	App.jsx          # Main app component
	components/      # Reusable UI components
	pages/           # Page-level components (articles, home, topics)
	assets/          # Static assets
public/            # Public files
```

## API
This app connects to the [Northcoders News API](https://northcoders-news-database.onrender.com/api).
- Fetch articles, comments, and vote using REST endpoints.