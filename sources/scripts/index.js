const burgerButton = document.querySelector('.burger-menu-button')
const menuBox = document.querySelector('.menu')
// const headerBox = document.querySelector('header')
let burgerClickCounter = 0

burgerButton.addEventListener('click', ()=> {
    if (burgerClickCounter == 0){
        menuBox.classList.remove('sliding-in')
        menuBox.classList.add('sliding-out')
        burgerClickCounter++
    }

    else{
        menuBox.classList.remove('sliding-out')
        menuBox.classList.add('sliding-in')
        burgerClickCounter--
    }
})
