const links = document.querySelector('.main-nav')
const navbar = document.querySelector('.navbar')
const navToggle = document.querySelector('.navbar-toggle')



navToggle.addEventListener('click', function() {
    links.classList.toggle('show-nav')
    navbar.classList.toggle('flex-nav')
})

