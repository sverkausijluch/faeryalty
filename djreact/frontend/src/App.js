import React, { Component } from 'react'
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./components/Main"
import Article from "./components/Article"
import './App.css'
import ArticlesListPage from "./components/ArticlesListPage"
import AboutPage from "./components/AboutPage"
import MailPage from "./components/MailPage"


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Main/>}/>
                        <Route path="all-notes" element={<ArticlesListPage/>}/>
                        <Route path="about" element={<AboutPage/>}/>
                        <Route path="mail" element={<MailPage/>}/>
                        <Route path=":article_id" element={<Article/>}/>
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        )
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container)