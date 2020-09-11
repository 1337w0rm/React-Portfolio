import React from 'react'
import {Jumbotron, Row, Col, Container} from 'react-bootstrap'

import Cards from '../components/projects'

import reverse from '../img/github/reverse.png'
import web from '../img/github/webpage.png'
import pdf from '../img/github/pdf.png'

class Project extends React.Component {
	constructor(props){
		super(props)

	this.state = {
		stuff: [
			{
				id: 0,
				image: reverse,
				title: "ReverseImageSearch",
				description: "Reverse Image Search is a Telegram Bot which do reverse image searches for you.",
				technology: "Python",
				link: "https://github.com/1337w0rm/ReverseImageSearch"
			},

			{
				id: 1,
				image: web,
				title:"myFirstWebPage",
				description: "This is the first web page that I created using only basic HTML, CSS and BootStrap. You can check it out at firstwebpage123.herokuapp.com",
				technology: "HTML, CSS, BootStrap",
				link: "https://github.com/1337w0rm/myFirstWebPage"
			},

			{
				id: 2,
				image: pdf,
				title: "pdfbrute",
				description: "PDFbrute is a shell script in which you can pass a wordlist and brute force an encrypted PDF file and get the password in plaintext.",
				technology: "Shell Scripting/Bash",
				link: "https://github.com/1337w0rm/pdfbrute"
			},
		]
		};
	}
	render() {
		return (
			<Jumbotron className="bg-dark border border-light">
				<Container>
					<Row>
						<Col>
							<h1 className="display-5 text-center text-light font-weight-bolder">PROJECTS</h1>
						</Col>
					</Row>
					<Row>
						{this.state.stuff.map(item => (
            					<Cards key={item} item={item}/>
          					))}
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}

export default Project