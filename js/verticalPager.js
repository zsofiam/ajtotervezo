$(document).ready(function() {    
    var visible = 3;
    var thumbQty = $('.thumbGallery__navigatorWrapper__item').length;                             //feltöltött képek száma

    $(window).resize(function(){
        setSelected(); 
    });
    $(window).resize(); 

    clearSelection();   // ez csak leszedi a kijelölést amit a kattintások okoznak, de ccs-ben is kezelve van

    if (thumbQty>visible) {                                                                                                                     
        $(document.body).on('click', '.navigate-thumb', function(){                 // a nyilakra kattintva hozzáadja illetve leveszi a pv-selected classt
            
            var dir = 'next';
            var ind = ($('.thumbGallery__navigatorWrapper__item').index($('.pv-selected')));    
            
            if ($(this).hasClass('btn--pervThumb-img')) {
                dir = 'prev';                                     
            }
            if (dir === 'next') {
                if ((ind + visible) !== thumbQty) {
                    $('.pv-selected').removeClass('pv-selected').next('img').addClass('pv-selected');              
                    moveThumbs();
                }
            }else{
                if (ind !== 0 ) {
                    $('.pv-selected').removeClass('pv-selected').prev('img').addClass('pv-selected');
                    moveThumbs();
                }
            }
            return false;
        });
    }  
});    

// beallitja melyik lathato
function setSelected(){

    $('.pv-selected').removeClass('pv-selected');
    $('.thumbGallery__navigatorWrapper__item').first().addClass('pv-selected');

    moveThumbs();
}

function moveThumbs(){
    $('img.thumbGallery__navigatorWrapper__item').hide();

    $('.pv-selected').show();
    $('.pv-selected').next('img').show();
    $('.pv-selected').next('img').next('img').show();

}

function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}