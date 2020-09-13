import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Project from '../pages/project'
import Resume from '../pages/Resume'

function Navbar(props) {
	return (
		<Router>
      <div>
      <Container>
        <Row>
          <Col className="p-0">
        	  <Button onClick={props.onClick} className="mx-auto d-block p-2 m-5 btn-dark border border-light"><Link className="p-3 text-white" to="/">Profile</Link></Button>
          </Col>
          <Col>	
            <Button onClick={props.onClick} className="mx-auto d-block p-2 m-5 btn-dark border border-light"><Link className="p-3 text-white" to="/projects">Projects</Link></Button>
          </Col>
          <Col>
            <Button onClick={props.onClick} className="mx-auto d-block p-2 m-5 btn-dark border border-light"><Link className="p-3 text-white" to="/resume">Resume</Link></Button>
          </Col>
        </Row>
      </Container>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <Switch>
          <Route path="/projects">
            <SlideDown className={'my-dropdown-slidedown'} closed={false}>
              <Project />
            </SlideDown>
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
	);
}

export default Navbar
