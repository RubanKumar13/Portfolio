
const texts = ["a Web Developer","a Java Developer"];
const display = document.getElementById("a2");
let textIndex = 0;

function fadeText() {
    display.style.opacity = 0;  // Start with fading out
    setTimeout(() => {
      display.textContent = texts[textIndex];
      display.style.opacity = 1;  // Fade in new text
      textIndex = (textIndex + 1) % texts.length;
    }, 1000);  // Time to switch text (matching CSS transition duration)
  }
  // Loop through texts
  setInterval(fadeText, 5000);
  
  function fadeIntext(){
    const text=document.getElementById('f2');
    text.style.opacity=1;
    text.style.transform='translateX(0)';
  }

// const texts=["a Web Developer", "a Java developer"];
// const fadeText=document.getElementById('a2');
// let currentIndex=0;
// function fadeInOut(){
//   fadeText.style.opacity=1;
//   setTimeout(()=>{
// fadeText.style.opacity=0;
//   }, 2000);
//   setTimeout(()=>{
//     currentIndex=(currentIndex+1);
//     fadeText.textContent=texts[currentIndex];
//     fadeInOut();
//   }, 4000);
// }
// fadeInOut();