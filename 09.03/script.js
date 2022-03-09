let openBtn = document.querySelector('#open-modal');
let modal = document.querySelector('#modal');

const showNotification = (options) => {
    modal.textContent= options.html;
    modal.classList.add(options.className);
    modal.classList.add('d-block');
    modal.style.backgroundColor = '#e2e3e5';
    modal.style.borderColor = '#d3d6d8';
    modal.style.color = '#41464b';
    setTimeout(hideNotification,1500)
}

const hideNotification = () => {
    modal.classList.remove('d-block')
}

const changeStyle = () => {
    openBtn.style.width = '500px';
    openBtn.style.backgroundColor = 'red';
}
/*const changeStyleFirst = () => {
    modal.style.backgroundColor = '#e2e3e5';
    modal.style.borderColor = '#d3d6d8';
    modal.style.color = '#41464b';
}*/

openBtn.addEventListener('click',() => {
    changeStyle();
    showNotification({html:'Hello,world', className:'welcome'});
})

/*
1)
modal.style.backgroundColor = '#e2e3e5';
modal.style.borderColor = '#d3d6d8';
modal.style.color = '#41464b';
*/
/*2)
modal.style.backgroundColor = '#d1e7dd';
modal.style.borderColor = '#badbcc';
modal.style.color = '#0f5132';*/
/*
3)
modal.style.backgroundColor = '#f8d7da';
modal.style.borderColor = '#f5c2c7';
modal.style.color = '#842029';*/
/*
4)
modal.style.backgroundColor = '#f8d7da';
modal.style.borderColor = '#f5c2c7';
modal.style.color = '#842029';*/
/*
5)
modal.style.backgroundColor = '#fff3cd';
modal.style.borderColor = '#ffecb5';
modal.style.color = '#664d03';*/
/*
6)
modal.style.backgroundColor = '#cff4fc';
modal.style.borderColor = '#b6effb';
modal.style.color = '#055160';*/
/*
7)
modal.style.backgroundColor = '#fefefe';
modal.style.borderColor = '#fdfdfe';
modal.style.color = '#636464';*/
/*8)
modal.style.backgroundColor = '#d3d3d4';
modal.style.borderColor = '#bcbebf';
modal.style.color = '#141619';*/

