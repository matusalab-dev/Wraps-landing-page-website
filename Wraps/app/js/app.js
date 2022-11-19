const accordion = document.getElementsByClassName("FAQ__wrapper__details");
const content = document.getElementsByClassName("FAQ__wrapper__description");

console.log(accordion);
console.log(content);


let i;
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    
    this.classList.toggle("active");
    console.log(accordion[i] + " clicked");
  
  })
}


