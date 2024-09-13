let btn02 = document.querySelector(".button");
btn02.addEventListener("click",(evt)=>{
   console.log(evt)
   let newP = document.getElementsByTagName("p")[0];
   newP.innerHTML = "Once Clicked and Your Content Changed. Demo to Mouse Event";
   let container01 = document.querySelectorAll(".container");
   let container02 = document.querySelectorAll(".inner-container");
   container01[0].style.backgroundColor = "hotpink";
   // container01[0].style.display = "none";
   container02.forEach((cont)=>{
    cont.style.color = "red";
   })
})