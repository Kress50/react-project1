import React from "react";
import email from "../img/mail.png";
import linkedin from "../img/linkedin.png";

export default function Header() {
	return (
		<div className="header">
			<h1>James Smith</h1>
			<h3>Frontend Developer</h3>
			<h4>jamessmith.website</h4>

			<div className="header-soc">
				<a href="#" className="header-email button">
					<img src={email} alt="email-logo"></img>Email
				</a>
				<a href="#" className="header-linkedin button">
					<img src={linkedin} alt="linkedin-logo"></img>
					LinkedIn
				</a>
			</div>
		</div>
	);
}
