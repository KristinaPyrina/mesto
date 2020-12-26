<<<<<<< HEAD
const profilePopup = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const profileOpenButton = document.querySelector('.profile__open');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close');
const addClose = document.querySelector('.popup__close_type_add');
=======
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add_button');
const profileOpen = document.querySelector('.profile__open');
const popupClose = document.querySelector('.popup__close');
const addClose = document.querySelector('.popup__close_add_button');
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
const photoClose = document.querySelector('.popup__close_type_photo');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupName = document.querySelector('.popup__input_type_name');
const popupMyself = document.querySelector('.popup__input_type_myself');
<<<<<<< HEAD
const profileForm = profilePopup.querySelector('.popup__form');
const profileButton = document.querySelector('.profile__button');
const elementContent = document.querySelector('.elements__content');
const formAdd  = document.querySelector('.popup__form_type_add');
const popupAddEdit = formAdd.querySelector('.popup__input_type_edit');
const popupAddImage = formAdd.querySelector('.popup__input_type_image');
const popupPhoto = document.querySelector('.popup_type_photo');
const photoPopupImage = popupPhoto.querySelector('.popup__picture_type_photo');
const photoPopupTitle = popupPhoto.querySelector('.popup__text');
=======
const form = document.querySelector('.popup__form');
const profileButton = document.querySelector('.profile__button');
const elementContent = document.querySelector('.elements__content');
const formAdd  = document.querySelector('.popup__form_add_button');
const popupAddEdit = document.querySelector('.popup__input_type_edit');
const popupAddImage = document.querySelector('.popup__input_type_image');
const popupPhoto = document.querySelector('.popup_type_photo');
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25

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

<<<<<<< HEAD
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
=======
    function showPopupPhoto(image, text) {
        popupPhoto.querySelector('.popup__picture_type_photo').src = image.src;
        popupPhoto.querySelector('.popup__picture_type_photo').alt = image.alt;
        popupPhoto.querySelector('.popup__text').textContent = text.textContent;
        popupPhoto.classList.add('popup_opened');
    }

    function closePopupPhoto() {
        popupPhoto.classList.remove('popup_opened');
    }

    // функция открывает попап
    function showPopup() {
        popupName.value = profileTitle.textContent;
        popupMyself.value = profileSubtitle.textContent;
        enableValidation(validationConfig);
        popup.classList.add('popup_opened');
    }

    // функция закрывает попап
    function closePopup() {
        popup.classList.remove('popup_opened');
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
    }

    //открывает
    function showPopupAdd() {
<<<<<<< HEAD
        formAdd.reset();
        checkActiveButton(formAdd);
        openPopup(popupAdd);
=======
        formAdd.querySelector('.popup__input_type_edit').value = '';
        formAdd.querySelector('.popup__input_type_image').value = '';
        enableValidation(validationConfig);
        popupAdd.classList.add('popup_opened');
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
    }

    // закрывает
    function closePopupAdd() {
<<<<<<< HEAD
        closePopup(popupAdd);
    }

    function submitProfileForm(event) {
        event.preventDefault();
        profileTitle.textContent = popupName.value;
        profileSubtitle.textContent = popupMyself.value;
        closePopup(profilePopup);
=======
        popupAdd.classList.remove('popup_opened');
    }

    function submitForm(event) {
        event.preventDefault();
        profileTitle.textContent = popupName.value;
        profileSubtitle.textContent = popupMyself.value;
        closePopup();
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
    }

    function submitFormAdd(event) {
        event.preventDefault();
        const name = popupAddEdit.value;
        const link = popupAddImage.value;
<<<<<<< HEAD
        const card = addCard(name, link);
        elementContent.prepend(card);
=======
        addCard(name, link);
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
        closePopupAdd();
    }

    function addCard(name, link) {
        const elementsTemplate = document.querySelector('.elements-template').content;
        const placeElement = elementsTemplate.cloneNode(true);
<<<<<<< HEAD
        const cardImage = placeElement.querySelector('.elements__image');
        cardImage.src = link;
        cardImage.alt = name;
=======
        placeElement.querySelector('.elements__image').src = link;
        placeElement.querySelector('.elements__image').alt = name;
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
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

<<<<<<< HEAD
        cardImage.addEventListener('click',event => {
=======
        placeElement.querySelector('.elements__image').addEventListener('click',event => {
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
            const elementsImage = event.target;
            const elementsOpen = elementsImage.closest('.elements__container');
            const elementText = elementsOpen.querySelector('.elements__text');
            showPopupPhoto(elementsImage, elementText);
        });

<<<<<<< HEAD
        return placeElement
    }

    // вешаем прослушиватели событий
    profileForm.addEventListener('submit', submitProfileForm);
    formAdd.addEventListener('submit', submitFormAdd);
    profileOpenButton.addEventListener('click', showProfilePopup);
    profilePopupCloseButton.addEventListener('click', closeProfilePopup);
=======
        elementContent.prepend(placeElement);
    }

    // вешаем прослушиватели событий
    form.addEventListener('submit', submitForm);
    formAdd.addEventListener('submit', submitFormAdd);
    profileOpen.addEventListener('click', showPopup);
    popupClose.addEventListener('click', closePopup);
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
    profileButton.addEventListener('click', showPopupAdd);
    addClose.addEventListener('click', closePopupAdd);
    photoClose.addEventListener('click', closePopupPhoto);

<<<<<<< HEAD
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



=======
    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            closePopup();
            closePopupAdd();
            closePopupPhoto();
        }
    });

    popup.addEventListener('click', function (evt) {
        const currentElement = evt.target;
        if (currentElement.parentNode.className === 'page') {
            closePopup();
        }
    });

    popupAdd.addEventListener('click', function (evt) {
        const currentElement = evt.target;
        if (currentElement.parentNode.className === 'page') {
            closePopupAdd();
        }
    });

    popupPhoto.addEventListener('click', function (evt) {
        const currentElement = evt.target;
        if (currentElement.parentNode.className === 'page') {
            closePopupPhoto();
        }
    });

    //рендерим (заполняем) страницу
    initialCards.forEach((elem) => {
        addCard(elem.name, elem.link);
    });
>>>>>>> 08ec048a9075afa1a898c9c0b18d61352c459c25
