let array = new Map();
let city = document.getElementById('city');
let name = document.getElementById('name');
let address = document.getElementById('address');
let phone = document.getElementById('phone');
let error = document.getElementById('error');
let further = document.getElementById('further');
let rate = document.getElementById('rate');

//Обработка события onChange
function getId(id) {
    id.onchange = (() => {
        if (id.classList.contains('error')) {
            id.classList.remove("error");
        }
    });
}

//Оработка отправки формы
function valid() {
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //XXX-XXX-XXXX

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
    } else if (!phone.value.match(phoneno)) {
        if (phone.value === "") {
            error.textContent = 'Введите телефон';
        } else {
            error.textContent = 'Проверьте заполненность данных телефона';
        }
        document.getElementById('phone').classList.add('error');
        getId(phone);
        return;
    }

    error.textContent = 'Данные отправлены';
    formData.style.display = "none";
    formService.style.display = "block";


    array.set('city', city.value);
    array.set('name', name.value);
    console.log(array);

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


function transition(further) {
    further.addEventListener("click", () => {
        formData.style.display = "none";
        formService.style.display = "block";
    });
}

//Объявление переменных для вывода информацию в блоке service

let nameData = document.getElementById('name-data');
let cityData = document.getElementById('city-data');
let addressData = document.getElementById('address-data');
let appealData = document.getElementById('appeal-data');
let commentData = document.getElementById('comment-data');
let tariff = document.getElementById('tariff');

function sendRate() {

    array.set('rate', rate.value);
    error.textContent = 'Данные отправлены';
    formData.style.display = "none";
    formService.style.display = "none";
    rateService.style.display = "block";
    console.log(array);


    nameData.textContent = array.get('name');
    cityData.textContent = array.get('city');
    addressData.textContent = array.get('address');

    appealData.textContent = array.get('appealData');
    // commentData.textContent = array.get('rate');
    tariff.textContent = array.get('rate');

}