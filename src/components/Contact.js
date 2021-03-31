import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Contact = () => {
	return (
		<>
			<br />
			<div class="container border text">
				<header class="row">
					<h1>Contact</h1>
				</header>

				<content class="col-md-6">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Name
						</label>
						<input
							type="name"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="First Last"
						/>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Email address
						</label>
						<input
							type="email"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlTextarea1" class="form-label">
							Message
						</label>
						<textarea
							class="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
						></textarea>
					</div>
					<button type="button" class="btn btn-light">
						<a href="mailto:wtekverk@gmail.com">Send</a>
					</button>
				</content>
			</div>
		</>
	);
};

export default Contact;
