import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div id="nav-bar-container">
                    <NavBar />
                </div>
                <div id="page-body">
                    <small>Built using React, Node, Express and MongoDB</small>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/articles" element={<ArticleListPage />} />
                        <Route path="/articles/:articleId" element={<ArticlePage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}