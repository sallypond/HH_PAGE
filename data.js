var data = {
    "en":
    {
        "about-title": "ABOUT US",
        "about-sub": "BI SUB TEXT",
        "about-text": 
        "this is a test.this is a test.this is a test. this is a test.this is a test.this is a test. this is a test.this is a test.this is a test. this is a test.this is a test.this is a test. this is a test.this is a test.this is a test. this is a test.this is a test.this is a test. this is a test.this is a test.this is a test. this is a test.this is a test.this is a test"
    },

    "ko":
    {
        "about-title": "소개",
        "about-sub": "BI 소개 서브 문구",
        "about-text": 
            "텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요.텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요.텍스트를 입력하세요. 텍스트를 입력하세요. 텍스트를 입력하세요."
    }
}

let langSelector = document.querySelector('.languageSelector');

langSelector.onchange = (event) => {
    var selectedLang = event.target.value;

    for (const index in data[selectedLang]){
        const target = document.querySelector("."+index);
        target.textContent = data[selectedLang][index];
    }
}