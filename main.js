const section = document.getElementById('sectionOne');
const section2 = document.getElementById('sectionTwo');
const section3 = document.getElementById('sectionThree');
const section4 = document.getElementById('sectionFour');


let i = 0;
let findShow = (arr) => {
  while (i < arr.length) {
    arr[i].className += 'showAnimation';
    i++;
  }
}


window.addEventListener('scroll', function(a){
  if (window.scrollY > 0 && window.scrollY < 500 ) {
      section.classList.add('showAnimation');
      section.classList.remove('hidden');
      section2.classList.remove('showAnimation');
      section2.classList.add('hidden')
  } else if (window.scrollY > 500 && window.scrollY < 1400) {
      section2.classList.add('showAnimation');
      section2.classList.remove('hidden')
      section.classList.remove('showAnimation');
      section.classList.add('hidden');
  } else if (window.scrollY > 1400 && window.scrollY < 2000) {
    section3.classList.add('showAnimation');
    section3.classList.remove('hidden');
    section2.classList.remove('showAnimation');
    section2.classList.add('hidden');
    section4.classList.remove('showAnimation');
    section4.classList.add('hidden');
}
 else {
    section4.classList.add('showAnimation');
    section4.classList.remove('hidden');
    section3.classList.remove('showAnimation');
    section3.classList.add('hidden');
}
});

// Better solution stolen from Kay
