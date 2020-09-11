import React from 'react'

function Connect() {
	return(
		<div className="connect">

			<div className="row">
				<div className="col-xs-12 col-md-12 col-lg-12 col-xl-12"><span id="connect"></span><h1>Connect With Me On</h1></div>
			</div>

			<div className="container-fluid row">
				<div className="col-xs-4 col-md-4 col-lg-4 col-xl-4">
					<h3 className="text-center">Github</h3>
					<a className="text-center" href="https://github.com/1337w0rm"><img className="mx-auto d-block img-fluid github" alt="Github Logo" src="img/github.png"/></a>
					<p className="text-center">Checkout my Github if you want to know my code quality(which is kind of shit as of now) or want to see my cool projects and maybe follow me.</p>
				</div>
				<div className="col-xs-4 col-md-4 col-lg-4 col-xl-4">
					<h3 className="text-center">Instagram</h3>
					<a href="https://instagram.com/0xaditya"><img className="mx-auto d-block img-fluid insta" alt="Instagram-logo" src="img/insta.png"/></a>
					<p className="text-center">If you want to see my ugly face and my cool meme. Follow me on Instagram *wink* *wink*</p>
				</div>
				<div className="col-xs-4 col-md-4 col-lg-4 col-xl-4">
					<h3 className="text-center">LinkedIN</h3>
					<a href="https://linkedin.com/0xaditya"><img className="mx-auto d-block img-fluid linked" alt="LinkedIn logo" src="img/linked.png"/></a>
					<p className="text-center">If you are a recruiter and interseted in hiring me. Check out my LinkedIN. Thanks</p>
				</div>
			</div>
		</div>
	)
}

export default Connect