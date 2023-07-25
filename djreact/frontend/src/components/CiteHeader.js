import React from 'react'
import {Link} from "react-router-dom"

class CiteHeader extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="col-1">
				<h1><Link to="../">Розовый блог</Link></h1>
				<ul>
					<li className={this.props.page=="about"?"active":""}><Link to="../about" className=""><i className="el-icon-info"></i></Link></li>
					<li className={this.props.page=="mail"?"active":""}><Link to="../mail" className=""><i className="el-icon-message"></i></Link></li>
				</ul>
			</div>
		)
	}
}

export default CiteHeader
