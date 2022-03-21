const hamburger = document.getElementsByClassName('hamburger')[0];
const navList = document.getElementsByClassName('nav-list')[0];

hamburger.addEventListener('click', function(){
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
})