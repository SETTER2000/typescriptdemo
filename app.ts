class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number
    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}
interface IUser {
    name: string;
}
class User {
    name: string;
    constructor(userName: string) {
        this.name = userName;
    }
}
class Employee extends User {
    company: string;
    constructor(employeeCompany: string, userName: string) {
        super(userName);
        this.company = employeeCompany;
    }
}
let alice: Employee = new Employee("Microsoft", "Alice");
if (alice instanceof User) {
    console.log("Alice is a User");
}
else {
    console.log("Alice is not a User");
}
window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};