window.onload = () => {
    const neonSizeRadio = document.getElementsByName("size");
    const neonTextPhrase = document.getElementById('customise-phrase-text');
    const neonFontSel = document.getElementById("customise-font-sel");
    const neonColorRadio = document.getElementsByName("color");

    const neonSignShowcase = document.getElementById('neonSignShowcase');

    const neonSubmitBtn = document.getElementById('try-btn');
    neonSubmitBtn.onclick = () => {
        alert(neonSignShowcase.innerText);

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

        neonSignShowcase.style.fontSize = size;
        neonSignShowcase.style.fontFamily = font;
        neonSignShowcase.style.color = color;
        neonSignShowcase.innerText = text;
    }
}