import React from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "../../static/frontend/cover.jpg"

class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
	}

	componentDidMount() {
		axios.get(window.location.origin + '/api/article-list/0').then(res => {
			let articles = res.data
			this.setState({
				articles: articles
			})
		})
	}

	render() {
		return (
			<div className="col-2">
				<img src="../../static/frontend/cover.jpg" className="cover"/>
				<div className="note-list">
					<h2>Новые записи</h2>
					<ul>
					{this.state.articles.map((article, index) => {
						return (
							<li key={index}>
								<span className="created-at">12.05.2023</span>
								<Link to={"/" + article.id}>{article.title}</Link>
							</li>
						)
					})}
					</ul>
					<Link to="/all-notes" className="link-btn">Все записи</Link>
				</div>
			</div>
		)
	}
}

export default IndexPage
