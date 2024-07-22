let langSelector = document.querySelector('.lang-icon');
let langIcon = langSelector.querySelector('.langicon');
let langList = document.querySelector('.langList');
let options = document.getElementsByTagName('li');

let checkTable = ["fa-solid fa-globe", "fa-solid fa-globe langicon active", "ko", "en", "langList", "lang-icon"];

let koSmallLogo = document.querySelector('.kosmalllogo');
let enSmallLogo = document.querySelector('.ensmalllogo');
let koBigLogo = document.querySelector('.kobiglogo');
let enBigLogo = document.querySelector('.enbiglogo');

let maintexts = document.querySelectorAll('.maintext');

if (localStorage.getItem("currentLang") == null) {
    localStorage.setItem("currentLang", "ko");
}

function logoControl() {
    if (koBigLogo != null) {
        if (SELECTED_LANG == "ko") {
            koBigLogo.classList.remove('hidden');
            enBigLogo.classList.add('hidden');
        } else {
            koBigLogo.classList.add('hidden');
            enBigLogo.classList.remove('hidden');
        }
    }

    if (koSmallLogo != null) {
        if (SELECTED_LANG == "ko") {
            koSmallLogo.classList.remove('hidden');
            enSmallLogo.classList.add('hidden');
        } else {
            koSmallLogo.classList.add('hidden');
            enSmallLogo.classList.remove('hidden');
        }
    }
}

function fontControl() {
    if (SELECTED_LANG == "ko") {
        maintexts.forEach(text => {
            text.classList.add('krtext');
        });
    } else {
        maintexts.forEach(text => {
            text.classList.remove('krtext');
        });
    }
}

function changeLang(targetLang) {
    let targetName = indexHTML != null ? indexHTML.className : gamepageHTML.className;

    let lastElement = targetLang == "ko" ? document.querySelector(".en") : document.querySelector(".ko");
    lastElement.classList.remove('active');

    langList.style.display = 'none';
    langIcon.classList.remove('active');

    SELECTED_LANG = targetLang;

    localStorage.setItem("currentLang", SELECTED_LANG);
    console.log(SELECTED_LANG);
    currentLangElement = document.querySelector('.' + SELECTED_LANG);
    currentLangElement.classList.add('active');

    logoControl();
    fontControl();

    // all
    for (const index in data['all'][SELECTED_LANG]) {
        const target = document.querySelector("." + index);
        if (target == null) { continue; }
        target.textContent = data['all'][SELECTED_LANG][index];
    }

    for (const index in data[targetName][SELECTED_LANG]) {
        const target = document.querySelector("." + index);
        if (target == null) { continue; }
        target.textContent = data[targetName][SELECTED_LANG][index];
    }
}

function selectorControl() {
    langSelector.onclick = function () {
        var status = langList.style.display == 'none';

        if (status) {
            langList.style.display = 'flex';
            langIcon.classList.add('active');
        } else {
            langList.style.display = 'none';
            langIcon.classList.remove('active');
        }
    }

    for (option of options) {
        option.onclick = function (event) {
            let targetLang = event.target.className;
            let currentLang = localStorage.getItem("currentLang");
            if (targetLang.indexOf(currentLang) != -1) {return;}
            changeLang(targetLang);
        }
    }
}

function visibleControl() {
    $(document).mouseup(function (e) {
        if (langList.style.display == 'none') { return; }

        var target = e.target.className;
        for (const index in checkTable) {
            if (checkTable.includes(target)) { return; }
        }

        langIcon.classList.remove('active');
        langList.style.display = 'none';
        return;
    });
}

function initialize() {
    langList.style.display = 'none';

    console.log(localStorage.getItem("currentLang"));

    let targetLang = localStorage.getItem("currentLang") == null ? "ko" : localStorage.getItem("currentLang");
    if (targetLang != "ko"){
        console.log("야호");
        changeLang(targetLang);
    }

    selectorControl();
    visibleControl();
}

initialize();