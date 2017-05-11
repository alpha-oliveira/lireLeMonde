(function () {
    const zen = document.querySelector('.btn_lecture_zen');
    const body =  document.querySelector('body');
    let script = document.createElement('script');
    
    const clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    zen.dispatchEvent(clickEvent);
   
    const injectedCode = `
    function checkDOMChange() {
            let form = document.querySelector('#offre_decouverte_form');
            let layers = document.querySelectorAll('.fond_overlay');
            if (layers && form) {
               layers.forEach(function(layer) {
                    layer.setAttribute('hidden', 'true');
               });
               form.setAttribute('hidden', 'true');
                return;
            }
      
    setTimeout(checkDOMChange, 100);
    }
 checkDOMChange();
`;
script.textContent= injectedCode;
body.appendChild(script);

})()