import React from 'react'
import CommentForm from "./CommentForm"

class CommentsBlock extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="article-comments">
				<h3>Комментарии</h3>
				<CommentForm article_id={this.props.article_id} />
				<div className="comment-list">
					{this.props.comments.length == 0 ? 'комментариев пока что нет' : ''}
					{this.props.comments.map((c, i) => {
						return (
						<div className="comment" key={i}>
							<div className="title"><h3>{c.author_name}</h3><span className="datetime">{c.created_at}</span>
							</div>
							<p>{c.text}</p>
						</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default CommentsBlock
