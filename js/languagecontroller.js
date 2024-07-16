let langSelector = document.querySelector('.lang-icon');
let langList = document.querySelector('.langList');
let options = document.getElementsByTagName('li');

let checkTable = ["fa-solid fa-globe", "ko", "en", "langList", "lang-icon"];

function visibleControl(){
    $(document).mouseup(function (e) {
        if (langList.style.display == 'none') { return; }
    
        var target = e.target.className;
        for (const index in checkTable) {
            if (checkTable.includes(target)) { return; }
        }
    
        langList.style.display = 'none';
        return;
    });
}

function selectorControl() {
    langSelector.onclick = function () {
        var status = langList.style.display == 'none';

        if (status) {
            langList.style.display = 'flex';
        } else {
            langList.style.display = 'none';
        }
    }

    let lastLang = document.querySelector('.ko');

    for (option of options) {
        option.onclick = function (event) {
            langList.style.display = 'none';
            lastLang.classList.remove('active');

            var selectedLang = event.target.className
            lastLang = document.querySelector('.' + selectedLang);
            lastLang.classList.add('active');

            for (const index in data[selectedLang]) {
                const target = document.querySelector("." + index);
                target.textContent = data[selectedLang][index];
            }
        }
    }
}


function initialize() {
    langList.style.display = 'none';

    selectorControl();
    visibleControl();
}

initialize();