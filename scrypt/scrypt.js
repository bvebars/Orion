let formService = document.getElementById('form-service');
let rateService = document.getElementById('rate-service');
let formData = document.getElementById('form-data');
let inputsFormData = formData.getElementsByTagName("input");
let inputsFormService = formService.getElementsByTagName("input");
let userData = new Map();

class Form {
    constructor(form) {
        this.form = form;
    }

    gettingValueForm() {
        this.number = 0;
        let phoned = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //XXX-XXX-XXXX
        for (let input of this.form) {
            cleanInput(input);
            if (input.value !== "") {

                if (input.name === 'phone') {

                    if (!input.value.match(phoned)) {
                        alert('Введите корректный номер');
                        this.number--;
                        document.getElementById(input.name).classList.add('error');
                    } else {
                        userData.set(input.name, input.value);
                        this.number++;
                    }

                }
                userData.set(input.name, input.value);
                this.number++;
            } else {
                if (input.name !== 'phone2') {
                    document.getElementById(input.name).classList.add('error');
                }
            }
        }

        console.log("N: " + this.number);
    }

    went() {
        console.log("This " + this.number);
        return this.form.length <= this.number;
    }

    static showFormService() {
        formData.style.display = "none";
        formService.style.display = "block";
        rateService.style.display = "none";
    }

    static showRateService() {
        formData.style.display = "none";
        formService.style.display = "none";
        rateService.style.display = "block";
    }
}

let form1 = new Form(inputsFormData);
let form2 = new Form(inputsFormService);

function goFormService() {
    form1.gettingValueForm();
    console.log(userData);

    if (form1.went()) {
        Form.showFormService();
    }
}

function goRateService() {
    form2.gettingValueForm();
    console.log(userData);

    if (form2.went()) {
        Form.showRateService();
        addFieldText();
    }
}

//---- Удаление класса
function cleanInput(id) {
    id.onchange = (() => {
        if (id.classList.contains('error')) {
            id.classList.remove("error");
        }
    });
}

let nameData = document.getElementById('name-data');
let cityData = document.getElementById('city-data');
let addressData = document.getElementById('address-data');
let phoneData = document.getElementById('phone-data');
let phoneData2 = document.getElementById('phone-data-2');
let appealData = document.getElementById('appeal-data');
let commentData = document.getElementById('comment-data');
let tariff = document.getElementById('tariff');

function addFieldText() {
    nameData.textContent = userData.get('name');
    cityData.textContent = userData.get('city');
    addressData.textContent = userData.get('address');
    phoneData.textContent = userData.get('phone');
    phoneData2.textContent = userData.get('phone2');
    appealData.textContent = userData.get('appeal');
    tariff.textContent = userData.get('rate');
    commentData.textContent = userData.get('comment');
}

let show = document.getElementById("show");

show.addEventListener("click", () => {
    formData.style.display = "none";
    formService.style.display = "block";
    rateService.style.display = "none";
});

function sendBack() {
    formData.style.display = "block";
    formService.style.display = "none";
    rateService.style.display = "none";
}

let failure = document.getElementById('failure');
let commentFailure = document.getElementById('comment-failure');
let emergencyClosure = document.getElementById('emergency-closure');

function sendComplete() {
    userData.set('failure', failure.value);
    userData.set('commentFailure', commentFailure.value);
    //Тут должна быть реализация отправки данных
    userData.clear();
    fieldCleaning();

    formData.style.display = "none";
    formService.style.display = "none";
    rateService.style.display = "none";
    emergencyClosure.style.display = "block"
}

function fieldCleaning() {
    let inputs = document.getElementsByTagName('input');
    for (let input of inputs) {
        input.value = '';
    }
}
