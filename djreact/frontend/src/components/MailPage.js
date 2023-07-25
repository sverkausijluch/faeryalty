import React from 'react'
import MainMenu from "./MainMenu";
import MediaQuery from "react-responsive";
import CiteHeader from "./CiteHeader";

class MailPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main-container">
				<MediaQuery maxWidth={800}>
					<CiteHeader page="mail"/>
    			</MediaQuery>
    		    <MediaQuery minWidth={801}>
					<MainMenu page="mail"/>
				</MediaQuery>
				<div className="col-2">
					<div className="mail-content">
						<h2><i className="el-icon-chat-round"></i> Написать письмо</h2>
						<form className="mail-form">
							<div className="inputWrapper">
								<label>Имя</label>
								<input/>
							</div>
							<div className="inputWrapper">
								<label>Почта</label>
								<input/>
							</div>
							<div className="inputWrapper">
								<label>Сообщение</label>
								<textarea></textarea>
							</div>
							<button className="super-btn">Отправить</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default MailPage
