import React, { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.jsx';

function Main(props) {

	const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api
		.getCurrentUser()
		.then((data) => {
			setUserName(data.name);
			setUserDescription(data.about);
			setUserAvatar(data.avatar);
		})
		.catch((err) => console.log(err));

		api
		.getServerCards()
		.then((data) => {
			setCards(data);
		})
		.catch((err) => console.log(err));
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-box">
					<img className="profile__avatar" alt="Аватар" src={userAvatar}/>
					<button className="profile__avatar-edit-button" type="button" title="Загрузить новый аватар" onClick={props.onEditAvatar}></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__title">{userName}</h1>
					<p className="profile__subtitle">{userDescription}</p>
					<button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
				</div>
				<button className="profile__add-button" type="button" aria-label="Добавить карточку места" onClick={props.onAddPlace}></button>
			</section>
			<section className="elements">
				<ul className="elements__box">
					{cards.map((card) => (
						<Card card={card} key={card._id} onCardClick={props.onCardClick}/>
					))}
				</ul>
			</section>
		</main>
	);
};

export default Main;