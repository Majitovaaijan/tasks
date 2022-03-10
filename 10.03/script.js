let btn1 = document.querySelector('#start');
let btn2 = document.querySelector('#stop');
let btn3 = document.querySelector('#restart');

let time1 = document.querySelector('#hour');
let time2 = document.querySelector('#minute');
let time3 = document.querySelector('#second');


let count = 0;
let intervalID;

btn1.onclick = function start() {
    intervalID = setInterval(function () {
        time3.textContent = count
        count++
    }, 1000)
}

btn2.onclick = () =>{
    clearInterval(intervalID)
}

btn3.onclick = () =>{
    time3.textContent = count = 0;
}