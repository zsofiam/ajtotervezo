/*
copyright Introweb Kft.
author: Adam
*/

(function(){
	jQuery.fn.iwslider = function( options ) {
        
		var defaults = {
			width: 1366, // max width
			height: 768, // max height
			fitscreen: false, // full screen slider
			ease: 'easeOutQuad', // animation ease
			subEase: 'swing', // sub elements animation ease
			slideDelay: 5000, // auto play next slide delay
			subElementDelay: 1000, // sub element appear delay
			animationDuration:1000, // slide animation duration
			subDuration:500, // sub element animation diration
			autoplay: true, // enable slider auto play next slide
			defaultAnimation:'slideFromRight', // slides appear animation
			defaultSubAnimation:'FadeIn', // sub element appear animation
			firstSlide:1, // define first slide
			pauseOnHover:true, // pause auto play while mouse on slider
			navigation:true, // enable navigation arrows
			pagination:false, // enable pagination dots
			autoNavCss:true, // set navigation position automatically
			autoPagCss:true, // set pagination position automatically
			navHide:true, // hide navigation when mouse isn't on the slider
			pagHide:true, // hide pagination when mouse isn't on the slider
			useAnimInverse:false, // use defined animation inverse on previous element (for example: slideLeft = slideRight when click previous button)
			autoHeight:true, // set slider height automatically
			autoSubSizes:true, // set sub elements sizes automatically
			slices:15, // set number of slices at slice effect
			delayedSlices:true, // each slice came in after x milliseconds 
			delayedSlicesTime:100, // value of slice delay in milliseconds
			randomAnimation:false, // enable random animation on load next slide
			animationList: ['slideFromRight','slideFromLeft','slideFromBottom','slideFromTop','fadeIn','sliceUpDown','sliceLeftRight','sliceFromRight','sliceFromTop'], // list of the animations that randomly can be used
                        slideTitleBgColor: '#FFFFFF', //color of slide-title background
			slideTitleOpacity: '1', //opacity of slide-title
                        pagBotHov:0, // set pagination bottom position on hover
                        titlePosCenter:false // slider title is positioned center
                };

		var settings = $.extend( {}, defaults, options );

		return this.each(function() {
			var t=$(this);
			var io=[];
			var i=[];
			var a=0;
			var p=0;
			var timer=false;
			var resTimer=false;
			var nl='';
			var nr='';
			var size='big';
			var allowed=true;
			var invers = {
				slideFromLeft: 'slideFromRight',
				slideFromRight: 'slideFromLeft',
				slideFromTop: 'slideFromBottom',
				slideFromBottom: 'slideFromTop',
			};
			t.addClass('iw-slider');
			t.children().each(function(index){
				io[index]=$(this);
				$(this).remove();		
			});
			t.html('<div class="slider-wrapper"></div>');
			var w=t.find('.slider-wrapper');
			var reset=function(){
				t.find('.slider-item').each(function(){
                                    
					var bg=$(this).css('background-image');
					$(this).removeAttr('style');
					$(this).css('background-image',bg);
				});
                               
				t.find('.slider-item').not(i[a]).hide();
			};		
			var nxt=function(){
				a++;
				if(a>=io.length)
					a=0;
			};
			var prv=function(){
				a--;
				if(a<0)
					a=io.length-1;
			};
			var setNavPosition=function(){
				var nl=t.find('.nav-left-arrow');
				var nr=t.find('.nav-right-arrow');
				if(settings.autoNavCss){
					nl.css('top',Math.round(t.height()/2-nl.height()/2));
					nr.css('top',Math.round(t.height()/2-nr.height()/2));
					if(settings.navHide){
						nl.css({'opacity':0, 'left':-100});
						nr.css({'opacity':0, 'right':-100});
					}
				}
			};
			var setNav=function(){				
				t.append('<a class="nav-left-arrow" title="left" href="#"></a>');
				t.append('<a class="nav-right-arrow" title="right" href="#"></a>');
				if(!settings.autoNavCss)
					settings.navHide=false;
				setNavPosition();
			};
			var setPag=function(){
				t.append('<div class="pagination-container"></div>');
				for(var j=0; j<io.length; j++){
					var active='';
					if(a==j)
						active=' active';
					t.find('.pagination-container').append('<div class="pag-item slide-'+j+active+'"></div>');
				}
				t.find('.pagination').append();
				if(!settings.autoNavCss)
					settings.navHide=false;
				if(settings.navHide){
					t.find('.pagination-container').css({'opacity':'1', 'bottom':30});
				}
			};
			//Sub element animations
			var subFadeIn=function(se,es,at){
				eval("var se=t['"+se+"']");
				at=parseInt(at);
				se.fadeIn(at);
			}
			var subFromLeft=function(se,es,at){
				eval("var se=t['"+se+"']");
				var gp=se.css('left');
				at=parseInt(at);				
				if(gp=='auto'){
					gp=se.css('right');
					se.css('right',t.width());
					se.show();
					se.animate({'right':gp},at, es);
				} else {
					se.css('left','-100%');
					se.show();
					se.animate({'left':gp},at, es);
				}
			}
			var subFromRight=function(se,es,at){
				eval("var se=t['"+se+"']");
				var gp=se.css('right');
				at=parseInt(at);
				if(gp=='auto'){
					gp=se.css('left');
					se.css('left',t.width());
					se.show();
					se.animate({'left':gp},at, es);
				} else {
					se.css('right','-100%');
					se.show();
					se.animate({'right':gp},at, es);
				}
			}
			var subFromTop=function(se,es,at){
				eval("var se=t['"+se+"']");
				var gp=se.css('top');
				at=parseInt(at);				
				if(gp=='auto'){
					gp=se.css('bottom');
					se.css('bottom',t.height());
					se.show();
					se.animate({'bottom':gp},at, es);
				} else {
					se.css('top','-100%');
					se.show();
					se.animate({'top':gp},at, es);
				}
			}
			var subFromBottom=function(se,es,at){
				eval("var se=t['"+se+"']");
				var gp=se.css('bottom');
				at=parseInt(at);
				if(gp=='auto'){
					gp=se.css('top');
					se.css('top',t.height());
					se.show();
					se.animate({'top':gp},at, es);
				} else {
					se.css('bottom','-100%');
					se.show();
					se.animate({'bottom':gp},at, es);
				}
			}
			// end
                        var beforeSubAnim=function(ce,index,act,sset){

                            var fromBottom = (typeof ce.data('bottom') != 'undefined' ? ce.data('bottom') : 'auto');
                            var fromLeft = (typeof ce.data('left') != 'undefined' ? ce.data('left') : 'auto');
                            var fromRight = (typeof ce.data('right') != 'undefined' ? ce.data('right') : 'auto');
                            var fromTop = (typeof ce.data('top') != 'undefined' ? ce.data('top') : 'auto');
                            var seWidth = (typeof ce.data('width') != 'undefined' ? ce.data('width') : 'auto');
                            var seHeigh = (typeof ce.data('height') != 'undefined' ? ce.data('height') : 'auto');
                            var strTitleMargin = 0;                                                         
                            var seZIndex = (typeof ce.data('zindex') != 'undefined' ? ce.data('zindex') : 'auto'); //ABenedek, zIndex-ek atirva zindex-re H.Tomi
                            var anim = (typeof ce.data('animation') != 'undefined'?ce.data('animation'):settings.defaultSubAnimation);
                            var es = (typeof ce.data('ease') != 'undefined'?ce.data('ease'):settings.subEase);
                            var at = (typeof ce.data('duration') != 'undefined'?ce.data('duration'):settings.subDuration);
                            var slideTitleBgColor = (typeof ce.data('titlebgcolor') != 'undefined' ? ce.data('titlebgcolor') : settings.slideTitleBgColor);
                            var slideTitleOpacity = (typeof ce.data('titleopacity') != 'undefined' ? ce.data('titleopacity') : settings.slideTitleOpacity);
				
                            if(typeof t['sse'+act+'_'+index+'_created'] == 'undefined'){
                                if(!ce.hasClass('slide-url')){ 
                                //ABenedek, a slide kepenek linkelesehez. A feltetel eltavolitasaval az eredeti funckio visszakaphato
                                    t['sse'+act+'_'+index+'_created']=$('<div></div>');
                                    var nse = t['sse'+act+'_'+index+'_created'];

                                    nse.addClass(ce.attr('class'));
                                    nse.addClass('sub-item');

                                    //z-index berakva ide is H.Tomi

                                    nse.css({'top':fromTop,'bottom':fromBottom,'right':fromRight,'left':fromLeft,'position':'absolute','width':seWidth, 'height':seHeigh, 'background-color':slideTitleBgColor, 'opacity':slideTitleOpacity, 'z-index':5});

                                    nse.html(ce.html());
                                    i[act].append(nse);

                                    nse['op']=parseInt(nse.css('paddingTop'));
                                    nse['ofs']=parseInt(nse.css('font-size'));
                                    nse['om'] = parseInt(nse.css('marginTop'));     

    //                              nse['oh'] = parseInt(nse.height());
    //                              nse['ow'] = parseInt(nse.width()+2*nse['op']);
                                } else {    //ABenedek, a link-elem elkeszitesehez. Az else ag tartalma eltavolithato a funkcio kikapcsolasahoz
                                    var href = ce.data('href');
                                    var target = ce.data('target');
                                    t['sse'+act+'_'+index+'_created']=$('<a href="' + href + '" target="' + target + '"></a>');
                                    var nse = t['sse'+act+'_'+index+'_created'];
                                    nse.addClass(ce.attr('class'));
                                    nse.addClass('sub-item');
                                    //zIndex atirva z-index-re H.Tomi
                                    nse.css({'top':0,'bottom':0,'right':0,'left':0,'position':'absolute','width':'auto', 'height':'auto', 'z-index': '10'});
                                    nse.html(ce.html());

                                    i[act].append(nse);

                                    nse['op']=parseInt(nse.css('paddingTop'));
                                    nse['ofs']=parseInt(nse.css('font-size'));             
                                    nse['om'] = parseInt(nse.css('marginTop'));     

                                }   

                            //ABenedek end
                            }
                            if(settings.autoSubSizes)
                                    setSubSizes();
                            t['sse'+act+'_'+index+'_created'].hide();
                            t['sse'+act+'_'+index]=setTimeout(function(){eval('sub'+anim+'(\'sse'+act+'_'+index+'_created\',\''+es+'\',\''+at+'\');')},sset);
                        };
			var getChilds=function(donow, pdelay){
				if(typeof pdelay == 'undefined')
					pdelay=0;
				if(typeof donow == 'undefined')
					donow=false;
				io[a].children().each(function(index){
					var sset=0;
					if(!donow){
						sset=(typeof io[a].data('animduration') != 'undefined'?io[a].data('animduration'):settings.subElementDelay);
						sset=(typeof $(this).data('delay') != 'undefined'?$(this).data('delay'):sset);
					} else {
						sset=(typeof $(this).data('delay') != 'undefined'?$(this).data('delay')-(typeof io[a].data('animduration') != 'undefined'?io[a].data('animduration'):settings.subElementDelay):sset);
						if(sset<0)
							sset=0;
					}
					var ce=$(this);
					var act=a;
					beforeSubAnim(ce,index,act,sset+pdelay);			
				});
			};
			var clearTimers=function(){
				for(var j=0; j<io.length; j++){
					io[j].children().each(function(index){
						clearTimeout(t['sse'+j+'_'+index]);
					});
				}
			};
			var setActPag=function(){
				t.find('.pagination-container .pag-item').removeClass('active');
				t.find('.pagination-container').children().each(function(index){
					if(a==index)
						$(this).addClass('active');
				});
			};
			var beforeAnimation=function(pdelay){
				if(typeof pdelay == 'undefined')
					pdelay=0;
				for(var j=0; j<i.length; j++){
					if(typeof i[j]=='undefined' || j==p || j==a)
						continue;
					else
						i[j].hide();
				}
				getChilds(false, pdelay);		
			};
			var afterAnimation=function(delay){
                            setActPag();
                            setTimeout(function(){
                                reset();
                                allowed=true;
                                if(timer){
                                    //ABenedek start
                                    //eredeti: showItem('next');
                                    if(typeof(io[a].data('duration')) !== 'undefined'){
                                        showItem('next', io[a].data('duration'));
                                    } else {
                                        showItem('next');
                                    }
                                    //H.Tomi slider title is positioned center
                                    if (settings.titlePosCenter == true){
                                        setSubSizes();
                                    }
                                    //Abenedek end                      
                                }
                            }, delay + 50);
			}						
			//Slide animations
			var slideFromRight=function(es,ad){
				beforeAnimation();
				ad=parseInt(ad);
				t.find('.slider-item').css('position','absolute');
				i[p].css('left',0).animate({left:-(sw)},ad,es);
				i[a].css('left',sw).show().animate({left:0},ad,es);
				afterAnimation(ad);
			};
			var slideFromLeft=function(es,ad){
				beforeAnimation();
				ad=parseInt(ad);		
				$('.slider-item').css('position','absolute');
				i[p].css('left',0).show().animate({left:sw},ad,es);
				i[a].css('left',-sw).show().animate({left:0},ad,es);
				afterAnimation(ad);
			};
			var slideFromTop=function(es,ad){
				beforeAnimation();
				ad=parseInt(ad);
				t.find('.slider-item').css('position','absolute');
				i[p].css('top',0).animate({top:sh},ad,es);
				i[a].css('top',-sh).show().animate({top:0},ad,es);
				afterAnimation(ad);
			};
			var slideFromBottom=function(es,ad){
				beforeAnimation();
				ad=parseInt(ad);	
				t.find('.slider-item').css('position','absolute');
				i[p].css('top',0).animate({top:-sh},ad,es);
				i[a].css('top',sh).show().animate({top:0},ad,es);
				afterAnimation(ad);
			};
			var fadeIn=function(es,ad){
				beforeAnimation();
				ad=parseInt(ad);	
				t.find('.slider-item').css('position','absolute');
				i[p].css('top',0);
				i[a].css({'top':0,'opacity':0,'z-index':1}).show().animate({opacity:1},ad,es);
				afterAnimation(ad);
			};
			var sliceUpDown=function(es,ad){
				if(settings.delayedSlices){
					var dl=settings.delayedSlicesTime;	
					beforeAnimation((settings.slices-1)*dl);
				}else {
					beforeAnimation();
				}
				ad=parseInt(ad);
				t.find('.slider-item').css('position','absolute');
				var sl=$('<div class="slice-cont"></div>');
				sl.css({
					'height':'100%',
					'width':'100%',
					'position':'absolute',
					'top':0,
				});
				w.append(sl);
				var gbg=i[a].css('background-image');
				var slw=100/settings.slices;
				for(var ij=0; ij<settings.slices; ij++){
					var sd=$('<div class="slice-div"></div>');
					sd.css({
						'background-image':gbg,
						'background-position':(100/(settings.slices-1)*ij)+'% center',
						'background-size':'cover',
						'float':'left',
						'position':'relative',
						'top':(ij%2==0?'-100%':'100%'),
						'width':slw+'%',
						'height': '100%',
						
					});
					sl.append(sd);
				}
				i[a].hide();
				if(settings.delayedSlices){
					var sls=settings.slices;									
					$('.slice-div').each(function(index){
						$(this).delay(index*dl).animate({top:0},ad,es, function(){
							if(sls-1==index){
								i[p].hide();
								i[a].show();
								sl.remove();								
							}
						});
					});
					ad=ad+((sls-1)*dl);
				} else {
					$('.slice-div').animate({top:0},ad,es, function(){
						i[p].hide();
						i[a].show();
						sl.remove();
					});
				}
				afterAnimation(ad);
			}
			
			var sliceLeftRight=function(es,ad){
				if(settings.delayedSlices){
					var dl=settings.delayedSlicesTime;	
					beforeAnimation((settings.slices-1)*dl);
				}else {
					beforeAnimation();
				}
				ad=parseInt(ad);
				t.find('.slider-item').css('position','absolute');
				var sl=$('<div class="slice-cont"></div>');
				sl.css({
					'height':'100%',
					'width':'100%',
					'position':'absolute',
					'top':0,
				});
				w.append(sl);
				var gbg=i[a].css('background-image');
				var slh=100/settings.slices;
				for(var ij=0; ij<settings.slices; ij++){
					var sd=$('<div class="slice-div"></div>');
					sd.css({
						'background-image':gbg,
						'background-position':'center '+(100/(settings.slices-1)*ij)+'%',
						'background-size':'cover',
						'position':'relative',
						'left':(ij%2==0?'-100%':'100%'),
						'width':'100%',
						'height': slh+'%',
						
					});
					sl.append(sd);
				}
				i[a].hide();
				if(settings.delayedSlices){
					var sls=settings.slices;									
					$('.slice-div').each(function(index){
						$(this).delay(index*dl).animate({left:0},ad,es, function(){
							if(sls-1==index){
								i[p].hide();
								i[a].show();
								sl.remove();								
							}
						});
					});
					ad=ad+((sls-1)*dl);
				} else {
					$('.slice-div').animate({top:0},ad,es, function(){
						i[p].hide();
						i[a].show();
						sl.remove();
					});
				}
				afterAnimation(ad);
			}
			var sliceFromRight=function(es,ad){
				var dl=settings.delayedSlicesTime;	
				beforeAnimation((settings.slices-1)*dl);
				ad=parseInt(ad);
				t.find('.slider-item').css('position','absolute');
				var sl=$('<div class="slice-cont"></div>');
				sl.css({
					'height':'100%',
					'width':'100%',
					'position':'absolute',
					'top':0,
				});
				w.append(sl);
				var gbg=i[a].css('background-image');
				var slh=100/settings.slices;
				for(var ij=0; ij<settings.slices; ij++){
					var sd=$('<div class="slice-div"></div>');
					sd.css({
						'background-image':gbg,
						'background-position':'center '+(100/(settings.slices-1)*ij)+'%',
						'background-size':'cover',
						'position':'relative',
						'left':'100%',
						'width':'100%',
						'height': slh+'%',
						
					});
					sl.append(sd);
				}
				i[a].hide();
				var sls=settings.slices;									
				$('.slice-div').each(function(index){
					$(this).delay(index*dl).animate({left:0},ad,es, function(){
						if(sls-1==index){
							i[p].hide();
							i[a].show();
							sl.remove();								
						}
					});
				});
				ad=ad+((sls-1)*dl);
				afterAnimation(ad);
			}
			var sliceFromTop=function(es,ad){
				var dl=settings.delayedSlicesTime;	
				beforeAnimation((settings.slices-1)*dl);
				ad=parseInt(ad);
				t.find('.slider-item').css('position','absolute');
				var sl=$('<div class="slice-cont"></div>');
				sl.css({
					'height':'100%',
					'width':'100%',
					'position':'absolute',
					'top':0,
				});
				w.append(sl);
				var gbg=i[a].css('background-image');
				var slw=100/settings.slices;
				for(var ij=0; ij<settings.slices; ij++){
					var sd=$('<div class="slice-div"></div>');
					sd.css({
						'background-image':gbg,
						'background-position':(100/(settings.slices-1)*ij)+'% center',
						'background-size':'cover',
						'float':'left',
						'position':'relative',
						'top':'-100%',
						'width':slw+'%',
						'height': '100%',						
					});
					sl.append(sd);
				}
				i[a].hide();
				var sls=settings.slices;									
				$('.slice-div').each(function(index){
					$(this).delay(index*dl).animate({top:0},ad,es, function(){
						if(sls-1==index){
							i[p].hide();
							i[a].show();
							sl.remove();								
						}
					});
				});
				ad=ad+((sls-1)*dl);
				afterAnimation(ad);
			}
			// end
			var tf=function(f, tn){
				clearTimeout(timer);
				timer=setTimeout(function(){
					allowed=false;
					eval(f);
					if(tn==0)
						timer=false;
				},tn);
			};
			var sn=function(dirPrev){				
				var es=(typeof io[a].data('ease') != 'undefined'?io[a].data('ease'):settings.ease);
				var ad=(typeof io[a].data('animduration') != 'undefined'?io[a].data('animduration'):settings.animationDuration);
				var an=(typeof io[a].data('animation') != 'undefined'?io[a].data('animation'):settings.defaultAnimation);
				if(typeof dirPrev!='undefined' && dirPrev && settings.useAnimInverse){
					eval('var newan=invers.'+an);
					if(typeof newan!='undefined')
						an=newan;
				}
				if(settings.randomAnimation){
					var min=0;
					var max=settings.animationList.length;
					var rand=Math.floor(Math.random() * (max - min)) + min;
					an=settings.animationList[rand];
				}
				an+='("'+es+'","'+ad+'")';		
				if(typeof i[a] != 'undefined'){
					eval(an);
				} else if(io[a].data('type')=='image'){
					var sl=$('<div class="slider-item"><img src="'+io[a].data('src')+'" /></div>');
					sl.children('img').load(function(){
						$(this).remove();
						sl=$('<div class="slider-item"></div>');
						sl.css('background-image','url("'+io[a].data('src')+'")');
						i[a]=sl;
						w.append(i[a]);
						eval(an);
					});
				} 
			};		
			var setSubSizes=function(itf){
                            $('.slider-item').each(function(index){
                                var pindex=index;
                                $(this).find('.sub-item').each(function(index){
                                    var perc=sw/settings.width;
                                    var el=t['sse'+pindex+'_'+index+'_created'];
                                    if(typeof el != 'undefined'){
                                        // el.height(Math.ceil(el['oh']*perc)).width(Math.ceil(el['ow']*perc));
                                        el.css({
                                            'margin':Math.floor(el['om']*perc),
                                            /*'padding':Math.floor(el['op']*perc),*/
                                            'font-size':Math.floor(el['ofs']*perc),
                                        });

                                    }
                                    //H.Tomi slider title is positioned center
                                    if (settings.titlePosCenter == true){
                                        subItem = $(this);
                                        fullHeight = subItem.outerHeight();
                                        fullWidth = subItem.outerWidth();  
                                        halfTitleWidth = Math.round(fullWidth/2);
                                        halfTitleHeight = Math.round(fullHeight/2);
                                        strTitleMarginTop = (-halfTitleHeight)+'px';
                                        strTitleMarginLeft = (-halfTitleWidth)+'px';
                                        strTitleMargin = strTitleMarginTop+' 0'+' 0 '+strTitleMarginLeft;
                                        subItem.css({'margin':strTitleMargin});
                                    }                                            
                                });
                            });
                            if(typeof itf == 'undefined'){
                                setSubSizes(true);
                            }
			};

			var setSizes = function(){			
				var iwidth=t.parent().width();
				if(settings.autoHeight)
					sh=Math.round((settings.width>iwidth?(settings.height*(iwidth/settings.width)):settings.height));
				else
					sh=settings.height;
				if(settings.fitscreen)
					sh=$(window).height();
				t.height(sh);
				w.height(sh);
				sw=(settings.width>iwidth?iwidth:settings.width);
				if(settings.fitscreen)
					sw=$(window).width();
				t.width(sw);
				w.width(sw);
				if(sw>iwidth)
					setSizes();
				if(sw<iwidth && sw<settings.width){
					sw=iwidth;
					t.width(sw);
					w.width(sw);
				}
				if(settings.autoSubSizes)
					setSubSizes();
				if(settings.navigation)
					setNavPosition();
			};
			var init=function(){
				allowed=false;
				a=settings.firstSlide-1;
				setSizes();                             
				if(settings.navigation)
					setNav();
				if(settings.pagination)
					setPag();
				if(io[a].data('type')=='image'){

                    var currentdate = new Date();
//                console.log(currentdate.getSeconds());
					var sl=$('<div class="slider-item"><img src="'+io[a].data('src')+'" /></div>');
					sl.children('img').load(function(){
						$(this).remove();
						sl=$('<div class="slider-item"></div>');
						sl.css('background-image','url("'+io[a].data('src')+'")');
						i[a]=sl;
						w.html(i[a]);
						getChilds(true);
						allowed=true;
						if(settings.autoplay){
                            //ABenedek
                            //Eredeti:
                            //showItem('next');
                            if(typeof(io[a].data('duration')) !== 'undefined'){
                                showItem('next', io[a].data('duration'));
                            } else {
                                showItem('next');
                            }
                            //ABenedek end
						};
						setSizes();
					}); 
				}
			};
            
			var showItem=function(item, tn, dirPrev){
				if(typeof tn=='undefined')
					tn=(typeof io[p].data('duration') != 'undefined'?io[p].data('duration'):settings.slideDelay);
				if(typeof dirPrev=='undefined')
					dirPrev=false;
				clearTimeout(timer);
				timer = setTimeout(function(){
					if(allowed){
						allowed=false;
						p=a;
						if(item=='next')
							nxt();
						else if(item=='prev')
							prv();					
						else
							a=parseInt(item);
						if(tn==0)
							timer=false;
						sn(dirPrev);
                                                //H.Tomi slider title is positioned center
                                                if (settings.titlePosCenter == true){
                                                    setSubSizes();
                                                }
					}					
				}, tn);
			};
			init();
			$(window).on('resize', function(){		
				setSizes();
			});

			t.hover(function(){
				if(settings.pauseOnHover && settings.autoplay){
					clearTimeout(timer);					
					timer=false;
				}
				if(settings.navHide){
					t.find('.nav-left-arrow').stop().animate({'left':0, 'opacity':0.5},250);
					t.find('.nav-right-arrow').stop().animate({'right':0, 'opacity':0.5},250);
				}
				if(settings.pagHide){
                    t.find('.pagination-container').stop().animate({'bottom':settings.pagBotHov, 'opacity':1},250);
				}
					
			},function(){
				if(settings.pauseOnHover && settings.autoplay){
					if(!allowed){
						var ad=(typeof io[a].data('animduration') != 'undefined'?io[a].data('animduration'):settings.animationDuration);
						timer=setTimeout(function(){
							showItem('next');
						},parseInt(ad));
					} else {
						showItem('next');
					}
				}
				if(settings.navHide){
					t.find('.nav-left-arrow').stop().animate({'left':-100, 'opacity':0},250);
					t.find('.nav-right-arrow').stop().animate({'right':-100, 'opacity':0},250);
				}
				if(settings.pagHide){
					t.find('.pagination-container').stop().animate({'bottom':-40, 'opacity':0},250);
				}
			});
			t.find('a.nav-left-arrow, a.nav-right-arrow').on('click', function(){
				clearTimeout(timer);
				timer=false;
				if(allowed){
					if($(this).hasClass('nav-left-arrow')){
						showItem('prev', 0, true);
					} else {
						showItem('next', 0);
					}
                                        
				}
				return false;
			});
			t.find('.pag-item').on('click', function(){
				if($(this).hasClass('active') || !allowed)
					return false;
				var itn=$(this).attr('class')[$(this).attr('class').search(/\d/)];
				showItem(itn, 0);
                                
			});
		});
	};
})(jQuery)