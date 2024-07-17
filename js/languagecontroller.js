let langSelector = document.querySelector('.lang-icon');
let langIcon = langSelector.querySelector('.langicon');
let langList = document.querySelector('.langList');
let options = document.getElementsByTagName('li');

let checkTable = ["fa-solid fa-globe", "fa-solid fa-globe langicon active", "ko", "en", "langList", "lang-icon"];

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

    let targetName = window.location.pathname;
    let lastLang = document.querySelector('.ko');

    for (option of options) {
        option.onclick = function (event) {
            langList.style.display = 'none';
            lastLang.classList.remove('active');
            langIcon.classList.remove('active');

            var selectedLang = event.target.className
            console.log(selectedLang, targetName);
            lastLang = document.querySelector('.' + selectedLang);
            lastLang.classList.add('active');

            for (const index in data[targetName][selectedLang]) {
                const target = document.querySelector("." + index);
                if (target == null) {continue;}
                target.textContent = data[targetName][selectedLang][index];
            }
        }
    }
}

function visibleControl(){
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

    selectorControl();
    visibleControl();
}

initialize();