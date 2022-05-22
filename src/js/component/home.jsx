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
				<Jumbotron
					jTitle="A Warm Welcome!"
					jText="Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Similique illo explicabo deleniti placeat? Sapiente veritatis
			consequatur perferendis at! Est vitae id voluptate adipisci,
			dicta nostrum ipsum blanditiis ea expedita inventore."
				/>
				<div className="container-fluid">
					<div className="row row-cols-5">
						<Card
							className="col"
							cTitle="Card title"
							cText="Some quick example text to build on the card title and make
						up the bulk of the card's content."
						/>
						<Card
							className="col"
							cTitle="Card title"
							cText="Some quick example text to build on the card title and make
						up the bulk of the card's content."
						/>
						<Card
							className="col"
							cTitle="Card title"
							cText="Some quick example text to build on the card title and make
						up the bulk of the card's content."
						/>
						<Card
							className="col"
							cTitle="Card title"
							cText="Some quick example text to build on the card title and make
						up the bulk of the card's content."
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
