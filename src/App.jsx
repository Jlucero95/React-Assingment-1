import "./App.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./header.css";
import "./style.css";
import "./reset.css";
import { TableRow } from "./CharacterTable";
import { CardCreator } from "./CardCreator";
import { CharacterData } from "./Character-Data";
import React from "react";

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
						{CharacterData.toSorted((a, b) => (a.votes > b.votes ? -1 : 1))
							.slice(0, 5)
							.map((character, charIndex) => {
								const findOdds = charIndex % 2 === 0;

								return (
									<TableRow
										className={findOdds ? "dark" : "light"}
										name={character.name}
										skillset={character.skillset}
										votes={character.votes}
										key={character.name}
									/>
								);
							})}
					</tbody>
				</table>
			</section>
			<section id="character-cards">
				{CharacterData.map((card, cardIndex) => {
					return (
						<CardCreator
							name={card.name}
							nickName={card.nickName}
							imageUrl={card.imageUrl}
							background={card.background}
							key={cardIndex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
