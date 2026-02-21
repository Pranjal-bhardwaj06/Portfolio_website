const words=["Frontend Developer",
"React Developer",
"ML Enthusiast"];

let i=0;
let j=0;
let text="";

function typing(){
if(j<words[i].length){
text+=words[i][j];
document.getElementById("typing").innerHTML=text;
j++;
setTimeout(typing,100);
}
else{
setTimeout(()=>{
text="";
j=0;
i=(i+1)%words.length;
typing();
},1500);
}
}

typing();

const roles = [
"Frontend Developer",
"React Developer",
"Machine Learning Enthusiast",
"Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function typeEffect() {

    if(charIndex < roles[roleIndex].length){
        typingElement.textContent +=
        roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect,100);
    }
    else{
        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){
    if(charIndex > 0){
        typingElement.textContent =
        roles[roleIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(eraseEffect,50);
    }
    else{
        roleIndex=(roleIndex+1)%roles.length;
        setTimeout(typeEffect,200);
    }
}

typeEffect();

const skillCards =
document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {

skillCards.forEach(card => {

const position =
card.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
card.style.opacity="1";
card.style.transform="translateY(0)";
}

});

});

