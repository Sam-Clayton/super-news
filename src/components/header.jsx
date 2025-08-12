import { AllArticles } from "../pages/all-articles";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <div  className="news-header">
                <Link to={'/'} style={{textDecoration: 'none', color: "inherit"}}>
                    <h1 >Super News</h1>
                </Link>
            </div>
            <div className="nav-bar">
                <Link to="/all-articles" style={{textDecoration: 'none', color: "inherit"}}>
                    <nav>All Articles</nav>
                </Link>
            </div>
        </>
    )
}