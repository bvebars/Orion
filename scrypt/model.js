class User {

    constructor(city) {
        this.city = city;
    }

    sayHi() {
        console.log(this.city);
    }

}

let user = new User(newUser);
user.sayHi();