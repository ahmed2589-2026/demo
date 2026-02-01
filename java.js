let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scroll >150){
        header.classList.add('active');

    }
    else{
        header.classList.remove('active');
        
    }

}



 let countDate = new Date('augest 19, 2026 00:00:00').getTime();
function CountDown() {
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minutes = second * 60;
    let hour = minutes * 60;
    let day = hour * 24;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minutes);
    let s = Math.floor((gap % minutes) / second);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function() {
    CountDown();
}, 1000);





const userCircle = document.getElementById('user-circle');
const userForm = document.getElementById('user-form');

userCircle.addEventListener('click', () => {
    userForm.style.display = userForm.style.display === 'block' ? 'none' : 'block';
});











  