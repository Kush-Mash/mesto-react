function Card(props) {

	function handleClick() {
		props.onCardClick(props.card);
  }

	return (
		<li className="element">
			<img className="element__mask-group" alt={`Ваша фотография места ${props.card.name}`} src={props.card.link} onClick={handleClick}/>
			<div className="element__wrapper">
				<h2 className="element__title">{props.card.name}</h2>
				<div className="element__group">
					<button className="element__toggle" type="button" aria-label="Нравится"></button>
					<span className="element__counter">0</span>
				</div>
			</div>
			<button className="element__trash" type="button" aria-label="Удалить"></button>
		</li>
	)
}

export default Card;