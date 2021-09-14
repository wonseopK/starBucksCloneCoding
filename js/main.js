const searchEl = document.querySelector('.search');
//document 는 html
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
  //logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});