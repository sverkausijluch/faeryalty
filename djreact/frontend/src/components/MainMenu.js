import React from 'react'
import { Link } from "react-router-dom"

class MainMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="col-1">
				<h1>faeryalty</h1>
				<ul>
					<li className={this.props.page=="main"?"active":""}><Link to="../">Главная</Link></li>
					<li className={this.props.page=="about"?"active":""}><Link to="../about" className="">Обо мне</Link></li>
					<li className={this.props.page=="mail"?"active":""}><Link to="../mail" className="">Почта</Link></li>
				</ul>
			</div>
		)
	}
}

export default MainMenu
