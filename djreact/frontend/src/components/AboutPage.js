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
						<h2>Приве-е-е-ет!</h2>
						<h2>Меня зовут Катя и я...</h2>
						<div className="about-info">
							<img src="../../static/frontend/фото.jpg" />
							<div className="text">
								<p>
									Котенок со всех своих коротких лапок побежал исследовать окрестности. И вскоре
									увидел
									сидящую в траве маленькую птичку. В первый момент Снежок захотел подбежать к ней,
									осмотреть и обнюхать, но потом вспомнил, что он хищник и ему не пристало дружить с
									добычей. А этот птенчик в его глазах совершенно точно был добычей. Крохотный,
									взъерошенный, с желтой грудкой и блестящими глазками, беспомощно машущий крылышками
									и
									разевающий клюв, птенчик никак не мог победить котёнка и точно был слабее его. И
									углядев
									котёнка, птенчик запищал еще отчаяннее. Он был еще младше Снежка и всего боялся. От
									испуга птенчика котенок почувствовал свою важность, раздулся от удовольствия, а
									потом
									припал к земле и медленно пополз к своей добыче.
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
