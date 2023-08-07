import { CardCreator } from "./CardCreator";
import { CharacterData } from "../Character-Data";

export const CardGallery = CharacterData.map((card, cardIndex) => {
	return (
		<CardCreator
			name={card.name}
			nickName={card.nickName}
			imageUrl={card.imageUrl}
			background={card.background}
			key={cardIndex}
		/>
	);
});
