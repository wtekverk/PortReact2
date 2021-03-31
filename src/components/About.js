import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const About = () => {
	return (
		<>
			<br />
			<div className="container border text">
				<content className="row">
					<div className="col-sm-12 col-md-9 col-lg-9">
						<div className="row">
							<div className="col-sm-12 col-md-9 col-lg-9">
								<h1>About Me</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-3 col-lg-3">
								<img
									src={require("../assets/images/self.png").default}
									className="img-thumbnail"
									alt="girl with blueberries"
								/>
							</div>
							<div className="col-sm-12 col-md-6 col-lg-6">
								<p>
									I am a geologist, baker, teacher that is borderline obsessed
									with my dogs. My partner and I spend all of our extra time
									cooking and hiking. I am so exited for his class because web
									development is something I have been very interested in since
									becoming an online teacher.
								</p>
							</div>
						</div>
					</div>
					<aside className="col-sm-12 col-md-3 col-lg-3 ">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Professional</h5>
								<h5 className="card-title">Information</h5>
							</div>
							<ul className="list-group list-group-flush">
								<li>Wtekverk@gmail.com</li>
								<li>Phone#: 208-818-7905</li>
								<li>
									<a
										href="https://www.linkedin.com/in/wendy-tekverk/"
										className="list-group-item card-link"
										target="_blank"
									>
										LinkedIn
									</a>
								</li>
								<li>
									<a
										href="https://github.com/wtekverk?tab=repositories"
										className="list-group-item card-link"
										target="_blank"
									>
										GitHub
									</a>
								</li>
								<li id="navLink ">
									<Nav.Link to="../assets/PDFs/CodingResumePDF.pdf">
										Resume
									</Nav.Link>
								</li>
							</ul>
						</div>
					</aside>
				</content>
			</div>
		</>
	);
};

export default About;
