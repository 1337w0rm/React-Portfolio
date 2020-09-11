import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import About from './pages/About'
import Navigation from './pages/Navigation'
import Navbar from './components/Navbar'
import {Row, Col} from 'react-bootstrap'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			display:  true,
		}
	}


	toggle = () => {
		if(window.location.pathname === '/'){
			this.setState({
				display: true,
			})
		} else {
			this.setState({
				display: false,
			})
		}
	}

	render() {
		return(
			<Container fluid={true} className="bg-dark p-3">
				<Row>
					<Col className="m-0">
						{this.state.display ? 
								<SlideDown className={'my-dropdown-about'} closed={false}>
              						<About />
            					</SlideDown>

								: <Navigation />
                  	}
					</Col>
				</Row>
				<Row>
					<Col className="p-2">
						<Navbar onClick={() => this.toggle()}/>
					</Col>
				</Row>

			</Container>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'))