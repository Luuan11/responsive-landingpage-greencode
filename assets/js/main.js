const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementsById('nav-toggle'),
        navClose = docuemnt.getElementById('nav-close')
        
if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}