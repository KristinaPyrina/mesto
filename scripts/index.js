    const popup = document.querySelector('.popup');
    const profileOpen = document.querySelector('.profile__open');
    const popupClose = document.querySelector('.popup__close');
    const profileTitle = document.querySelector('.profile__title');
    const profileSubtitle = document.querySelector('.profile__subtitle');
    const popupName = document.querySelector('.popup__input_type_name');
    const popupMyself = document.querySelector('.popup__input_type_myself');
    const form = document.querySelector('.popup__form');

    // функция открывает попап
    function showPopup() {
        popupName.value = profileTitle.textContent;
        popupMyself.value = profileSubtitle.textContent;
        popup.classList.add('popup_opened');
        popup.removeEventListener('click', showPopup);
    }

    // функция закрывает попап
    function closePopup() {
        popup.classList.remove('popup_opened');
    }

    function submitForm(event) {
            event.preventDefault();
            profileTitle.textContent = popupName.value;
            profileSubtitle.textContent = popupMyself.value;
            closePopup();
    }

    form.addEventListener('submit', submitForm);
    profileOpen.addEventListener('click', showPopup);
    popupClose.addEventListener('click', closePopup);
