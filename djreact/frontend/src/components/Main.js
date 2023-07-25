import React from 'react'
import MainMenu from "./MainMenu"
import MediaQuery from 'react-responsive'
import IndexPage from "./IndexPage"
import CiteHeader from "./CiteHeader";

class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main-container">
				<MediaQuery maxWidth={800}>
					<CiteHeader page="main"/>
    			</MediaQuery>
    		    <MediaQuery minWidth={801}>
					<MainMenu page="main"/>
				</MediaQuery>
				<IndexPage />
			</div>
		)
	}
}

export default Main
