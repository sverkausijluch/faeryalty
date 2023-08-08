import React from 'react'
import {Link} from "react-router-dom"
import axios from "axios";

class SuperArticles extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
	}

	componentDidMount() {
		axios.get(window.location.origin + '/api/super-articles-retrieve').then(res => {
			let articles = res.data
			this.setState({
				articles: articles
			})
		})
	}

	render() {
		return (
			<article className="super-articles">
                <header><h3>Что еще посмотреть?</h3></header>
                <ul>
					{this.state.articles.map((note, index) => {
						return (
							<li key={index}>
								<Link to={"../" + note.article.id}><i className="el-icon-caret-right"></i> {note.article.title}</Link>
							</li>
						)
					})}
                </ul>
			</article>
		)
	}
}

export default SuperArticles
