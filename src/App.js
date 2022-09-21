import React from "react";
import Image from "./components/Image";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className="card-container">
			<Image />
			<Header />
			<About />
			<Footer />
		</div>
	);
}
