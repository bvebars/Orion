let array = new Map();
let city = document.getElementById('city');
let name = document.getElementById('name');
let address = document.getElementById('address');
let phone = document.getElementById('phone');
let error = document.getElementById('error');
let further = document.getElementById('further');
let rate = document.getElementById('rate');
let appeal = document.getElementById('appeal');
let comment = document.getElementById('comment')



//Обработка события onChange
function getId(id) {
    id.onchange = (() => {
        if (id.classList.contains('error')) {
            id.classList.remove("error");
        }
    });
}

//Оработка вызова кнопки формы 1 "Далее"
function valid() {
    let phoned = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //XXX-XXX-XXXX

    if (city.value === "") {
        error.textContent = 'Введите город';
        document.getElementById('city').classList.add('error');
        getId(city);
        return;
    } else if (name.value === "") {
        error.textContent = 'Введите ФИО';
        document.getElementById('name').classList.add('error');
        getId(name);
        return;
    } else if (address.value === "") {
        error.textContent = 'Введите адресс';
        document.getElementById('address').classList.add('error');
        getId(address);
        return;
    }

    if (!phone.value.match(phoned)) {
        if (phone.value === "") {
            error.textContent = 'Введите телефон';
        } else {
            error.textContent = 'Проверьте заполненность данных телефона';
        }
        document.getElementById('phone').classList.add('error');
        getId(phone);
        return;
    }

    if (appeal.value === "") {
        error.textContent = 'Введите обращение';
        document.getElementById('appeal').classList.add('error');
        getId(appeal);
        return;
    }

    error.textContent = 'Данные отправлены';
    formData.style.display = "none";
    formService.style.display = "block";

    array.set('city', city.value);
    array.set('name', name.value);
    array.set('address', address.value);
    array.set('phone', phone.value);
    array.set('appeal', appeal.value);

    if (comment.value !== '') {
        array.set('comment', comment.value);
    }

    console.log(array);

}

function checkPhone() {
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //XXX-XXX-XXXX
    if (phone.value.match(phoneno)) {
        error.textContent = 'Проверьте заполненность данных телефона';
        return;
    }
}

let formData = document.getElementById('form-data');
let formService = document.getElementById('form-service');
let rateService = document.getElementById('rate-service');
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let rateShow = document.getElementById("rateShow");
// let hide = document.getElementById("hideContent")

hide.addEventListener("click", () => {
    formData.style.display = "block";
    formService.style.display = "none";
    rateService.style.display = "none";
});

show.addEventListener("click", () => {
    formData.style.display = "none";
    formService.style.display = "block";
    rateService.style.display = "none";
});

rateShow.addEventListener("click", () => {
    formData.style.display = "none";
    formService.style.display = "none";
    rateService.style.display = "block";
});

//Объявление переменных для вывода информацию в блоке service

let nameData = document.getElementById('name-data');
let cityData = document.getElementById('city-data');
let addressData = document.getElementById('address-data');
let phoneData = document.getElementById('phone-data');
let appealData = document.getElementById('appeal-data');
let commentData = document.getElementById('comment-data');
let tariff = document.getElementById('tariff');


//Третья форма
let emergencyClosure = document.getElementById('emergency-closure');

function sendForth() {
    array.set('rate', rate.value);

    formData.style.display = "none";
    formService.style.display = "none";
    rateService.style.display = "block";

    addFieldText();
}

function sendBack() {
    formData.style.display = "block";
    formService.style.display = "none";
    rateService.style.display = "none";
}

let failure = document.getElementById('failure');
let commentFailure = document.getElementById('comment-failure');

function sendComplete() {
    array.set('failure', failure.value);
    array.set('commentFailure', commentFailure.value);
    //Тут должна быть реализация отправки данных

    array.clear();
    fieldCleaning();

    formData.style.display = "none";
    formService.style.display = "none";
    rateService.style.display = "none";
    emergencyClosure.style.display = "block"
}

function addFieldText() {
    nameData.textContent = array.get('name');
    cityData.textContent = array.get('city');
    addressData.textContent = array.get('address');
    phoneData.textContent = array.get('phone');
    appealData.textContent = array.get('appeal');
    tariff.textContent = array.get('rate');
    commentData.textContent = array.get('comment');
}

function fieldCleaning() {
    let inputs = document.getElementsByTagName('input');
    for (let input of inputs) {
        input.value = '';
    }
}