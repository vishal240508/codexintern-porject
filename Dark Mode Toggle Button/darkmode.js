let btn = document.querySelector("#toggle");
let currMode="light";


btn.addEventListener("click", ()=>{
  if(currMode === "light"){
    currMode="dark";
    document.querySelector(".container").style.backgroundColor="black";
    document.querySelector(".button").style.backgroundColor="white";
    document.getElementById("heading").style.color = "white";
    document.getElementById("heading").textContent = "DARK MODE"
    
  }else{
    currMode="light";
    document.querySelector(".container").style.backgroundColor="white";
    document.querySelector(".button").style.backgroundColor="#d2d2d2";
    document.getElementById("heading").style.color = "black";
    document.getElementById("heading").textContent = "LIGHT MODE";
    document.getElementById("heading").innerHTML=<i class="fa fa-sun-o" aria-hidden="true"></i>
  }

  console.log(currMode);
})
