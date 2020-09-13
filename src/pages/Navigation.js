import React from 'react'
import {Container, Jumbotron, Row, Col, Image} from '../../node_modules/react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


import logo from '../img/logo.jpg'

function Navigation(props) {
	return(
		<Jumbotron fluid={true} className="p-2 bg-dark border-bottom" style={props.style}>
			<Container>
				<Row>
					<Col sm={4}>
						<Image roundedCircle width={65} className="mx-auto d-block" src={logo} alt="logo"/>
					</Col>
	
					<Col sm={4}>
						<h5 className="py-2 m-0 text-center mx-auto d-block text-light font-weight-bolder text-uppercase">Aditya Kumar Singh</h5>
						<h6 className="text-center text-light  text-uppercase">DEVELOPER | STUDENT</h6>
					</Col>
					<Col sm={4} className="p-0 justify-content-center d-flex mx-auto" md={2}>
						<a className="p-1 text-center" href="https://instagram.com/0xaditya"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
						<a className="p-1" href="https://github.com/1337w0rm"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
						<a className="p-1" href="https://linkedin.com/0xaditya"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
}


export default Navigation