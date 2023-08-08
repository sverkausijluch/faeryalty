import React from 'react'
import axios from "axios"
import MainMenu from "./MainMenu"
import ArticleList from "./ArticleList"
import MediaQuery from "react-responsive";
import CiteHeader from "./CiteHeader";

class ArticlesListPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
			cats: [],
		}
		this.selectCat = this.selectCat.bind(this)
		this.setArticles = this.setArticles.bind(this)
	}

	componentDidMount() {
		axios.get(window.location.origin + '/api/get-cats').then(res => {
			let cats = res.data
			this.setState({
				cats: cats
			})
		})
		this.setArticles()
	}
	selectCat = (e) => {
		document.querySelectorAll('.active').forEach(el => el.classList.remove('active'))
		e.target.classList.add('active')
		let cat_id = e.target.getAttribute('data-id')
		this.setArticles(cat_id)
	}

	setArticles = (cat_id=0) => {
		axios.get(window.location.origin + '/api/article-list/'+cat_id).then(res => {
			let articles = res.data
			this.setState({
				articles: articles
			})
		})
	}

	render() {
		return (
			<div className="main-container">
				<MediaQuery maxWidth={800}>
					<CiteHeader page=""/>
    			</MediaQuery>
    		    <MediaQuery minWidth={801}>
					<MainMenu page=""/>
				</MediaQuery>
				<div className="col-2">
					<div className="note-list">
						<h2>Все записи</h2>
						<ul className="tag-list">
							<li onClick={this.selectCat} data-id="0">Все</li>
							{this.state.cats.map((cat, index) => {
								return (
									<li onClick={this.selectCat} data-id={cat.id} key={cat.id}>#{cat.name}</li>
								)
							})}
						</ul>
						<ArticleList articles={this.state.articles}/>
					</div>
				</div>
			</div>
		)
	}
}

export default ArticlesListPage
