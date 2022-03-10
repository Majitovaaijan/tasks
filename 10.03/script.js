let btn1 = document.querySelector('#start');
let btn2 = document.querySelector('#stop');
let btn3 = document.querySelector('#restart');

let time1 = document.querySelector('#hour');
let time2 = document.querySelector('#minute');
let time3 = document.querySelector('#second');
let time4 = document.querySelector('#millisecond');


let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let intervalID;

btn1.addEventListener('click',() =>{
    clearInterval(intervalID);
    intervalID = setInterval(startTimer,10);
})

btn2.addEventListener('click', () =>{
    clearInterval(intervalID);
})

btn3.addEventListener('click',() =>{
    clearInterval(intervalID);
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    time1.textContent = '00';
    time2.textContent = '00';
    time3.textContent = '00';
    time4.textContent = '00';
})

function startTimer() {
    millisecond++;
    if(millisecond <= 9){
        time4.textContent = '0' + millisecond;
    }
    if(millisecond > 9){
        time4.textContent = millisecond;
    }
    if(millisecond > 99){
        second++;
        millisecond = 0;
        time4.textContent = '0' + millisecond;
    }
    if(second <= 9){
        time3.textContent = '0' + second;
    }
    if(second > 9){
        time3.textContent = second;
    }
    if(second >= 59){
        minute++;
        second = 0;
        time3.textContent = '0' + second;
    }
    if(minute <= 9){
        time2.textContent = '0' + minute;
    }
    if(minute > 9){
        time2.textContent = minute;
    }
    if(minute >= 59){
        hour++;
        minute = 0;
        time2.textContent = '0' + minute;
    }
    if(hour <= 9){
        time1.textContent = '0' + hour;
    }
    if(hour > 9){
        time1.textContent = hour;
    }
    if(hour >= 23){
        hour = 0;
        time1.textContent = '0' + hour
    }
}










/*
let intervalID;
let count = 0;
btn1.onclick = function start() {
    intervalID = setInterval(function () {
        time3.textContent ='0'+ count
        count++
    }, 1000)
}

btn2.onclick = () =>{
    clearInterval(intervalID)
}

btn3.onclick = () =>{
    time3.textContent = count = 0;
}*/
