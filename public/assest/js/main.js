function toggleClass(IdName, className){
  var element = document.querySelector(IdName);
  element.classList.toggle(className);
}
function addClass(IdName, className){
  var element = document.querySelector(IdName);
  element.classList.add(className);
}
function removeClass(IdName, className){
  var element = document.querySelector(IdName);
  element.classList.remove(className);
}

// Animation
AOS.init({
  duration: 800,
  easing: 'ease-in-out-back'
});
