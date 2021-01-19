const header = document.getElementById('header');
const logoWhite = document.getElementById('logo-white');
const logoColor= document.getElementById('logo-color');
const btnMenu = document.getElementById('btn-menu')
const overlay = document.getElementById('overlay')
const panel = document.getElementById('panel')
const panelBtn = document.getElementById('panel__btn')

window.addEventListener('scroll', ()=> {
    let Yoffset

    if(window.matchMedia('screen and (max-width: 407px)').matches){
        Yoffset = 400
    } else if (window.matchMedia('screen and (max-width: 768px)').matches) {
        Yoffset = 400
    } else {
        Yoffset = 400
    }

    if (window.pageYOffset >= Yoffset) {
        header.classList.add('header-fixed')
        logoWhite.style.display = 'none'
        logoColor.style.display = 'block'
    } else {
        header.classList.remove('header-fixed')
        logoWhite.style.display = 'block'
        logoColor.style.display = 'none'
    }
});

function hamburguerMenu(btnMenu, overlay, panel) {
    btnMenu.addEventListener("click", () => {
        overlay.classList.toggle("overlay-active");
        panel.classList.toggle("panel-active");
        btnMenu.classList.toggle("is-active");

        if (btnMenu.classList.contains("is-active")) {
            document.getElementsByTagName("html")[0].style.overflow = "hidden";
        } else {
            document.getElementsByTagName("html")[0].style.overflow = "auto";
        }
    });

    panelBtn.addEventListener("click", () => {
        overlay.classList.remove("overlay-active");
        panel.classList.remove("panel-active");
        btnMenu.classList.remove("is-active");

        document.getElementsByTagName("html")[0].style.overflow = "auto";
    });
}

hamburguerMenu(btnMenu, overlay, panel);