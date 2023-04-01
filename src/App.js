

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__logo" alt="Логотип Место" src="<%=require('./images/header-logo.svg')%>"/>
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-box">
            <img className="profile__avatar" alt="Аватар" src="<%=require('./images/avatar.png')%>"/>
            <button className="profile__avatar-edit-button" type="button" title="Загрузить новый аватар"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <p className="profile__subtitle">Исследователь океана</p>
            <button className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить карточку места"></button>
        </section>
        <section className="elements">
          <ul className="elements__box"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright" lang="en">
          &copy;&nbsp;2022&nbsp;Mesto&nbsp;Russia
        </p>
      </footer>

      <div className="popup popup_modify_user-info">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_modify_user-info" name="formAboutUser" novalidate>
            <input id="name-input" className="popup__input popup__input_type_name" type="text" minlength="2" maxlength="40" name="name" placeholder="Имя" required/>
            <span className="popup__input-error name-input-error"></span>
            <input id="job-input" className="popup__input popup__input_type_job" type="text" minlength="2" maxlength="200" name="job" placeholder="О себе" required/>
            <span className="popup__input-error job-input-error"></span>
            <button className="popup__button" type="submit">Сохранить</button>
          </form>
          <button
            className="popup__close-button" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_modify_new-place">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_modify_new-place" name="formAboutPlace" novalidate>
            <input id="title-place-input" className="popup__input popup__input_type_title-place" type="text" minlength="2" maxlength="30" name="name" placeholder="Название" required/>
            <span className="popup__input-error title-place-input-error"></span>
            <input id="link-place-input" className="popup__input popup__input_type_link-place" type="url" name="link" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error link-place-input-error"></span>
            <button className="popup__button" type="submit">Создать</button>
          </form>
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_modify_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_modify_avatar" name="formAboutAvatar" novalidate>
            <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error avatar-input-error"></span>
            <button className="popup__button" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_modify_image">
        <div className="popup__image-container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <img className="popup__picture" alt="Ваша фотография места" src="#"/>
          <p className="popup__picture-name"></p>
        </div>
      </div>
      <div className="popup popup_modify_confirm">
        <div className="popup__container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_modify_confirm" name="formAboutConfirm" novalidate>
            <button className="popup__button" type="submit">Да</button>
          </form>
        </div>
      </div>

      <template className="template-card">
        <li className="element">
          <img className="element__mask-group" alt="Ваша фотография места" src="#"/>
          <div className="element__wrapper">
            <h2 className="element__title"></h2>
            <div className="element__group">
              <button className="element__toggle" type="button" aria-label="Нравится"></button>
              <span className="element__counter">0</span>
            </div>
          </div>
          <button className="element__trash" type="button" aria-label="Удалить"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
