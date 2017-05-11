(function () {
    const zen = document.querySelector('.btn_lecture_zen');
    const clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    zen.dispatchEvent(clickEvent);
    checkDOMChange();

    function checkDOMChange() {
        
            let layers = document.querySelectorAll('.fond_overlay');
            if (layers) {
               layers.forEach(function(layer) {
                    layer.setAttribute('hidden', 'true');
               });
               document.querySelector('#offre_decouverte_form').setAttribute('hidden', 'true');
                return;
            }
      
    setTimeout(checkDOMChange, 100);
    }

})()