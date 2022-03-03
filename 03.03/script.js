/**********#1**********/
/*
1) Выводим  2 следующих сообщения после соответствующих задержек.

Сообщение “Hello after 4 seconds” выводим через 4 секунды.
Сообщение “Hello after 8 seconds” выводим через 8 секунд.

В решении нужно определить всего одну функцию, содержащую встроенные функции.
Это означает, что множество вызовов setTimeout должны будут использовать
одну и ту же функцию.

    Пример вызова:

setTimeout(func1) => Hello after 4 seconds
setTimeout(func1) => Hello after 8 seconds
*/
const func1 = sec => {
    console.log('Hello after ' + sec + ' seconds');
};
setTimeout(func1, 4000, 4);
setTimeout(func1, 8000, 8);

/**********#2**********/
/*
Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
произведение этих аргументов.
*/
function mul(n,m) {
    return n * m;
}
console.log(mul(5,10));

/**********#3**********/
/*
Создайте функцию и с помощью цикла найдите факториал числа 7:
Название для функции можно дать любую.
Например при вызове функции factorial с параметром 7 в консоли должно
вывести следующее: factorial(7); //1*2*3*4*5*6*7 //5040
*/

function fuctorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
        console.log(result)
    }
    return result
}
console.log(fuctorial(7))
