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



    const naviItems = document.getElementsByClassName("navi-item");
    for (let i = 0; i < naviItems.length; i++) {
        naviItems[i].onclick = () => {
            naviCheckBox.checked = false;
        }
    }






    
    smoothScroll();

    // display images zoom in and out
    zoomFunc();
};

window.onscroll = function() {
    showBackTopButton();

};
