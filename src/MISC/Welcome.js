import React from 'react'

function Welcome () {
	return (
		<header className="header">
			<div className="overlay"></div>
			<div className="container">
				<div className="welcome-text">
					<span id="home"></span>
					<h1 className="text-center">Welcome, To My Website</h1>
					<p>Click on See More to know more about me.</p>
					<button className="btn btn-outline-secondary"><a href="#about">See More</a></button>
				</div>
			</div>
		</header>
	)
}

export default Welcome