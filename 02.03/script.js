/******************#1*****************/
/*
Дан массив с элементами [2, 3, 4, 5, 6, 7].
С помощью цикла for найдите произведение элементов этого массива.
Общий результат сохранить в объекте с соответствующим свойством.
Например: 2 * 3 = 6 -> 6 * 4 и.т.д.
*/
/** с циклом for**/
/*
let number = [2,3,4,5,6,7];
let sum = 1;
for(let i = 0; i < number.length; i++){
    sum *= number[i]
}
let obj = {
    result : sum
}
console.log(obj);
console.log(sum);
*/

/**с Reduce**/
/*
let number = [2,3,4,5,6,7];
let result = number.reduce((sum,currentValue) => {
    return sum * currentValue
},1 );
console.log(result);
*/

/******************#2*****************/
/*
Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
Например: myFunc('a', 3)   // ['a', 'a', 'a']
*/
function showMessage(arraySize,value){
let newArray = [];
for(let i = 0; i < arraySize; i ++){
    newArray.push(value)
}
        return newArray;
}
console.log(showMessage(3,'a'))

/******************#3*****************/
/*
Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1];
*/
const data = [1,2,3];
function myFunct(data) {
    let mas = [];
    for (let i = data.length - 1; i >= 0; i--){
        mas.push(data[i]);
    }
    return mas;
}
console.log(myFunct(data));
