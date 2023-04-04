import React from 'react';
import Card from './Card.jsx';

function ImagePopup(props) {

	return (
		<div className={`popup popup_modify_image ${props.card.name ? "popup_opened" : ""}`}>
			<div className="popup__image-container">
				<button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
				<img className="popup__picture" alt="Ваша фотография места" src={props.card.link}/>
				<p className="popup__picture-name">{`${props.card.name}`}</p>
			</div>
		</div>
	);
};

export default ImagePopup;