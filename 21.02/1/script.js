/***************#1**************/
/*
1)Переделайте приведенный код так, чтобы в нем использовались операции
    +=, -=, *=, /=, ++, --.
Количество строк кода при этом не должно измениться.
*/
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);

/***************#2**************/
/*2)Переделайте этот код так, чтобы в нем использовались операции ++ и --.
Количество строк кода при этом не должно измениться.*/
var num2 = 10;
/*пост*/
num2++;
/*преф*/
++num2;
/*преф*/
--num2;
alert(num2);

/***************#3(&&)**************/

let age = 29;
let result = age === 29 && age >= 29;
let result1 = 29 < 0 && age === 29;
let result2 = 29 <= 35 && age === 35;
let result3 = age > 29 && -- age;
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

/***************#4(||)**************/

let page = 10;
let page1 = 15;
let result4 = page === 15 || page1 === 10;
let result5 = page1 <= 15 || page > 10;
let result6 = page > page1 || page !== page1;
let result7 = page >= 10 || page1 === 'hello';
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
