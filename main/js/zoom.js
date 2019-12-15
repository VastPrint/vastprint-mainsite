document.write("<script type='text/javascript' src='js/zoomerang.js'></script>");

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
    zoomFunc()
};