import React from 'react'
import MainMenu from "./MainMenu";
import MediaQuery from "react-responsive";
import CiteHeader from "./CiteHeader";
import MailForm from "./MailForm";

class MailPage extends React.Component {
	constructor(props) {
		super(props)
		this.sendForm = this.sendForm.bind(this)
	}

	sendForm = (e) => {
		e.preventDefault()
			const formData = new FormData(document.querySelector('form'))
			$.ajax({
				type: 'post',
				url: '/api/send-mail',
				cache: false,
				data: formData,
				processData: false,
				contentType: false,
				success: function (res) {
					setResult('Письмо успешно отправлено! Спасибо!')
				},
				error: function (xhr) {
					console.log(JSON.parse(xhr.responseText))
				}
			})
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
						<MailForm/>
				</div>
				</div>
			</div>
		)
	}
}

export default MailPage
