/*
1)Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
(не считая значения 99) и вывести эту информацию на экран.

    ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4
*/
/*
let btnStart = document.getElementById('start');
let btnResult = document.getElementById('result');
let prm;
let result = 0;

let fnStart = () => {
    prm = prompt('Введите число')
    while(prm != 99){
        prm = prompt('Введите число')
        result += 1;

    }
}
btnStart.onclick = fnStart;
btnResult.onclick = () =>{
    alert(`количество чисел - ${result}`);
}
*/
/*
2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
на экран. Ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290
*/


/*
let btnStart = document.getElementById('start');
let resultBtn = document.getElementById('result');

let result=0;
let prm;
let number = 0;
let fnStart = ()=> {
    prm = prompt('Введите число')
    while(prm !=999){
        result+=1;
        number+=Number(prm);
        prm = prompt('Введите число');
    }
    //return alert(number)
}

btnStart.onclick = fnStart;
resultBtn.onclick = () =>{
    alert(`количество кликов = ${result} сумма = ${number}`);
}
*/
/*
3) Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
    а второе – нынешний (текущий) год.
    Программа должна вывести на экран возраст ученика (в целых годах).

ввод: 2006, 2018 ⇒ вывод: вам 12 лет)
*/
let btnStart = document.getElementById('start');
let resultBtn = document.getElementById('result');

let prm2;
let prm1;
let num1;
let fnStart = () =>{
    prm1 = prompt('Введите свой год рождения');
    prm2 = prompt('Введите текущий год');
    num1 = Number(prm1) - Number(prm2);
    return num1
}
btnStart.onclick = fnStart;
resultBtn.onclick = () =>{
    alert(`вам ${num1} лет`);
}
