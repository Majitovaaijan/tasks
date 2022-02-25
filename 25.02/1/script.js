/**************№1**************/
let name = prompt('Кто пришел?');
if(name === 'Админ'){
    let hug = prompt('Пароль?');
    if (hug ==='Черный властелин'){
        alert('Добро пожаловать!');
    }else if(hug === null){
        alert('Вход отменен')
    }else{
        alert('Пароль неверен')
    }
}else if(name === null){
   alert('Вход отменен');
}else {
    alert('Я вас не знаю');
}
