window.onload = () => {
    const neonSizeRadio = document.getElementsByName("size");
    const neonTextPhrase = document.getElementById('customise-phrase-text');
    const neonFontSel = document.getElementById("customise-font-sel");
    const neonColorRadio = document.getElementsByName("color");

    const neonSignShowcase = document.getElementById('neonSignShowcase');

    const neonSubmitBtn = document.getElementById('try-btn');
    neonSubmitBtn.onclick = () => {
    
        let size, text, font, color;

        for (let i = 0; i < neonSizeRadio.length; i++) {
            if (neonSizeRadio[i].checked) {
                size = neonSizeRadio[i].value;
            }
        }

        text = neonTextPhrase.value;
        font = neonFontSel[neonFontSel.selectedIndex].value;
        for (let i = 0; i < neonColorRadio.length; i++) {
            if (neonColorRadio[i].checked) {
                color = neonColorRadio[i].value;
            }
        }

        let tmpClassName=`text-neon-${color} text-neon-${size} `
        alert(tmpClassName);
// 

        neonSignShowcase.style.fontFamily = font;
        neonSignShowcase.setAttribute('class',tmpClassName);

        
        neonSignShowcase.innerText = text;

    }
}