import { Card } from './components/Card.js';
import { FormValidator} from './components/FormValidator.js';
import Section from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from './components/PopupWithImage.js';
import './index.css';

const profilePopup = document.querySelector('.popup_type_edit');
const profileOpenButton = document.querySelector('.profile__open');
const profileForm = profilePopup.querySelector('.popup__form');
const profileButton = document.querySelector('.profile__button');
const elementContent = document.querySelector('.elements__content');
const formAdd  = document.querySelector('.popup__form_type_add');
const cardSelector = document.querySelector('.elements-template');
const arkhyzImage = new URL('./images/arkhyz.jpg', import.meta.url);
const chelyabinskImage = new URL('./images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoImage = new URL('./images/picture_4.jpg', import.meta.url);
const kamchatkaImage = new URL('./images/kamchatka.jpg', import.meta.url);
const kholmogorskyImage = new URL('./images/kholmogorsky-rayon.jpg', import.meta.url);
const baikalImage = new URL('./images/baikal.jpg', import.meta.url);
const popupUserName = profilePopup.querySelector('.popup__input_type_name');
const popupUserInfo = profilePopup.querySelector('.popup__input_type_myself');

const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_state_invalid'
};

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        image: arkhyzImage
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        image: chelyabinskImage
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        image: ivanovoImage
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        image: kamchatkaImage
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        image: kholmogorskyImage
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        image: baikalImage
    }
];
    const sectionCards  = new Section({
        items: initialCards,
        renderer: (item) => {
            const card = new Card( {opened: () => {
                        const popupImage = new PopupWithImage('.popup_type_photo');
                        popupImage.setEventListeners();
                        popupImage.open(card._link, card._name)}},
            item, cardSelector);
            const cardElement = card.generateCard();
            sectionCards.addItem(cardElement);
        }
    }, elementContent);
    sectionCards.renderer();

    const popupProfile = new UserInfo( {
            'nameSelector': '.profile__title',
            'infoSelector': '.profile__subtitle'
        },
        '.popup_type_edit'
    );
    popupProfile.setEventListeners();

    const popupAdd = new PopupWithForm(
    '.popup_type_add', {usage: (event) => {
            event.preventDefault();
            const card = new Card({opened: () => {
                    const popupImage = new PopupWithImage('.popup_type_photo');
                        popupImage.setEventListeners();
                        popupImage.open(card._link, card._name)}},
                popupAdd.getInputValues(), cardSelector);
            const cardElement = card.generateCard();
            sectionCards.addItem(cardElement);
        }});
    popupAdd.setEventListeners();

    // функция открывает попап
    function showProfilePopup() {
        const userInfo = popupProfile.getUserInfo();
        popupUserName.value = userInfo.name;
        popupUserInfo.value = userInfo.info;
        profilePopup.classList.add('popup_opened');
        popupProfileFormValid.resetValidation();
        popupProfileFormValid.checkButtonState();
    }

    //открывает
    function showPopupAdd() {
        popupAddFormValid.checkButtonState();
        popupAdd.open();
    }

    function submitProfileForm(event) {
        event.preventDefault();
        popupProfile.setUserInfo(popupUserName.value, popupUserInfo.value);
        popupProfile.close();
    }

    // вешаем прослушиватели событий
    profileForm.addEventListener('submit', submitProfileForm);
    profileOpenButton.addEventListener('click', showProfilePopup);
    profileButton.addEventListener('click', showPopupAdd);

    const popupAddFormValid = new FormValidator(validationConfig, formAdd);
    popupAddFormValid.enableValidation();

    const popupProfileFormValid = new FormValidator(validationConfig, profileForm);
    popupProfileFormValid.enableValidation();

