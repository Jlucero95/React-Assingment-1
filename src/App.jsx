import "./App.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./header.css";
import "./style.css";
import "./reset.css";
import React from "react";
import { TableContent } from "./Components/TableContent";
import { CardGallery } from "./Components/CardGallery";

function App() {
	return (
		<>
			<header className="header">
				<h1>Fullmetal Alchemist</h1>
				<nav>
					<li>about us</li>
					<li>info</li>
					<li>support us</li>
				</nav>
			</header>
			<section id="character-ratings">
				<h4>Top Characters</h4>
				<table className="fix-margin">
					<tbody>
						<tr>
							<th>Name</th>
							<th>Skillset</th>
							<th>Votes</th>
						</tr>
						{TableContent}
					</tbody>
				</table>
			</section>
			<section id="character-cards">{CardGallery}</section>
		</>
	);
}

export default App;
