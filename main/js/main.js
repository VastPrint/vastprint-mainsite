const smoothScroll= ()=>{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

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

        let tmpClassName = `text-neon-${color} text-neon-${size} `
 

        neonSignShowcase.style.fontFamily = font;
        neonSignShowcase.setAttribute('class', tmpClassName);


        neonSignShowcase.innerText = text;


    }


    const naviCheckBox = document.getElementById('navi-toggle');
    function myFunction(x) {
        if (x.matches) {
            naviCheckBox.checked = false;
        } else {
            naviCheckBox.checked = false;
        }
    }
    const x = window.matchMedia("(max-width: 768px)");
    myFunction(x)
    x.addListener(myFunction);



    const naviItems=document.getElementsByClassName("navi-item");
    for(let i=0;i<naviItems.length;i++){
        naviItems[i].onclick= ()=>{
            naviCheckBox.checked=false;
        }
    }




    


    smoothScroll();
}
