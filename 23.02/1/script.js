/*******************#1********************/
/*
Создайте объект заработных плат.
Назовите userSalaries.
Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.
*/
let userSalaries = {
    Ella: 120000,
    Sophia: 15000,
    Elli: 25000
}
alert(userSalaries.Ella);
alert(userSalaries.Sophia);

/*******************#2********************/
/*
Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.
*/
let user = {
    a: 5,
    b: 6,
    c:10
}
console.log(user.a + user.b + user.c);

/*******************#3********************/
/*
let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}
Сделайте рефакторинг кода, с помощью тернарного оператора.
*/
let data = false;
let number = (data === true) ? 3 : 5;
console.log(number);

