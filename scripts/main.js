//?Toggle between classes to change visibility

const button = document.getElementById("button");
const navigation = document.getElementById("primary-navigation");

button.onclick = () => {
  button.classList.toggle("toggled");
  navigation.classList.toggle("toggled");
}

//?Change active on click to toggle color

const active = document.querySelector(".active");
const unactive = document.querySelector(".unactive");
const mediaQuery = window.matchMedia("(max-width: 55em)");

active.style.color = "var(--clr-primary-100)";

active.onclick = () => {
  if(mediaQuery.matches){
    active.style.color = "var(--clr-primary-100)";
  }
}

unactive.onclick = () => {
  if(mediaQuery.matches){
    active.style.color = "var(--clr-accent-200)";
  }
}

//?On hover change word to random numbers and change back to default

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".head-line").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 5;
  }, 30);
}

const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval2 = null;

document.querySelector(".under-line").onmouseover = event => {  
  let iteration2 = 0;
  
  clearInterval(interval2);
  
  interval2 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration2) {
          return event.target.dataset.value[index];
        }
      
        return letters2[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration2 >= event.target.dataset.value.length){ 
      clearInterval(interval2);
    }
    
    iteration2 += 1 / 3;
  }, 30);
}