import React from "react";

const Jumbotron = () => {
	return (
		<div className="bg-light text-dark me-4 ms-4 mt-5 rounded-3">
			<h1 className="display-4 ms-4 pt-5">
				{" "}
				<strong>A Warm Welcome!</strong>
			</h1>
			<p className="ms-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique illo explicabo deleniti placeat? Sapiente veritatis
				consequatur perferendis at! Est vitae id voluptate adipisci,
				dicta nostrum ipsum blanditiis ea expedita inventore.
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg ms-4 mb-5"
					href="#"
					role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
};
export default Jumbotron;
