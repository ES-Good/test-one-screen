const btnMenu = document.getElementById('btn-menu')
const menu = document.getElementById('top-menu')
const overlay = document.querySelector('.overlay')

btnMenu.onclick = function () {
    btnMenu.classList.toggle('btn-burger_active')
    menu.classList.toggle('menu_show')
    overlay.classList.toggle('overlay_active')
    setTimeout(() => {
        overlay.classList.toggle('overlay_show')
    }, 100);
}

overlay.onclick = function () {
    btnMenu.classList.remove('btn-burger_active')
    menu.classList.remove('menu_show')
    overlay.classList.remove('overlay_active')
    setTimeout(() => {
        overlay.classList.remove('overlay_show')
    }, 100);
}