const profilePopup = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const profileOpenButton = document.querySelector('.profile__open');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close');
const addClose = document.querySelector('.popup__close_type_add');
const photoClose = document.querySelector('.popup__close_type_photo');
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
const popupPhoto = document.querySelector('.popup_type_photo');
const photoPopupImage = popupPhoto.querySelector('.popup__picture_type_photo');
const photoPopupTitle = popupPhoto.querySelector('.popup__text');

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

    function showPopupPhoto(image, text) {
        photoPopupImage.src = image.src;
        photoPopupImage.alt = image.alt;
        photoPopupTitle.textContent = text.textContent;
        openPopup(popupPhoto);
    }

    function closePopupPhoto() {
        closePopup(popupPhoto);
    }

    // функция открывает попап
    function showProfilePopup() {
        popupName.value = profileTitle.textContent;
        popupMyself.value = profileSubtitle.textContent;
        checkActiveButton(profileForm);
        openPopup(profilePopup);
        }

    // функция закрывает попап
    function closeProfilePopup() {
        closePopup(profilePopup);
    }

    //открывает
    function showPopupAdd() {
        formAdd.reset();
        checkActiveButton(formAdd);
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
        const card = addCard(name, link);
        elementContent.prepend(card);
        closePopupAdd();
    }

    function addCard(name, link) {
        const elementsTemplate = document.querySelector('.elements-template').content;
        const placeElement = elementsTemplate.cloneNode(true);
        const cardImage = placeElement.querySelector('.elements__image');
        cardImage.src = link;
        cardImage.alt = name;
        placeElement.querySelector('.elements__text').textContent = name;

        placeElement.querySelector('.elements__vector').addEventListener('click',event => {
            const eventActive = event.target;
            eventActive.classList.toggle('elements__vector_active');
        });

        placeElement.querySelector('.elements__remove').addEventListener('click',event => {
            const removeBlock = event.target;
            const elementsRemove = removeBlock.closest('.elements__container');
            elementsRemove.remove();
        });

        cardImage.addEventListener('click',event => {
            const elementsImage = event.target;
            const elementsOpen = elementsImage.closest('.elements__container');
            const elementText = elementsOpen.querySelector('.elements__text');
            showPopupPhoto(elementsImage, elementText);
        });

        return placeElement
    }

    // вешаем прослушиватели событий
    profileForm.addEventListener('submit', submitProfileForm);
    formAdd.addEventListener('submit', submitFormAdd);
    profileOpenButton.addEventListener('click', showProfilePopup);
    profilePopupCloseButton.addEventListener('click', closeProfilePopup);
    profileButton.addEventListener('click', showPopupAdd);
    addClose.addEventListener('click', closePopupAdd);
    photoClose.addEventListener('click', closePopupPhoto);

    function closeByEscape(evt) {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            closePopup(openedPopup);
        }
    }

    const popups = document.querySelectorAll('.popup');

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

    //рендерим (заполняем) страницу
    initialCards.forEach((elem) => {
        const card = addCard(elem.name, elem.link);
        elementContent.prepend(card);
    });



