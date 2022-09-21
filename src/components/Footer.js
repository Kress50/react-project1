import React from "react";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import github from "../img/github.png";

export default function Footer() {
	return (
		<div className="footer">
			<a href="#">
				<img src={twitter} alt="twitter-logo"></img>
			</a>
			<a href="#">
				<img src={facebook} alt="facebook-logo"></img>
			</a>
			<a href="#">
				<img src={instagram} alt="instagram-logo"></img>
			</a>
			<a href="#">
				<img src={github} alt="github-logo"></img>
			</a>
		</div>
	);
}
