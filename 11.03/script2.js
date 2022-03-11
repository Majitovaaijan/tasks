let btnRegistration = document.querySelector('#registration');

btnRegistration.onclick = (event) =>{
    event.preventDefault();

let orgName = document.querySelector('#org-name');
let position = document.querySelector('#position');
let salary = document.querySelector('#salary');
let lastSalary = document.querySelector('#last-salary');
let phone = document.querySelector('#phone');
let price = document.querySelector('#price');
let quantity = document.querySelector('#quantity');
let total = document.querySelector('#total');
let creditType = document.querySelector('#credit-type');
let creditTerm = document.querySelector('#credit-term');
let place = document.querySelector('#place');

let object ={
    org_name: orgName.value,
    position: position.value,
    salary: salary.value,
    last_salary: lastSalary.value,
    phone: phone.value,
    price: price.value,
    quantity: quantity.value,
    total: total.value,
    credit_type: creditType.value,
    credit_term: creditTerm.value,
    place: place.value
}
console.log(object);
}
