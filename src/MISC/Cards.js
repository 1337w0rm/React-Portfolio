import React from 'react'
import {Card, Nav, Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import About from './About'
import Navigation from './Navigation'

function Cards() {
	return(
		<Router>
			<Container fluid={true}>
				<Card className="bg-dark">
				  <Card.Header>
				    <Nav variant="tabs">
				      <Nav.Item>
				        <Link className="border nav-link text-light bg-dark" to="/">About</Link>
				      </Nav.Item>
				      <Nav.Item>
				        <Link className="nav-link border text-light bg-dark" to="/resume">Resume</Link>
				      </Nav.Item>
				      <Nav.Item>
				        <Link className="nav-link border text-light bg-dark" to="/projects" disabled>
				          Projects
				        </Link>
				      </Nav.Item>
				      <Nav.Item>
				        <Link className="nav-link border text-light bg-dark" to="/social" disabled>
				          Social Profiles
				        </Link>
				      </Nav.Item>
				    </Nav>
				  </Card.Header>
				</Card>

				<Route path="/" exact render={() => <About />}/>
			</Container>
		</Router>
	);
}

export default Cards