import { Card } from '../components/Card.js';
import { validationConfig, FormValidator} from '../components/FormValidator.js';
import Section from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
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
            const card = new Card(item, cardSelector);
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
            const card = new Card(popupAdd._getInputValues(), cardSelector);
            const cardElement = card.generateCard();
            sectionCards.addItem(cardElement);
        }});
    popupAdd.setEventListeners();

    // функция открывает попап
    function showProfilePopup() {
        const userInfo = popupProfile.getUserInfo();
        popupProfile.open(userInfo);
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
        popupProfile.setUserInfo();
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

