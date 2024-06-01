
//  const btn = document.querySelector('.btn');
//  const color = document.querySelector('.random-color');
//  const mainSection = document.querySelector('.main');
//  btn.addEventListener('click', function() {
//   const randomNumber = getRandomNumber();
//   mainSection.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
//   function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
//   };
//  });
const colors = ["green", "red", "rgba(133,122,200)", "#f15025" ,"#ddd", 'red'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const mainSection = document.querySelector('.main-section')
btn.addEventListener('click', function() {
  const randomNumber = getRandomNumber();
  mainSection.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
  }
})