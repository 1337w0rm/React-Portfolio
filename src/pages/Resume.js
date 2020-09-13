import React from 'react'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons' 
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
function Resume()
{
	return(
		<Jumbotron className="text-white bg-dark border border-light">
		<Container className="main m-3 mx-auto d-block">
			<Row>
				<Col md={8} id="left-content mb-5">
					<h3 className="mb-4 font-weight-bold border-bottom border-bottom">Education</h3>
						<ul style={{listStyleType: "none"}} className="p-0">
							<li className="education p-3 border-left">
								<div className="row">
									<div className="col-md-10">
										<h4>B. Tech</h4>
									</div>
									<div className="col-md-2">
										<span>2018 - Present</span>
									</div>
								</div>

								<h5>Computer Science Engineering</h5>
								<h5>Barak Valley Engineering College</h5>
							</li>


							<li className="education p-3 mt-4 border-left">
								<div className="row">
									<div className="col-md-10">
										<h4>Class XII - 79.8%</h4>
									</div>
									<div className="col-md-2">
										<span>2016 - 2018</span>
									</div>
								</div>

								<h5>Physics, Chemistry, Mathematics, Computer Science</h5>
								<h5>Kendriya Vidyalaya</h5>
							</li>


							<li className="education p-3 mt-4 border-left">
								<div className="row">
									<div className="col-md-10">
										<h4>Class X - 10.0 CGPA</h4>
									</div>
									<div className="col-md-2">
										<span>2015 - 2016</span>
									</div>
								</div>
								<h5>Kendriya Vidyalaya</h5>
							</li>
						</ul>
					</Col>

					<Col md={4}>
						<h3 className="font-weight-bold border-bottom">Programming Languages</h3>
						<ul style={{listStyleType: "none"}} className="skills p-0 mb-2">
							<li>
								<span>C++</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>

							<li>
								<span>Python</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>


							<li>
								<span>C</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>

							<li>
								<span>Go</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>
						</ul>




						<h3 className="font-weight-bold border-bottom">Backend Skills</h3>
						<ul style={{listStyleType: "none"}} className="skills p-0 mb-2">
							<li>
								<span>Python Django</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>

							<li>
								<span>MySQL</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>
						</ul>

						<h3 className="font-weight-bold border-bottom">Frontend Skills</h3>
						<ul style={{listStyleType: "none"}} className="skills p-0 mb-2">
							<li>
								<span>HTML + CSS</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>

							<li>
								<span>React + Redux</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>

							<li>
								<span>BootStrap</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>
						</ul>


						<h3 className="font-weight-bold border-bottom">DevTools and Other Skills</h3>
						<ul style={{listStyleType: "none"}} className="skills p-0 mb-2">
							<li>
								<span>Git</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>

							<li>
								<span>Linux Terminal</span>
								<div className="float-right">
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ faCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
									<FontAwesomeIcon icon={ farCircle }/>
								</div>
							</li>
						</ul>
					</Col>
				</Row>
		</Container>
	</Jumbotron>
	);
}

export default Resume