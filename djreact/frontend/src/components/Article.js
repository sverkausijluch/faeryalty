import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import MainMenu from "./MainMenu"
import CommentsBlock from "./CommentsBlock"
import {Link} from "react-router-dom"
import MediaQuery from "react-responsive";
import CiteHeader from "./CiteHeader";

function Article() {
	const {article_id} = useParams()
	const [article, setArticle] = useState({comment: [], category: []})
	const useMountEffect = () => {
		useEffect(() => {
			let get_article = axios.get(window.location.origin + '/api/article-retrieve/' + article_id).catch(function (error) {
				setArticle(0)
			})
			get_article.then(res => {
				let article = res.data
				setArticle(article)
			})
		}, [])
	}
	useMountEffect()
	const copyLink = () => {
		let input = document.getElementById('article_link')
		input.select()
		document.execCommand("copy")
		let copy_result_block = document.getElementById('copy_result')
		copy_result_block.classList.remove('hide')
		setTimeout(()=>copy_result_block.classList.add('hide'), 1000);
	}
	return (
		<div className="main-container">
			<MediaQuery maxWidth={800}>
					<CiteHeader page=""/>
    			</MediaQuery>
    		    <MediaQuery minWidth={801}>
					<MainMenu page=""/>
				</MediaQuery>
			<div className="col-2">
				{(() => {
					if (article == 0) {
						return (
							<div className="article-header">
								<h2>Статья не найдена</h2>
							</div>
						)
					} else {
						return (
							<>
								<img src={article.cover} className="cover"/>
								<div className="article-header">
									<h3>{article.title}</h3>
								</div>
								<div className="article-content">
										<div className="copy-block">
											<div className="link-btn" onClick={copyLink}>
												<i className="el-icon-message"></i>поделиться
												<input type="hidden" value={'faeryalty.ru/'+article.id} id="article_link"/>
											</div>
											<span className="copy-result hide" id="copy_result">
												<img src="http://www.lenagold.ru/fon/clipart/r/raku/rakush15.gif"/>
												Ссылка скопирована!</span>
										</div>
										<div className="article-text">
											{article.text}
										</div>
										<span className="created-at">{article.created_at}</span>
										<ul className="tag-list">
											{article.category.map((cat, i) => {
												return (
												<div className="comment" key={i}>
													<li><Link to={{pathname: "../all-notes", cat_id: cat.id}}>#{cat.name}</Link></li>
												</div>
												)
											})}
										</ul>
										<CommentsBlock comments={article.comment} article_id={article.id} />
								</div>
							</>
						)
					}
				})()}
			</div>
		</div>
	)
}

export default Article
