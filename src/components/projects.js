import React from 'react'
import {Card, Button, Col} from 'react-bootstrap'

function Cards(props) {
	return (
		<>
		<Col sm={1} md={6} lg={true} className="mt-4 mb-4">
			<Card style={{ width: '18rem' }} className="bg-dark border border-light mx-auto d-block p-2">
			  <Card.Img variant="top" className="rounded border-bottom" src={props.item.image} />
			  <Card.Body>
			    <Card.Title className="text-light font-weight-bold">{props.item.title}</Card.Title>
			    <Card.Text className="text-light">
			      {props.item.description}
			    </Card.Text>
			    <Button variant="dark" className="border border-light"><a className="text-light" href={props.item.link}>Project Link</a></Button>
			  </Card.Body>
			</Card>
		</Col>
		</>
	);
}

export default Cards