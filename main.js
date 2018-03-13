const appear = document.getElementById('sectionOne');
const appear2 = document.getElementById('sectionTwo');
const appear3 = document.getElementById('sectionThree');
const appear4 = document.getElementById('sectionFour');


// window.addEventListener('scroll', function(a){
//   findShow(appear);
// });

let i = 0;
let findShow = (arr) => {
  while (i < arr.length) {
    arr[i].className += 'showAnimation';
    i++;
  }
}

// window.addEventListener('scroll', function(a){
//   for (let i = 0; i < appear.length; i++) {
//     appear[i].classList.add('showAnimation');
//   }
// });


window.addEventListener('scroll', function(a){
  if (window.scrollY > 0 && window.scrollY < 500 ) {
      appear.classList.add('showAnimation');
      appear.classList.remove('hidden');
      appear2.classList.remove('showAnimation');
      appear2.classList.add('hidden')
  } else if (window.scrollY > 500 && window.scrollY < 1400) {
      appear2.classList.add('showAnimation');
      appear2.classList.remove('hidden')
      appear.classList.remove('showAnimation');
      appear.classList.add('hidden');
  } else if (window.scrollY > 1400 && window.scrollY < 2000) {
    appear3.classList.add('showAnimation');
    appear3.classList.remove('hidden');
    appear2.classList.remove('showAnimation');
    appear2.classList.add('hidden');
    appear4.classList.remove('showAnimation');
    appear4.classList.add('hidden');
}
 else {
    appear4.classList.add('showAnimation');
    appear4.classList.remove('hidden');
    appear3.classList.remove('showAnimation');
    appear3.classList.add('hidden');
}
});
