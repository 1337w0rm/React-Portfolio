import React from 'react'
import Container from '../../node_modules/react-bootstrap/Container'
import Row from '../../node_modules/react-bootstrap/Row'
import Col from '../../node_modules/react-bootstrap/Col'


function Footer() {
	return(
		<footer className="mt-5">
			<Container fluid={true}>
				<Row className="border-top justify-content-between p-3">
					<Col className="p-0" md={3} sm={12}>
						<p>Aditya Singh</p>
					</Col>

					<Col className="p-0 d-flex justify-content-end" md={3} sm={12}>
						<p>2020 All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>	
	);
}

export default Footer