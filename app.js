
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
// const bigImage = document.getElementById('bigImage');


// const images = document.querySelectorAll('.gallery img');


// images.forEach(function(img) {
//   img.onclick = function() {
//     bigImage.src = this.src; 
//   }
// });

// box color

const cells = document.querySelectorAll(".cell");
let count = 0;
const countDisplay = document.getElementById("count");

// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", function() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);

//     this.style.background = "rgb(" + r + "," + g + "," + b + ")";

    
//     if (!this.clicked) {
//       this.clicked = true;
//       count++;
//       countDisplay.innerHTML = count;
//     }
//   });
// }
// ===== MODEL =====
const ContactModel = (function () {
  const contacts = ['sana', 'dara', 'samin', 'sima', 'sina', 'bahram', 'iman'];

  function getAll() {
    return contacts;
  }

  function filterByS() {
    return contacts.filter(name => name.startsWith('s'));
  }

  return {
    getAll,
    filterByS
  };
})();

// ===== VIEW =====
const ContactView = (function () {
  const ul = document.querySelector('ul');
  const span = document.querySelector('span');

  function render(list) {
    ul.innerHTML = '';
    list.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  }

  function bindFilter(handler) {
    span.addEventListener('click', handler);
  }

  return {
    render,
    bindFilter
  };
})();

// ===== CONTROLLER =====
const ContactController = (function (Model, View) {

  function init() {
    View.render(Model.getAll());
    View.bindFilter(handleFilter);
  }

  function handleFilter() {
    View.render(Model.filterByS());
  }

  return {
    init
  };

})(ContactModel, ContactView);

// ===== INIT =====
window.addEventListener('load', function () {
  ContactController.init();
});