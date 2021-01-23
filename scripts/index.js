import { Card } from './Card.js';
import { validationConfig, FormValidator} from './FormValidator.js';

const profilePopup = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const profileOpenButton = document.querySelector('.profile__open');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupName = document.querySelector('.popup__input_type_name');
const popupMyself = document.querySelector('.popup__input_type_myself');
const profileForm = profilePopup.querySelector('.popup__form');
const profileButton = document.querySelector('.profile__button');
const elementContent = document.querySelector('.elements__content');
const formAdd  = document.querySelector('.popup__form_type_add');
const popupAddEdit = formAdd.querySelector('.popup__input_type_edit');
const popupAddImage = formAdd.querySelector('.popup__input_type_image');
const popups = document.querySelectorAll('.popup');
const popupPhoto = document.querySelector('.popup_type_photo');
const photoPopupImage = popupPhoto.querySelector('.popup__picture_type_photo');
const photoPopupTitle = popupPhoto.querySelector('.popup__text');
const photoClose = document.querySelector('.popup__close_type_photo');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

    function openPopup(popup) {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', closeByEscape);
    }

    function closePopup(popup) {
        popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', closeByEscape);
    }

    function showPopupPhoto(link, name) {
        photoPopupImage.src = link;
        photoPopupImage.alt = name;
        photoPopupTitle.textContent = name;
        openPopup(popupPhoto);
    }

    function closePopupPhoto() {
        closePopup(popupPhoto);
    }

    // функция открывает попап
    function showProfilePopup() {
        popupName.value = profileTitle.textContent;
        popupMyself.value = profileSubtitle.textContent;
        popupProfileFormValid.resetValidation();
        popupProfileFormValid.checkButtonState();
        openPopup(profilePopup);
    }

    //открывает
    function showPopupAdd() {
        formAdd.reset();
        popupAddFormValid.checkButtonState();
        openPopup(popupAdd);
    }

    // закрывает
    function closePopupAdd() {
        closePopup(popupAdd);
    }

    function submitProfileForm(event) {
        event.preventDefault();
        profileTitle.textContent = popupName.value;
        profileSubtitle.textContent = popupMyself.value;
        closePopup(profilePopup);
    }

    function submitFormAdd(event) {
        event.preventDefault();
        const name = popupAddEdit.value;
        const link = popupAddImage.value;
        const card = createCard({name: name, link: link});
        elementContent.prepend(card);
        closePopupAdd();
    }

    function createCard(element) {
        const card = new Card(element, cardSelector, showPopupPhoto);
        const cardElement = card.generateCard();
        return cardElement;
    }

    // вешаем прослушиватели событий
    profileForm.addEventListener('submit', submitProfileForm);
    formAdd.addEventListener('submit', submitFormAdd);
    profileOpenButton.addEventListener('click', showProfilePopup);
    profileButton.addEventListener('click', showPopupAdd);
    photoClose.addEventListener('click', closePopupPhoto);

    function closeByEscape(evt) {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            closePopup(openedPopup);
        }
    }

    popups.forEach((popup) => {
        popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup);
            }
            if (evt.target.classList.contains('popup__close')) {
                closePopup(popup);
            }
        })
    });

    const popupAddFormValid = new FormValidator(validationConfig, formAdd);
    popupAddFormValid.enableValidation();

    const popupProfileFormValid = new FormValidator(validationConfig, profileForm);
    popupProfileFormValid.enableValidation();

    //рендерим (заполняем) страницу
    const cardSelector = document.querySelector('.elements-template');
    initialCards.forEach((element) => {
        const card = createCard(element);
        elementContent.prepend(card);
    });

