document.write("<script type='text/javascript' src='js/zoomerang.js'></script>");

const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};


const showBackTopButton = () => {
    var btnBackTop = document.getElementById("id-backtop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackTop.style.visibility = "visible";
        btnBackTop.style.opacity = 0.8;
     
    } else {
        btnBackTop.style.visibility = "hidden";
        btnBackTop.style.opacity = 0;

    }
};


const zoomFunc = function () {
    Zoomerang
        .config({
            maxWidth: 600,
            maxHeight: 650,
            // bgColor: '#000',
            bgOpacity: .85,
            onOpen: openCallback,
            onClose: closeCallback,
            onBeforeOpen: beforeOpenCallback,
            onBeforeClose: beforeCloseCallback,
        })
        .listen(".dp-1-5");

    function openCallback(el) {
        console.log('zoomed in on: ');
        console.log(el)
    }

    function closeCallback(el) {
        console.log('zoomed out on: ');
        console.log(el)
    }

    function beforeOpenCallback(el) {
        console.log('on before zoomed in on:');
        console.log(el)
    }

    function beforeCloseCallback(el) {
        console.log('on before zoomed out on:');
        console.log(el)
    }
};

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
    fontSelectedText.innerText = fontSelectItem[0].innerText;
    fontSelectedText.style.fontFamily = fontSelectItem[0].style.fontFamily;

    for (let i = 0; i < fontSelectItem.length; i++) {
        fontSelectItem[i].onclick = () => {
            fontSelectedText.innerText = fontSelectItem[i].innerText;
            fontSelectedText.style.fontFamily = fontSelectItem[i].style.fontFamily;
            fontSelectDropdown.style.display = "none";
        }

    }

    //close dropdown when click outside selection
    document.onclick = function(e){
        if(e.target.getAttribute('class')!== 'font-select-selected'
        &&e.target.getAttribute('class')!== 'font-select-selected-text'
        &&e.target.getAttribute('class')!== 'font-select-icon'){
            fontSelectDropdown.style.display = 'none';
        }
     };

}

const initNeonSignControl = () => {
    initFontSelect();
    const neonSignShowcase = document.getElementById('neonSignShowcase');
    const neonSizeRadios = document.getElementsByName("size");
    const neonTextPhrase = document.getElementById('customise-phrase-text');
    const neonSelectedFont = document.getElementsByClassName('font-select-selected-text')[0];

    const neonFontListItems = document.querySelectorAll('.font-select-item');
    const neonColorRadios = document.getElementsByName("color");

    let size = 'small';
    neonSizeRadios.forEach((selectedSize) => {
        if (selectedSize.checked == true) {
            size = selectedSize.value;
        }
    }
    )
    let text = 'Neon Sign Sample';
    let font = neonSelectedFont.textContent;

    let color = 'red';
    neonColorRadios.forEach((selectedColor) => {
        if (selectedColor.checked == true) {
            color = selectedColor.value;
        }
    })

    neonSignShowcase.setAttribute('class', `text-neon-${color} text-neon-${size}`);
    neonSignShowcase.innerText = text;
    neonSignShowcase.style.fontFamily = font;




    neonSizeRadios.forEach((selectedSize) => {
        selectedSize.addEventListener('click', () => {
            if (selectedSize.checked) {
                console.log(selectedSize.value);
                size = selectedSize.value;
                neonSignShowcase.setAttribute('class', `text-neon-${color} text-neon-${size} `);
            }
        })

    })

    neonTextPhrase.oninput = () => {
        neonSignShowcase.innerText = neonTextPhrase.value;
        if (neonTextPhrase.value === "") {
            neonSignShowcase.innerText = "Neon Sign Sample";
        }
    }
    neonFontListItems.forEach((fontItem) => {
        fontItem.addEventListener('click', () => {
            neonSignShowcase.style.fontFamily = fontItem.style.fontFamily;
            font = fontItem.style.fontFamily;
        })
    });
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

    // display images zoom in and out
    zoomFunc();
};

window.onscroll = function() {
    showBackTopButton();

};
