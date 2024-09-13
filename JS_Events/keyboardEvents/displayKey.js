

// document.addEventListener('keydown',(e)=>{
//     let dBox = document.querySelector('.key-box');
//     if(e.keyCode === 65){
//         dBox.style.textAlign = "center";
//     }
//     dBox.innerText = `${e.key}`
//     // document.querySelector('.key-box').innerText = `${e.key}`;
// })

document.addEventListener('keydown', (e) => {
    let dBox = document.querySelector('.key-box');
    if (dBox) { // Check if dBox exists
        if (e.keyCode === 65) { // Check if the pressed key is 'a'
            dBox.style.textAlign = "center";
        } else {
            dBox.style.textAlign = ""; // Reset text alignment for other keys
        }
        dBox.innerText = `${e.key}`; // Display the pressed key
    }
});
