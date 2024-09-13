let body = document.querySelector("body");
let modeBtn = document.querySelector("#mode-btn");
let modeBg = "light";

modeBtn.style.fontSize = "22px";
modeBtn.style.border = "none";


modeBtn.addEventListener('click',(evt)=>{
    if(modeBg==="light"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        modeBtn.style.backgroundColor = "white";
        modeBtn.style.color = "black";
        modeBtn.innerText = "light";
        modeBg = "dark";
    }

    else{
        body.style.backgroundColor = "white"
        body.style.color = "black";
        modeBtn.style.backgroundColor = "black";
        modeBtn.style.color = "white";
        modeBtn.innerText = "dark";
        modeBg = "light";
    }
});