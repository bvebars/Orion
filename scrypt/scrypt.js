let array = new Map();
let city = document.getElementById('city');
let name = document.getElementById('name');
let address = document.getElementById('address');
let phone = document.getElementById('phone');
let error = document.getElementById('error');
let further = document.getElementById('further');

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
        error.textContent = 'Введите имя';
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


    console.log(name);

    array.set('city', city.value);
    array.set('name', name.value);

    console.log(array);

}

function saveData() {

}

let formData = document.getElementById('form-data');
let formService = document.getElementById('form-service');
let show = document.getElementById("show");
let hide = document.getElementById("hide");
// let hide = document.getElementById("hideContent")


hide.addEventListener("click", () => {
    formData.style.display = "block";
    formService.style.display = "none"
});

show.addEventListener("click", () => {
    formData.style.display = "none";
    formService.style.display = "block";
});

function transition(further) {
    further.addEventListener("click", () => {
        formData.style.display = "none";
        formService.style.display = "block";
    });
}
