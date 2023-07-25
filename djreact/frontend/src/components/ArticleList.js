import React from 'react'
import {Link} from "react-router-dom"

class ArticleList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ul>
				{this.props.articles.map((article, index) => {
					return (
						<li key={index}>
							<span className="created-at">12.05.2023</span>
							<Link to={"/" + article.id}>{article.title}</Link>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default ArticleList
