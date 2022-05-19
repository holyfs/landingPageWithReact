import React from "react";

//include images into your bundle
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div>
				<Jumbotron />
				<div className="container-fluid">
					<div className="row row-cols-5">
						<Card className="col" />
						<Card className="col" />
						<Card className="col" />
						<Card className="col" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
