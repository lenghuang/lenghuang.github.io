import React from "react";
import "../style/projects.css";
import imgshare from "../pics/imgshare.png";
import thisweb from "../pics/thisweb.png";
import jeopardy from "../pics/jeopardy.png";
import soon from "../pics/soon.png";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function makeCard(img, title, desc, link, date) {
	return (
		<Card bg="dark" style={{ width: "25rem" }}>
			<div className="card-image-container">
				<Card.Img variant="top" src={img} />
			</div>
			<Card.Header as="h5">{title}</Card.Header>
			<Card.Body>
				<Card.Text style={{ fontSize: "1rem" }}>{desc}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">
					<a href={link}> See more of {title} here... </a>{" "}
				</small>{" "}
				<br />
				<small className="text-muted"> {date} </small>
			</Card.Footer>
		</Card>
	);
}

function placeHolder() {
	return makeCard(
		soon,
		"Under construction",
		"There's something cool in the works! Stay tuned.",
		"",
		"2020"
	);
}

function Projects() {
	return (
		<div className="card-container">
			<CardDeck>
				{makeCard(
					imgshare,
					"CMU Image Share",
					"Rapidly developed image sharing platform inspired by CMU Staff/Faculty to inspire community during COVID-19 Lockdown. Made in four days with Google Firebase and ReactJS.",
					"https://github.com/lenghuang/cmu-imageshare",
					"March 2020"
				)}
				{makeCard(
					thisweb,
					"Personal Website",
					"Portfolio website made with ReactJS that allowed me to creatively experiment in my first Front-End focused project.",
					"https://github.com/lenghuang/me",
					"March 2020"
				)}
				{makeCard(
					jeopardy,
					"Jeopardy Search Engine",
					"Optimized for speed, you can search by category, question, answer, and date! Heavy focus on manipulating JSON data, minimizing API calls, and writing Python scripts to clean large datasets.",
					"https://github.com/lenghuang/jeopardy-capital-one/",
					"October 2019"
				)}
			</CardDeck>
			<CardDeck>
				{makeCard(
					"https://wallstreetnation.com/wp-content/uploads/2019/09/d-13.jpg",
					"Sentiment and Stars",
					"Explored the accuracy of NLTK/TextBlob's sentiment analyzer by comparing performance on Yelp reviews to its star ratings. Research class project involving JSON manipulation and NLP techniques.",
					"https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2FLen%20Huang%20-%20HAR%20Formal%20Paper.pdf?alt=media&token=c5881749-1723-46dd-b91e-4ec4bb2b0ae0",
					"March - April 2019"
				)}
				{makeCard(
					"https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1125%2Fr633193_1296x729_16%2D9.jpg",
					"Home Court Advantage",
					"An analysis using Cohen's h to measure effect size and explore whether or not homecourt advantage in the NBA is statistically justifiable. Statistics project with a heavy focus on webscraping and data collection.",
					"https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2FNBA%20Free%20Throws.pdf?alt=media&token=f2efbb15-9725-4c44-852f-c9c6a0d470b8",
					"May 2018"
				)}
				{placeHolder()}
			</CardDeck>
		</div>
	);
}

export default Projects;
