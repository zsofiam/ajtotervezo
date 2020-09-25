var respWidth = 472;                        // itt adod meg mekkora szelesseg felett allitsuk a magassagot, ez kb a mediaquery-18, de kimerheted pontosan
var elem1 = '.baseForm .formItem.payForms .payForms__item .checkbox-text';           // annak az elemnek a class-ja, amelyiknek a magassagat szeretnenk beallitani, kulon valtozoba
var elem2 ='.slickSlider__itemWrapper .slickSlider__item__title';

// a fuggveny bemeno parametere annak az elemnek a class-ja, amelyiknek a magassagat szeretnenk beallitani (itt nem kell modositani)
function resizeGrid(htmlClass){
    if ($(htmlClass).length>0){
        if ($(window).width() > respWidth){
            var h=0;
            $(htmlClass).removeAttr('style');	    
            $(htmlClass).each(function(){		
                if($(this).height()>h){
                   h=$(this).height();  
                }
            });    
            $(htmlClass).height(h);
        }else{
            // ez az alap helyzet
            $(htmlClass).css({'height':'auto'});   
        }
    }
}

// az oldal betoltesekor 
$(document).ready(function(){   
    //itt hivod meg a fuggvenyt a megfelelo elemre
    setTimeout(function(){ 
        resizeGrid(elem1);
        resizeGrid(elem2);
    }, 50);
});

// atmeretezeskor ujra futtatjuk, hogy tudjuk mekkora a kepernyo szelessege
$(window).resize(function(){
    //itt hivod meg a fuggvenyt a megfelelo elemre 
    setTimeout(function(){ 
        resizeGrid(elem1);
        resizeGrid(elem2);
    }, 500);
});