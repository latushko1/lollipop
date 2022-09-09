function burgerMenu () {
    const menu = document.querySelector('.menu')
    const burger = document.querySelector('.burger')
    const body = document.querySelector('body')

    burger.addEventListener ('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('overflow-hidden')
    })

    menu.addEventListener('click', () =>{
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('overflow-hidden')
    })
}

burgerMenu()


const modal = document.querySelector('#modal-btn')
const modalWindow = document.querySelector('.modal-window')
modal.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden')
    modalWindow.classList.toggle('flex')
    console.log(modalWindow);
})