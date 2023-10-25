let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*icon*/
let menu = document.querySelector('#menu') ;
let nav = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
    menu.classList.remove('bx-menue');
    nav.classList.remove('active');
};

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id') ;
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('heade nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100)

// /*icon*/
// let menu = document.querySelector('#menu') ;
// let nav = document.querySelector('.navbar');
// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     nav.classList.toggle('active');
// };

// menu.classList.remove('bx bx-menue');
// nav.classList.remove('active');

/********** */
// let contact = document.querySelector('.contact');
// let form = contact.querySelector('.form');
// let submit = form 
