
let body = document.querySelector('body');
let stBtn = document.querySelector('#start');
let spBtn = document.querySelector('#stop');

let hexNumber = '0123456789ABCDEF';
let intervalId;

let getColor = function(){
    let colorCode = '#';
    for(i=0; i<6; i++)
        {
            colorCode += hexNumber[Math.floor(Math.random()*16)];
        }
        console.log(colorCode);
        return colorCode;
}

let startChangingBg = function(){
    intervalId = setInterval(() => {
        body.style.backgroundColor = getColor();
    }, 1000);
    
}

let stopChangingBg = function(){
    console.log("Stopped changing bgColor");
    clearInterval(intervalId);
}

stBtn.addEventListener('click', startChangingBg);
spBtn.addEventListener('click', stopChangingBg);

