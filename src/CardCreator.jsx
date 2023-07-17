export function CardCreator(card) {
	return (
		<div
			type="disc"
			className="card"
		>
			<div className="card-titles">
				<h3>{card.name}</h3>
				<h4>{card.nickName}</h4>
			</div>
			<img src={card.imageUrl} />
			<p>{card.background}</p>
		</div>
	);
}
