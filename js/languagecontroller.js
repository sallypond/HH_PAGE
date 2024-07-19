let langSelector = document.querySelector('.lang-icon');
let langIcon = langSelector.querySelector('.langicon');
let langList = document.querySelector('.langList');
let options = document.getElementsByTagName('li');

let checkTable = ["fa-solid fa-globe", "fa-solid fa-globe langicon active", "ko", "en", "langList", "lang-icon"];

let koSmallLogo = document.querySelector('.kosmalllogo');
let enSmallLogo = document.querySelector('.ensmalllogo');
let koBigLogo = document.querySelector('.kobiglogo');
let enBigLogo = document.querySelector('.enbiglogo');

function logoControl(selectedLang){
    if (koBigLogo != null){
        if (selectedLang == "ko"){
            koBigLogo.classList.remove('hidden');
            enBigLogo.classList.add('hidden');
        }else{
            koBigLogo.classList.add('hidden');
            enBigLogo.classList.remove('hidden');
        }
    }

    if (koSmallLogo != null){
        if (selectedLang == "ko"){
            koSmallLogo.classList.remove('hidden');
            enSmallLogo.classList.add('hidden');
        }else{
            koSmallLogo.classList.add('hidden');
            enSmallLogo.classList.remove('hidden');
        }
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

    let targetName = window.location.pathname;
    let lastLang = document.querySelector('.ko');

    for (option of options) {
        option.onclick = function (event) {
            langList.style.display = 'none';
            lastLang.classList.remove('active');
            langIcon.classList.remove('active');

            var selectedLang = event.target.className
            console.log(targetName, "<<< 타겟 네임!");
            console.log(selectedLang, "<<< 선택 언어!");
            
            lastLang = document.querySelector('.' + selectedLang);
            lastLang.classList.add('active');

            logoControl(selectedLang);

            // all
            for (const index in data['all'][selectedLang]) {
                const target = document.querySelector("." + index);
                if (target == null) {continue;}
                target.textContent = data['all'][selectedLang][index];
            }

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

    console.log("Test001");
}

initialize();