const banner = document.querySelector('.banner');
const body = document.querySelector('body');
const menu = document.querySelector('nav');
const menuButton = document.querySelector('.menu-button');
const searchForm = document.getElementById('search-form')
const posts = document.querySelector('.posts')
const postsTitle = document.querySelector('.posts__content__title');
const postSidebar = document.querySelector('.posts__sidebar')
const sidebarFirstBlock = document.querySelector('.posts__sidebar__block')


let ip = '';
let isp = '';
const ipVal = document.querySelector('.ip__val');
const ispVal = document.querySelector('.isp__val');

body.addEventListener('click', function (e) {

    if (e.target.parentElement.classList.contains("banner__close")) {
        banner.classList.add('hidden')
    } else if (e.target.classList.contains("menu-button") || e.target.parentElement.classList.contains("menu-button")) {
        menu.classList.toggle('active')
        menuButton.classList.toggle('active')
    }

})


// get ip
$.getJSON('https://ipapi.co/json/', function (data) {
    ip = JSON.stringify(data.ip, null, 2).replace(/"/g, '');
    isp = JSON.stringify(data.org, null, 2).replace(/"/g, '');
    ipVal.innerHTML = ip;
    ispVal.innerHTML = isp;
});

// relocate search form

window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        posts.prepend(searchForm)
    } else {
        postSidebar.prepend(searchForm)
    }
});