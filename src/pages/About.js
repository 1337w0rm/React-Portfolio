import React from 'react'
import {Jumbotron, Row, Col, Container, Image} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import logo from '../img/logo.jpg'

function About(props) {

	return(
		<Jumbotron fluid={true} style={props.style} className="mt-4 p-1 bg-dark border border-light">
			<Container>
				<Row>
					<Col>
						<Image roundedCircle width={150} className="mx-auto d-block" src={logo} alt="logo"/>
					</Col>
				</Row>
				<Row>
					<Col className="p-3">
						<h3 className="text-center display-5 text-light font-weight-bolder text-uppercase">Aditya Kumar Singh</h3>
						<p className="text-light text-center font-weight-bold">DEVELOPER | STUDENT </p>
						<p className="text-center text-light">I'm a Computer Science Engineering student at Barak Valley Engineering College currently in 5th semester learning new technologies. I have a strong passion for self-improvement and learning new things.</p>
					</Col>
				</Row>
				<Row >
					<Col>
						<a className="p-1" href="https://instagram.com/0xaditya"><FontAwesomeIcon className="mx-auto d-block" icon={faInstagram} size="3x"/></a>
					</Col>
					<Col>
						<a className="p-1" href="https://github.com/1337w0rm"><FontAwesomeIcon className="mx-auto d-block" icon={faGithub} size="3x"/></a>
					</Col>
					<Col>
						<a className="p-1" href="https://linkedin.com/0xaditya"><FontAwesomeIcon className="mx-auto d-block"  icon={faLinkedin} size="3x"/></a>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	)
}

export default About