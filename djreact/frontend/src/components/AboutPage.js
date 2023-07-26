import React from 'react'
import "../../static/frontend/фото.jpg"
import MainMenu from "./MainMenu"
import MediaQuery from 'react-responsive'
import CiteHeader from "./CiteHeader"

class AboutPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main-container">
				<MediaQuery maxWidth={800}>
					<CiteHeader page="about"/>
				</MediaQuery>
				<MediaQuery minWidth={801}>
					<MainMenu page="about"/>
				</MediaQuery>
				<div className="col-2">
					<div className="about-content">
						<h2>Приве-е-е-ет! 😊</h2>
						<h2>Меня зовут Катя и я...</h2>
						<div className="about-info">
							<img src="../../static/frontend/фото.jpg"/>
							<div className="text">
								<p>
									...
									рассказываю здесь о своём творчестве, моментах и вещах что трогают мою душу. ✨
									Размышлениях о жизни, и не только.
									Рада приветствовать в моем коралевстве Фьюралти ❤️
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutPage
