import React from "react";

const Card = () => {
	return (
		<div className="card ms-5 me-1 mt-3" style={{ padding: 0 }}>
			<img
				className="card-img-top"
				src="https://loremflickr.com/500/325?random=1"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<div
					className="progress"
					style={{ height: 1 + "px", width: 100 + "%" }}>
					<div
						className="progress-bar"
						role="progressbar"
						aria-valuenow="0"
						aria-valuemin="0"
						aria-valuemax="100"></div>
				</div>
				<a href="#" className="btn btn-primary ">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Card;
