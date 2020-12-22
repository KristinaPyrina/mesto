<<<<<<< HEAD
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add_button');
const profileOpen = document.querySelector('.profile__open');
const popupClose = document.querySelector('.popup__close');
const addClose = document.querySelector('.popup__close_add_button');
const photoClose = document.querySelector('.popup__close_type_photo');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupName = document.querySelector('.popup__input_type_name');
const popupMyself = document.querySelector('.popup__input_type_myself');
const form = document.querySelector('.popup__form');
const profileButton = document.querySelector('.profile__button');
const elementContent = document.querySelector('.elements__content');
const formAdd  = document.querySelector('.popup__form_add_button');
const popupAddEdit = document.querySelector('.popup__input_type_edit');
const popupAddImage = document.querySelector('.popup__input_type_image');
const popupPhoto = document.querySelector('.popup_type_photo');

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
    }

    //открывает
    function showPopupAdd() {
        formAdd.querySelector('.popup__input_type_edit').value = '';
        formAdd.querySelector('.popup__input_type_image').value = '';
        enableValidation(validationConfig);
        popupAdd.classList.add('popup_opened');
    }

    // закрывает
    function closePopupAdd() {
        popupAdd.classList.remove('popup_opened');
    }

    function submitForm(event) {
        event.preventDefault();
        profileTitle.textContent = popupName.value;
        profileSubtitle.textContent = popupMyself.value;
        closePopup();
    }

    function submitFormAdd(event) {
        event.preventDefault();
        const name = popupAddEdit.value;
        const link = popupAddImage.value;
        addCard(name, link);
        closePopupAdd();
    }

    function addCard(name, link) {
        const elementsTemplate = document.querySelector('.elements-template').content;
        const placeElement = elementsTemplate.cloneNode(true);
        placeElement.querySelector('.elements__image').src = link;
        placeElement.querySelector('.elements__image').alt = name;
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

        placeElement.querySelector('.elements__image').addEventListener('click',event => {
            const elementsImage = event.target;
            const elementsOpen = elementsImage.closest('.elements__container');
            const elementText = elementsOpen.querySelector('.elements__text');
            showPopupPhoto(elementsImage, elementText);
        });

        elementContent.prepend(placeElement);
    }

    // вешаем прослушиватели событий
    form.addEventListener('submit', submitForm);
    formAdd.addEventListener('submit', submitFormAdd);
    profileOpen.addEventListener('click', showPopup);
    popupClose.addEventListener('click', closePopup);
    profileButton.addEventListener('click', showPopupAdd);
    addClose.addEventListener('click', closePopupAdd);
    photoClose.addEventListener('click', closePopupPhoto);

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
=======
const popupEdit = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add_button');
const profileOpen = document.querySelector('.profile__open');
const popupClose = document.querySelector('.popup__close');
const addClose = document.querySelector('.popup__close_add_button');
const photoClose = document.querySelector('.popup__close_type_photo');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupName = document.querySelector('.popup__input_type_name');
const popupMyself = document.querySelector('.popup__input_type_myself');
const form = document.querySelector('.popup__form');
const profileButton = document.querySelector('.profile__button');
const elementContent = document.querySelector('.elements__content');
const formAdd  = document.querySelector('.popup__form_add_button');
const popupAddEdit = document.querySelector('.popup__input_type_edit');
const popupAddImage = document.querySelector('.popup__input_type_image');
const popupPhoto = document.querySelector('.popup_type_photo');
const elementsTemplate = document.querySelector('.elements-template');

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
    }

    function closePopup(popup) {
        popup.classList.remove('popup_opened');
    }

    function showPopupPhoto(image, text) {
        popupPhoto.querySelector('.popup__picture_type_photo').src = image.src;
        popupPhoto.querySelector('.popup__picture_type_photo').alt = image.alt;
        popupPhoto.querySelector('.popup__text').textContent = text.textContent;
        openPopup(popupPhoto);
    }

    function closePopupPhoto() {
        closePopup(popupPhoto);
    }

    // функция открывает попап
    function showEditPopup() {
        popupName.value = profileTitle.textContent;
        popupMyself.value = profileSubtitle.textContent;
        openPopup(popupEdit);
    }

    // функция закрывает попап
    function closeEditPopup() {
        closePopup(popupEdit);
    }

    //открывает
    function showPopupAdd() {
        formAdd.querySelector('.popup__input_type_edit').value = '';
        formAdd.querySelector('.popup__input_type_image').value = '';
        openPopup(popupAdd);
    }

    // закрывает
    function closePopupAdd() {
        closePopup(popupAdd);
    }

    function submitForm(event) {
        event.preventDefault();
        profileTitle.textContent = popupName.value;
        profileSubtitle.textContent = popupMyself.value;
        closeEditPopup();
    }

    function submitFormAdd(event) {
        event.preventDefault();
        const name = popupAddEdit.value;
        const link = popupAddImage.value;
        addCard(name, link);
        closePopupAdd();
    }

    function addCard(name, link) {
        const contentTemplate = elementsTemplate.content;
        const placeElement = contentTemplate.cloneNode(true);
        placeElement.querySelector('.elements__image').src = link;
        placeElement.querySelector('.elements__image').alt = name;
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

        placeElement.querySelector('.elements__image').addEventListener('click',event => {
            const elementsImage = event.target;
            const elementsOpen = elementsImage.closest('.elements__container');
            const elementText = elementsOpen.querySelector('.elements__text');
            showPopupPhoto(elementsImage, elementText);
        });

        elementContent.prepend(placeElement);
    }

    // вешаем прослушиватели событий
    form.addEventListener('submit', submitForm);
    formAdd.addEventListener('submit', submitFormAdd);
    profileOpen.addEventListener('click', showEditPopup);
    popupClose.addEventListener('click', closeEditPopup);
    profileButton.addEventListener('click', showPopupAdd);
    addClose.addEventListener('click', closePopupAdd);
    photoClose.addEventListener('click', closePopupPhoto);

    //рендерим (заполняем) страницу
    initialCards.forEach((elem) => {
        addCard(elem.name, elem.link);
    });
>>>>>>> 6f6b76417ec0a65a0a82e2b8272c33bceb811d4f
