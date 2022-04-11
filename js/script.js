// create a const navtoggle
const NavToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')

NavToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
})

//copyright date increaser

let d = new Date();
let y = d.getFullYear();
document.querySelector('.copyright').innerText = y ;

// for modal of about me page
const AboutMeModal = document.getElementById('AboutMeModal');
const modalBtn = document.getElementById('LogInModal');//this is for the button

const CloseBtn = document.getElementById('closebtn__'); //close sign x


modalBtn.addEventListener('click', OpenModal)
CloseBtn.addEventListener('click', CloseModal)

function OpenModal() {
    AboutMeModal.style.display ='block';
}

function CloseModal(){
    AboutMeModal.style.display ='none';
}