    let popup = document.querySelector('.popup');
    let profileOpen = document.querySelector('.profile__open');
    let popupClose = document.querySelector('.popup__close');
    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');
    let popupName = document.querySelector('.popup__name');
    let popupMyself = document.querySelector('.popup__myself');
    let popupButton = document.querySelector('.popup__button');

    function fieldName() {
        popupName.value = profileTitle.textContent;
    }

    fieldName();

    function fieldMyself() {
        popupMyself.value = profileSubtitle.textContent;
    }

    fieldMyself();

    function save() {
        if (popupName.value == "") {
            popupName.style.borderBottomColor = 'red';
        } else {
            popupName.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
        }
        if (popupMyself.value == "") {
            popupMyself.style.borderBottomColor = 'red';
        } else {
            popupMyself.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
        }
        if (popupName.value != "" &&  popupMyself.value != "") {
            profileTitle.textContent = popupName.value;
            profileSubtitle.textContent = popupMyself.value;
            popup.classList.toggle('popup_opened');
        }
    }

    popupButton.addEventListener('click', save);

    function openCart() {
        popup.classList.toggle('popup_opened');
   }

   function closeCart() {
       popup.classList.toggle('popup_opened');
   }

    profileOpen.addEventListener('click', openCart);
    popupClose.addEventListener('click', closeCart);
