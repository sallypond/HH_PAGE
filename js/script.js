let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const socialTags = [
    document.querySelector('#social-bottom'),
]

const socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: "" },
    { icon: 'fa-brands fa-instagram', url: "" },
    { icon: 'fa-brands fa-x-twitter', url: "" },
    { icon: 'fa-brands fa-discord', url: "" },
]

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            })
        }
    })
}

function addSocialIcons(socialInfo) {
    for (const index in socialTags) {
        const hyperlink = document.createElement("a");
        const icon = document.createElement("i");

        hyperlink.href = socialInfo.url;
        hyperlink.target = "_undefined";
        icon.className = socialInfo.icon;

        hyperlink.appendChild(icon);

        socialTags[index].appendChild(hyperlink);
    }
}

function setSocial() {
    socialLinks.forEach(addSocialIcons);
}

setSocial();

const mobileView = window.matchMedia(`(max-width: 1458px)`);
const biTopTitle = document.querySelector('.top-title');
const bibottomTitle = document.querySelector('.bottom-title');

const HIDDEN_CLASSNAME = "hidden";

function mobileViewHandler(view){
    if (view.matches) {
        biTopTitle.classList.add(HIDDEN_CLASSNAME);
        bibottomTitle.classList.remove(HIDDEN_CLASSNAME);
    } else {
        biTopTitle.classList.remove(HIDDEN_CLASSNAME);
        bibottomTitle.classList.add(HIDDEN_CLASSNAME);
    }
}

if (window.location.pathname == "/index.html"){
    mobileViewHandler(mobileView);
    mobileView.addEventListener("change", mobileViewHandler);
}