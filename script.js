let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const socialTags = [
    document.querySelector('#social-bottom'),
]

const socialLinks = [
    { icon: 'bx bxl-discord', url: "https://discord.gg/z8BNWsTDVB" },
    { icon: 'bx bxl-youtube', url: "https://www.youtube.com/channel/UCZXwTimivga36LyLqNVUedA" },
    { icon: 'bx bxl-twitter', url: "https://twitter.com/studio_pond" },
    { icon: 'bx bxl-tiktok', url: "https://www.tiktok.com/@pond_official" },
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