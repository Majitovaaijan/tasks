/******************#1******************/
/*
Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.
*/
let number = [1,8,15,14,10,58,7,3,6,5,9,46];
for(let i = 0; i < number.length; i++){
    if(number[i] < 10 && number[i] > 0){
        console.log(number[i]);

    }
}

/******************#2******************/
/*
У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.
*/

let num = [1,2,5,6,88,5];
let index = 0;
for(let i = 0; i < num.length; i++){
    index += num[i];
    console.log(index);
}

/******************#3******************/
/*
Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива
Квадрат числа 5 будет 25.
*/
let numb = [1,2,3,4,5,6,7,8,9,4];
let index1 = 0;
for(let i = 0; i < numb.length; i++){
     index1 = index1 + numb[i] * numb[i];
     console.log(index1);
}