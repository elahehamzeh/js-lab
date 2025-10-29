
// // فاکتوریل
// const num=parseInt(prompt('emter number'));
// let factorial=1;
// for(let i=1;i<=num;i++){
//     factorial*=i;
//     console.log(factorial);
// }

// // خروجی ستاره
// const nummber=parseInt(prompt('enter your number'));
// for(let i=1;i<=nummber;i++){
//     console.log("*".repeat(i));

// }
// // معکوس
// const number=parseInt(prompt('enter a number'));
// for(let i= number; i>=1;i--){
//     console.log(i);
// }


// اسلایدر

// const images = ["img.jpg", "imgg.webp", "imggg.jpg", "imgggg.webp"];
// let index = 0;
// let flag = true;

// const slider = document.getElementById("slider");
// const nextBtn = document.getElementById("next");
// const prevBtn = document.getElementById("prev");

// nextBtn.addEventListener("click", () => {
//   flag = true;
//   changeImage();
// });

// prevBtn.addEventListener("click", () => {
//   flag = false;
//   changeImage();
// });

// function changeImage() {
//   if (flag === true) {
//     index++;
//     if (index >= images.length) index = 0;
//   } else {
//     index--;
//     if (index < 0) index = images.length - 1;
//   }
//   slider.src = images[index];
// }

// عکس بزرگ رو انتخاب می‌کنیم
const bigImage = document.getElementById('bigImage');


const images = document.querySelectorAll('.gallery img');


images.forEach(function(img) {
  img.onclick = function() {
    bigImage.src = this.src; 
  }
});
