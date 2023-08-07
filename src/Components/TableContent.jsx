import { CharacterData } from "../Character-Data";
import { TableRow } from "./CharacterTable";

export const TableContent = CharacterData.toSorted((a, b) =>
	a.votes > b.votes ? -1 : 1
)
	.slice(0, 5)
	.map((character, charIndex) => {
		return (
			<TableRow
				className={charIndex % 2 === 0 ? "dark" : "light"}
				name={character.name}
				skillset={character.skillset}
				votes={character.votes}
				key={character.name}
			/>
		);
	});
