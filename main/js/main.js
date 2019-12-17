
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}



const showBackTopButton = () => {
    var btnBackTop = document.getElementById("id-backtop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackTop.style.visibility = "visible";
        btnBackTop.style.opacity = 0.8;

    } else {
        btnBackTop.style.visibility = "hidden";
        btnBackTop.style.opacity = 0;

    }
}

const initFontSelect = () => {
    const fontSelectDiv = document.getElementsByClassName('font-select')[0];
    const fontSelected = document.getElementsByClassName('font-select-selected')[0];
    const fontSelectedText = document.getElementsByClassName('font-select-selected-text')[0];


    const fontSelectDropdown = document.getElementsByClassName('font-select-dropdown')[0];



    fontSelected.onclick = () => {
        if (fontSelectDropdown.style.display == "none")
            fontSelectDropdown.style.display = "block";
        else if (fontSelectDropdown.style.display == "block")
            fontSelectDropdown.style.display = "none";
    }

    const fontSelectItem = document.getElementsByClassName('font-select-item');
    for (let i = 0; i < fontSelectItem.length; i++) {
        fontSelectItem[i].onclick = () => {

            fontSelectedText.text = fontSelectItem[i].innerText;
            fontSelectedText.style.fontFamily = fontSelectItem[i].style.fontFamily;
            fontSelectedText.setAttribute("value", fontSelectItem[i].innerText);
            fontSelectDropdown.style.display = "none";


        }

    }


}

const initNeonSignControl=()=>{
    initFontSelect();
    const neonSignShowcase = document.getElementById('neonSignShowcase');


    let size='small';
    let text='Neon Sign Sample';
    let font="font-family:'Pinyon Script', cursive;";
    let color='red';
    neonSignShowcase.setAttribute('class',`text-neon-${color} text-neon-${size}`);
    neonSignShowcase.innerText=text;
    neonSignShowcase.style=font;
  



    const neonSizeRadios = document.getElementsByName("size");
    neonSizeRadios.forEach((selectedSize) => {
        selectedSize.addEventListener('click', () => {
            if (selectedSize.checked) {
                console.log(selectedSize.value);
                size = selectedSize.value;
                neonSignShowcase.setAttribute('class', `text-neon-${color} text-neon-${size} `);
            }
        })

    })

    const neonTextPhrase = document.getElementById('customise-phrase-text');
    neonTextPhrase.oninput=()=>{
        neonSignShowcase.innerText=neonTextPhrase.value;
        if(neonTextPhrase.value===""){
            neonSignShowcase.innerText="Neon Sign Sample";
        }
    }
    const neonFontListItems = document.querySelectorAll('.font-select-item');
    neonFontListItems.forEach((selectedFont) => {
        selectedFont.addEventListener('click', () => {
            neonSignShowcase.style.fontFamily = selectedFont.style.fontFamily;
            font = selectedFont.style.fontFamily;
        })
    });
    const neonColorRadios = document.getElementsByName("color");
    neonColorRadios.forEach((selectedColor) => {
        selectedColor.addEventListener('click', () => {
            if (selectedColor.checked) {
                console.log(selectedColor.value);
                color = selectedColor.value;
                neonSignShowcase.setAttribute('class', `text-neon-${color} text-neon-${size} `);
            }
        })

    })
}


window.onload = () => {
  
    initNeonSignControl();
    smoothScroll();



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


    const naviItems = document.getElementsByClassName("navi-item");
    for (let i = 0; i < naviItems.length; i++) {
        naviItems[i].onclick = () => {
            naviCheckBox.checked = false;
        }
    }

}
window.onscroll = function () {
    showBackTopButton();

};
