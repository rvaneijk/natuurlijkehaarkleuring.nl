// Grid

document.createElement("section");
document.createElement("header");
document.createElement("hgroup");
document.createElement("address");
document.createElement("main");
document.createElement("nav");
document.createElement("article");
document.createElement("aside");
document.createElement("footer");

var windowwidth = $(window).width();
var windowheight = $(window).height();

function isMobile(){
	return navigator.userAgent.match(/(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i);
}


	/* Contentnavi */
	function testimonialsPrevNextClass () {
		if($('.testimonials').length) {
			$(".portraitbild").removeClass('prev').removeClass('next');
			$(".portraitbild.aktiv").prev().addClass('prev');
			$(".portraitbild.aktiv").next().addClass('next');
		}
	};

	/* Personalien aktiv zuweisen */
	function personalienID () {
		$(".personalien").removeClass('aktiv');
		var myid = $(".portraitbild.aktiv").attr("id");
		$("#" + myid + ".personalien").addClass("aktiv");
	};


	/* Erstes Elemnt entfernen und hinten anfügen */
	function first_elem_remove () {
		$('.portraitcontainer .holder .portraitbild:first').clone().appendTo( ".portraitcontainer .holder" ).addClass("come").delay(50).animate({width: 300}, 900, function() {
			$(this).removeClass('come').removeAttr('style');
		});
		$('.portraitcontainer .holder .portraitbild:first').addClass("go").delay(50).animate({width: 0}, 900, function() {
			$(this).remove();
			slider_set_portraits = false;
		});
	};

	/* Erstes Elemnt entfernen und hinten anfügen */
	function last_elem_remove () {
		$('.portraitcontainer .holder .portraitbild:last').clone().prependTo( ".portraitcontainer .holder" ).addClass("come").delay(50).animate({width: 300}, 900, function() {
			$(this).removeClass('come').removeAttr('style');
		});
		$('.portraitcontainer .holder .portraitbild:last').addClass("go").delay(50).animate({width: 0}, 900, function() {
			$(this).remove();
			slider_set_portraits = false;
		});
	};


	/* Portraits Pfeilklick */
	var slider_set_portraits;

	function slidePortraitNext () {
		var $active = $('.portraitcontainer .portraitbild.aktiv');
		if ($active.length == 0) {
			$active = $('.portraitcontainer .portraitbild:last');
		}
		if ($active.next().length !=0) {
			var $next = $active.next();
		} else {
			var $next = $('.portraitcontainer .portraitbild:first');
		}

		$active.removeClass('aktiv');
		$next.addClass('aktiv');
		testimonialsPrevNextClass();
		personalienID();
		first_elem_remove();
	}

	function slidePortraitBack () {
		var $active = $('.portraitcontainer .portraitbild.aktiv');
		if ($active.length == 0) {
			$active = $('.portraitcontainer .portraitbild:first');
		}
		if ($active.prev().length !=0) {
			var $next = $active.prev();
		} else {
			var $next = $('.portraitcontainer .portraitbild:last');
		}

		$active.removeClass('aktiv');
		$next.addClass('aktiv');
		testimonialsPrevNextClass();
		personalienID();
		last_elem_remove();
	}


	if(isMobile()){
	} else {
		testimonialintervall = setInterval( "slidePortraitNext()", 3000);
	}


	$(document).on("click", ".testimonials .button_next", function() {
		if (!slider_set_portraits) {
			slider_set_portraits = true;
			slidePortraitNext();
			if(isMobile()){
			} else {
				clearInterval(testimonialintervall);
			}
		}
		//aktivpruefungPortrait();
	});
	$(document).on("click", ".testimonials .button_back", function() {
		if (!slider_set_portraits) {
			slider_set_portraits = true;
			slidePortraitBack();
			if(isMobile()){
			} else {
				clearInterval(testimonialintervall);
			}
		}
		//aktivpruefungPortrait();
	});


function slideSwitch () {
	$( ".slideshow" ).each(function() {
		var $active = $(this).find('.slide.active');

		if ($active.length == 0) {
			$active = $(this).find('.slide:last');
		}
		if ($active.next().length !=0) {
			var $next = $active.next();
		} else {
			var $next = $(this).find('.slide:first');
		}

		$active.addClass('last-active').animate({opacity: 0.0}, 300);

		$next.css({top: 40 + "px", opacity: 0.0})
			.addClass('active')
			.animate({top: 0 + "px", opacity: 1.0}, 500, function() {
				$active.removeClass('active last-active');
			});
	});
}


function classintroslider () {
	$( ".angebottextslider" ).each(function() {
		var $aktiv = $(this).find('span.active');

		if ($aktiv.length == 0) {
			$aktiv = $(this).find('span:last');
		}
		if ($aktiv.next().length !=0) {
			var $next = $aktiv.next();
		} else {
			var $next = $(this).find('span:first');
		}

		$aktiv.addClass('last-active').animate({opacity: 0.0}, 300);

		$next.css({left: 140 + "px", opacity: 0.0})
			.addClass('active')
			.animate({left: 0 + "px", opacity: 1.0}, 500, function() {
				$aktiv.removeClass('active last-active');
			});
	});
}


$(function() {

	if(isMobile()){
		//alert("Es handelt sich um ein mobiles Gerät");
		$("html").addClass("isMobile");
		//$("video").remove();
		//$("#footer_video").remove();
		$(".hovertext").remove();
		$(".bgBild").remove();
		$('#blub').addClass("bg_aktiv");
		setViewport();
		//hack to disable dashjs-player on mobile
		if(!!document.getElementById("introvideo")){document.getElementById("introvideo").remove();}
		if(!!document.getElementById("footer_video")){document.getElementById("footer_video").remove();}
		if(!!document.getElementById("parallaxvideo")){document.getElementById("parallaxvideo").remove();}
	} else {
		//alert("Es handelt sich um kein mobiles Gerät");
			$("html").addClass("isNoMobile");
			if($('#parallaxvideo').length) {
				$('.parallaxbild').removeAttr("style");
			} else {
				$('#blub').addClass("bg_aktiv");
			}
			setInterval( "slideSwitch()", 2000);
	}

	// Viewport ersetzen
	function setViewport() {
		var windowwidth = $(window).width();
		if(windowwidth > 767) {
			viewport = document.querySelector("meta[name=viewport]");
			viewport.setAttribute('content', 'width=1200');
		}
	}

	/* Mobilmenu anzeigen */
	$(document).on("click", ".navibutton", function() {
		$(this).toggleClass("show");
		$("header").toggleClass("mobilshow");
	});


	if($('#kontaktformular').length) {
		$('#kontaktformular textarea').attr( "spellcheck", "false" );
		$('#kontaktformular textarea').attr( "rows", "" );
		$('#kontaktformular textarea').autosize();

		if(isMobile()){
			$("#kontaktformular textarea").eq(0).html("Hallo, ");
		} else {
			$("#kontaktformular textarea").eq(0).focus().html("Hallo, ");
		}
	}

	if($('textarea').length) {
		$('textarea').attr( "spellcheck", "false" );
		$('textarea').attr( "rows", "" );
	}

	if($('input.required').length) {
		$('input.required').attr( "spellcheck", "false" );
	}


	$( "input[type=radio]" ).each(function(index) {
		var myNumber = index+1;
			
		var radioValue = $(this).attr("value");
		var radioValueNumber = radioValue + "_" + myNumber;
		
		$(this).addClass("radio").attr("id",radioValueNumber);		
		$(this).after( "<label>" + radioValue + "</label>" ).after( "<label></label>" );
		$(this).parent().find("label").attr("for",radioValueNumber);
	});

	$( "input[type=checkbox]" ).each(function() {
		var checkboxValue = $(this).attr("value");

		$(this).addClass("checkbox").attr("id",checkboxValue);
		$(this).after( "<label></label>" );
		$(this).parent().find("label").attr("for",checkboxValue);
	});


	if($('.flexslider').length) {
		$('.flexslider').flexslider({
			animation: "fade",
			mousewheel: false,
			animationLoop: true,
			prevText : "",
			nextText : "",
			start: function(slider){
			  $('body').removeClass('loading');
			}
		});
	}


	if($('.swiper-container').length) {
		var swiper = [];
		$('.swiper-container').each(function(index){

			var $el = $(this);

			swiper[index] = $el.swiper({
				//Your options here:
				pagination: '.swiper-pagination',
				calculateHeight: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				pagination: $el.find('.swiper-pagination')[0],
				paginationClickable: true,
				roundLengths: true,
				speed: 600,
				onSlideChangeEnd: function(){
					 sliderheight();
    			}
			});

			$el.find('.prev-slide').on('click', function(){
				swiper[index].slidePrev();
			});

			$el.find('.next-slide').on('click', function(){
				swiper[index].slideNext();
			});

		});
	}

	function sliderheight() {
		var aktivheight = $('.universum  .swiper-slide-active .inhalt').height();
		$('.universum .swiper-container').css('height', aktivheight);
	};


	// Class Intro Timer
	var classIntrotimer = $.timer(function() {
		classintroslider();
	});
	classIntrotimer.set({ time : 9200, autostart : false });


	// Raumslider
	var count = 0;
	var raumslidetimer = $.timer(function() {
		++count
		if (count == "2" ) {
			raumslider();
		}
		if (count == "8" ) {
			raumslider2();
		}
		if (count == "23" ) {
			raumslider3();
		}
		if (count == "34" ) {
			raumslider4();
		}
		if (count == "44" ) {
			raumslider5();
		}
		if (count == "55" ) {
			raumslider6();
		}
		if (count == "78" ) {
			raumslider7();
		}
		if (count == "84" ) {
			count = 0
		}
		//console.log(count);
	});
	raumslidetimer.set({ time : 1000, autostart : false });

	
	function raumslider() {
		$(".raumslider .slide:nth-of-type(1)")
		.addClass('aktiv')
		.animate({opacity: 1.0}, 2000, function() {
			$(this).addClass('go')
			.animate({left: 0}, 1200, function() {
				$(this).removeClass('aktiv').removeClass('go');
			});
		});
	};
	function raumslider2() {
		$(".raumslider .slide:nth-of-type(2)")
		.addClass('aktiv')
		.animate({opacity: 1.0}, 2000, function() {
			$(this).addClass('go')
			.animate({left: 0}, 1200, function() {
				$(this).removeClass('aktiv').removeClass('go');
			});
		});
	};
	function raumslider3() {
		$(".raumslider .slide:nth-of-type(3)")
		.addClass('aktiv')
		.animate({opacity: 1.0}, 2000, function() {
			$(this).addClass('go')
			.animate({left: 0}, 1200, function() {
				$(this).removeClass('aktiv').removeClass('go');
			});
		});
	};
	function raumslider4() {
		$(".raumslider .slide:nth-of-type(4)")
		.addClass('aktiv')
		.animate({opacity: 1.0}, 2000, function() {
			$(this).addClass('go')
			.animate({left: 0}, 1200, function() {
				$(this).removeClass('aktiv').removeClass('go');
			});
		});
	};
	function raumslider5() {
		$(".raumslider .slide:nth-of-type(5)")
		.addClass('aktiv')
		.animate({opacity: 1.0}, 2000, function() {
			$(this).addClass('go')
			.animate({left: 0}, 1200, function() {
				$(this).removeClass('aktiv').removeClass('go');
			});
		});
	};
	function raumslider6() {
		$(".raumslider .slide:nth-of-type(6)")
		.addClass('aktiv')
		.animate({opacity: 1.0}, 2000, function() {
			$(this).addClass('go')
			.animate({left: 0}, 1200, function() {
				$(this).removeClass('aktiv').removeClass('go');
			});
		});
	};
	function raumslider7() {
		$(".raumslider .slide:nth-of-type(7)")
		.addClass('aktiv')
		.animate({opacity: 1.0}, 2000, function() {
			$(this).addClass('go')
			.animate({left: 0}, 1200, function() {
				$(this).removeClass('aktiv').removeClass('go');
			});
		});
	};


	if(isMobile()){
	} else {
		/* Textlinks Inhalte ausblenden */
		$(".intro_delia a").hover(function() {
			var windowheight = $(window).height();
			var myid = $(this).attr("id");
			var myWidth = $(this).width();
			var myPositionTop = $(this).offset().top-windowheight+50;
			var myPositionLeft = $(this).offset().left;
			var differenz = myWidth-570;
			var korrektur = differenz/2;

			//alert(Math.round(myPositionLeft));

			$(".logo_kwast, .intro_delia p, .intro_delia h2, #ankernavi, ul.zertifikate").toggleClass("hidden");

			$(".hovertext." + myid).css("margin-left", korrektur);
			$(".hovertext." + myid).css("top", Math.round(myPositionTop));
			$(".hovertext." + myid).css("left", Math.round(myPositionLeft));

			$(".hovertext." + myid).toggleClass("show");
			$(".bgBild." + myid).toggleClass("show");
		});


		/* Footer hover ausblenden */
		$("footer h2").hover(function() {
			$("#footerzusatz").toggleClass("hidden");
			$("#blub").toggleClass("hidden");
			$(".pfeil").toggleClass("hidden");
			$(".footervideo_aktiv").toggleClass("show");
			$("#ankernavi").toggleClass("hidden");
			$("#kwast").toggleClass("hidden");
		});
	}



	if(isMobile()){
		$(".preise_texttooltips .Auszeichnung a").click(function(event) {
			event.preventDefault();
			
			var myid = $(this).attr("id");
			var tooltipheight = $(".preise_texttooltip." + myid).height();
			var myWidth = $(this).width();
			var myPositionLeft = $(this).offset().left;
			var differenz = myWidth-280;
			var korrektur = differenz/2;
			
			if ($('.angebotcontainer.onDesktopshow').css('display') == 'none') {
				var myPositionTop = $(this).offset().top-tooltipheight-70;
			}
			else {
				var myPositionTop = $(this).offset().top-tooltipheight-50;
				$(".preise_texttooltip." + myid).css("margin-left", korrektur);
				$(".preise_texttooltip." + myid).css("left", Math.round(myPositionLeft));
			}
			
			$(".preise_texttooltip." + myid).css("top", Math.round(myPositionTop));
			if ($(".preise_texttooltip." + myid).hasClass('show')) {
				$(".preise_texttooltip." + myid).toggleClass("show");
			} else {
				$(".preise_texttooltip.show").removeClass("show");
				$(".preise_texttooltip." + myid).toggleClass("show");
			}
		});
	} else {	
		$(".preise_texttooltips .Auszeichnung a").hover(function() {
			var myid = $(this).attr("id");
			var tooltipheight = $(".preise_texttooltip." + myid).height();
			var myWidth = $(this).width();
			var myPositionTop = $(this).offset().top-tooltipheight-50;
			var myPositionLeft = $(this).offset().left;
			var differenz = myWidth-280;
			var korrektur = differenz/2;
			
			$(".preise_texttooltip." + myid).css("margin-left", korrektur);
			$(".preise_texttooltip." + myid).css("top", Math.round(myPositionTop));
			$(".preise_texttooltip." + myid).css("left", Math.round(myPositionLeft));

			$(".preise_texttooltip." + myid).toggleClass("show");
		});
		$(".preise_texttooltips .Auszeichnung a").click(function(event) {
			event.preventDefault();
		});
	}

	
	
	/* Anmeldeformular anzeigen */
	$(document).on("click", ".anmeldelink", function() {
		var myID = $(this).attr("rel");

		if(isMobile()){
			$(".formular_standard#" + myID).addClass("show").addClass("scroll").fadeIn(500);
			windowTop = $(window).scrollTop();
			$("#contentcontainer").css("top", -windowTop);
			$("body").addClass("mobil_ovhidden");
		} else {
			$(".formular_standard#" + myID).addClass("show");
			$("body").addClass("ovhidden");
		}
	});
		


	/* Anmeldeformular Probetraining Class anzeigen und attribute setzen  */
	$(document).on("click", ".probetraining_buchen .anmeldelink", function() {
		var myTanzstiel = $(this).parents('.lection').find('.tanzstil_name').html();
		var myday = $(this).parents('.wochentag').attr('day');
		var mydate = $(this).parents('.wochentag').attr('date');
		var mytime = $(this).parents('.lection').find('.zeit').html();
		
		$('.probetrainingform_name').html(myTanzstiel);
		$('.probetrainingform_tag').html(myday);
		$('.probetrainingform_datum').html(mydate);
		$('.probetrainingform_zeit').html(mytime);
		
		$('input.abotanzstiel').removeAttr('value').attr('value',myTanzstiel);
		$('input.abowochentag').removeAttr('value').attr('value',myday);
		$('input.abodatum').removeAttr('value').attr('value',mydate);
		$('input.abouhrzeit').removeAttr('value').attr('value',mytime);
		
		if(isMobile()){
		} else {
		}
	});


	/* Anmeldeformular Probetraining anzeigen und default Tanzstiel setzen  */
	$(document).on("click", "#anmelden .anmeldelink", function() {
		var myTanzstiel = $(this).parent().attr("id");

		if(isMobile()){
			$("select option[value='" + myTanzstiel +"']").prop('selected', true);
		} else {
			$("li[rel='" + myTanzstiel +"']").click();
		}
	});

	$(document).on("click", ".icon_close", function() {
		$(".formular_standard").removeClass("show");
		if(isMobile()){
			//alert(windowTop);
			$("#contentcontainer").css("top", 0);
			$("body").removeClass("mobil_ovhidden");
			$('html, body').stop().animate({
				scrollTop: windowTop
			}, 0, function() {
				$(".formular_standard").fadeOut(500);
			});
		} else {
			$("body").removeClass("ovhidden");
		}
	});


	/* Eventslider setze Scrollcontainer Css Width */
	function scrollcontainerWidth() {
		if($(".eventslider").length) {
			$(".eventslider .holder").css('width' , $(".containerWidth").width()+50);
		}

		if($(".angebotcontainer").length) {
			$(".angebotcontainer .holder").css('width' , $(".containerWidth").width()+50);
		}
	};




	var lastMousePosition;

	var angeboteKlick;

	function scrollVor() {
		var windowwidth = $(window).width();
		var containerWidth = $(".containerWidth").width()+50;
		var differenz = containerWidth - windowwidth

		if($(".eventslider").length) {
			$(".eventslider").animate({ scrollLeft: differenz }, 2500);
		}

		if($(".angebotcontainer").length) {
			$(".angebotcontainer").animate({ scrollLeft: differenz }, 2500);
		}
	};

	function sliderMousePositionBackNext() {
		if($("#intro_event").length) {
			$(document).mousemove(function(event){

				var mousePositionTop = event.pageY
				var mousePositionleft = event.pageX
				var windowwidth = $(window).width();

				var intro_event_height = $('#intro_event').height()+50;
				var intro_event_top = $('#intro_event').offset().top;
				var intro_event_bottom = intro_event_top+intro_event_height;
				var prozentwidth = windowwidth/100*16;




				if ((mousePositionTop > intro_event_top) && (mousePositionTop < intro_event_bottom)) {
					// wwenn Mausposition innerhalb Events ist (oben / unten)
					if (mousePositionleft < prozentwidth) {
						// wenn im linken Bereich
						if (lastMousePosition != "innerhalb") {
							$(".eventslider").animate({ scrollLeft: "0" }, 2500);
						}
						lastMousePosition = "innerhalb";
					}
					else if (mousePositionleft > windowwidth-prozentwidth) {
						// wenn im rechten Bereich
						if (lastMousePosition != "innerhalb") {
							scrollVor();
						}
						lastMousePosition = "innerhalb";
					}
					else {
						// wenn im Bereich Events, aber nicht links und rechts
						$(".eventslider").stop();
						lastMousePosition = "ausserhalb";
					}
				}
				else {
					// wenn Mausposition ausserhalb Events ist (oben / unten)
					$(".eventslider").stop();
					lastMousePosition = "ausserhalb";
				}


			});
		}
	}


	function angeboteSliderMousePositionBackNext() {
		if($(".angebotcontainer").length) {
			$(document).mousemove(function(event){

				var mousePositionTop = event.pageY
				var mousePositionleft = event.pageX
				var windowwidth = $(window).width();

				var angebotcontainer_height = $('.angebotcontainer').height();
				var angebotcontainer_top = $('.angebotcontainer').offset().top;
				var angebotcontainer_bottom = angebotcontainer_top+angebotcontainer_height;
				var prozentwidth = windowwidth/100*16;




				if ((mousePositionTop > angebotcontainer_top) && (mousePositionTop < angebotcontainer_bottom)) {
					// wwenn Mausposition innerhalb Events ist (oben / unten)
					if (mousePositionleft < prozentwidth) {
						// wenn im linken Bereich
						if (lastMousePosition != "innerhalb") {
							$(".angebotcontainer").animate({ scrollLeft: "0" }, 2500);
						}
						lastMousePosition = "innerhalb";
					}
					else if (mousePositionleft > windowwidth-prozentwidth) {
						// wenn im rechten Bereich
						if (lastMousePosition != "innerhalb") {
							scrollVor();
						}
						lastMousePosition = "innerhalb";
					}
					else {
						// wenn im Bereich Angebot, aber nicht links und rechts


						if (angeboteKlick != "aktiv") {
							$(".angebotcontainer").stop();
						}

						//$(".angebotcontainer").stop();
						lastMousePosition = "ausserhalb";
					}
				}
				else {
					// wenn Mausposition ausserhalb Angebot ist (oben / unten)
					if (angeboteKlick != "aktiv") {
						$(".angebotcontainer").stop();
					}
					lastMousePosition = "ausserhalb";
				}



			});
		}
	}


	/* Erstem Element show und aktiv geben */
	function firstElement() {
		$(".einblendbox:first-child").addClass("show").addClass("aktives_element");
	}

	function handleScrollTeaser() {
		$(function() {
			var windowheight = $(window).height();
			var $aktuellesElement = $(".einblendbox.aktives_element");


			/* Bei downscrollen */
			if($aktuellesElement.length) {
				var offsetAktuelles = $aktuellesElement.offset().top + $aktuellesElement.height(); // Unterkante(Ende) von Element
				// var offsetAktuelles = $aktuellesElement.offset().top; // Variante von Raffi - Oberkante(Anfang) von Element

				if($(this).scrollTop() + windowheight/5*4 >= offsetAktuelles) {
					if ($(".einblendbox:last-child").hasClass('aktives_element')) {
						/* Nichts mehr machen */
					} else {
						$aktuellesElement.next(".einblendbox").addClass('show').addClass('aktives_element');
						$aktuellesElement.removeClass("aktives_element");
						handleScrollTeaser();
					}
				}
			} // close element exists


			var $aktuellesElementDavor = $aktuellesElement.prev();

			/* Bei upscrollen */
			if($aktuellesElementDavor.length) {
				var offsetAktuellesDavor = $aktuellesElementDavor.offset().top + $aktuellesElementDavor.height(); // Unterkante(Ende) von Element
				// var offsetAktuelles = $aktuellesElement.offset().top; // Variante von Raffi - Oberkante(Anfang) von Element

				if($(this).scrollTop() + windowheight/5*4 <= offsetAktuellesDavor) {
					$aktuellesElementDavor.addClass('aktives_element');
					$aktuellesElementDavor.next(".einblendbox").removeClass('show').removeClass('aktives_element');
				}
			} // close element exists

		});
	}


	introHeight();

	$(window).load(function() {
		setTimeout(function(){
			$("#loading .dancer").removeClass('show');
		}, 1500);
		setTimeout(show, 2500);
	})

	function show() {
		/*if($("#introvideo").length) {
    		$("#introvideo").get(0).play();
		}*/
		scrollcontainerWidth();
		contentnavInhaltHeight();
		testimonialsPrevNextClass();

		artistLoads();
		angebotLoads();
		tabLoads();
		kurseLoad();
		sliderheight();

		if(isMobile()){ // Wenn es sich um mobilgerät handelt

		} else { // Wenn es sich um kein mobilgerät handelt
			firstElement();
			handleScrollTeaser();
			sliderMousePositionBackNext();
			angeboteSliderMousePositionBackNext();
			videoCenter();
			parallaxvideoCenter();
			playPauseHeaderVideo();
			playPauseFooterVideo();
			playPauseParallaxVideo();
			parralaxbild();
			parralaxText();
			showStayTuned();
			ankernaviScroll();
			selectstyles();
		}

		$('#loading').fadeOut(600);
		$('header, .logoholder').addClass("show");
	};


	/* Live anpassungen bei Resize */
	$(window).resize(function() {
		introHeight();
		sliderheight();

		if(isMobile()){ // Wenn es sich um mobilgerät handelt

		} else { // Wenn es sich um kein mobilgerät handelt
			videoCenter();
			parallaxvideoCenter();
			parralaxbild();
			parralaxText();
			handleScrollTeaser();
			ankernaviScroll();
		}
	});

	$(window).scroll(function() {
		if(isMobile()){ // Wenn es sich um mobilgerät handelt

		} else { // Wenn es sich um kein mobilgerät handelt
			playPauseHeaderVideo();
			playPauseFooterVideo();
			playPauseParallaxVideo();
			showStayTuned();
			parralaxbild();
			parralaxText();
			handleScrollTeaser();
			ankernaviScroll();
		}
	});
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
	function randomLoader() {
		var randomdancer = 1+ Math.floor(Math.random() *5);
		$("#loading .dancer:nth-of-type(" + randomdancer + ")").addClass('show');
	};
	randomLoader();



	/* Startvideo zentrieren*/
	function videoCenter() {
		if($("#introvideo").length) {

			// Messe VideoRohdaten
			var vid = document.getElementById("introvideo");
			var videowert = vid.videoWidth/vid.videoHeight

			var windowwidth = $(window).width();
			var windowheight = $(window).height();
			var windowwert = windowwidth/windowheight;

			var introvideowidth = $("#introvideo").width();
			var differenz = windowwidth - introvideowidth
			var centerkorrektur = differenz/2

			if (videowert > windowwert) {
				$("#introvideo").css('margin-left' , centerkorrektur);
				$("#introvideo, .videobild video").removeClass('heightauto');
			} else {
				$("#introvideo").css('margin-left' , 0);
				$("#introvideo, .videobild video").addClass('heightauto');
			}
		}
	};




	/* Startvideo zentrieren*/
	function parallaxvideoCenter() {
		var windowwidth = $(window).width();
		var introvideowidth = $("#parallaxvideo").width();
		var differenz = windowwidth - introvideowidth
		var centerkorrektur = differenz/2

		if (introvideowidth > windowwidth) {
			$("#parallaxvideo").css('margin-left' , centerkorrektur);
		} else {
			$("#parallaxvideo").css('margin-left' , 0);
		}
	};

	/* Introheder Höhe 100% */
	function introHeight() {
		var windowheight = $(window).height();
		$("#intro_header").css('height' , windowheight);
	};







// ------------------------------------------------------------------------------------------------------------------------------------------------ //


	/* Logo kwast einblenden und Secondnavi einblenden */


	$(window).scroll(function (event) {

		var top = $('html').offset().top;
		var secondSection = $('.einblendbox:nth-of-type(2)').offset().top;


		var y = $(this).scrollTop()-80;



		/* kwast Ein- und Ausblenden */
		if (y > top) {
			$('#kwast').addClass('show'); $('#logo').addClass('hidden'); $('header').removeClass('show');
		} else {
			$('#kwast').removeClass('show'); $('#logo').removeClass('hidden'); $('header').addClass('show');
		}

		if(isMobile()){ // Wenn es sich um mobilgerät handelt
		} else { // Wenn es sich um kein mobilgerät handelt
			var z = $(this).scrollTop()+200;
			var x = $(this).scrollTop()+3;

			/* 2. Stufe Ankernavi Ein- und Ausblenden */
			if (x > secondSection) {
				$('#ankernavi').addClass('show');
			} else {
				$('#ankernavi').removeClass('show');
			}

			/* Introheader */
			if (z > secondSection) {
				$('#intro_header').removeClass('show');
			} else {
				$('#intro_header').addClass('show');
			}
		}
	});





	//setInterval( "classintroslider()", 9125);


	function playPauseFooterVideo() {
		if($("#footer_video").length) {
			var windowheight = $(window).height();
			var footerTop = $('footer').offset().top-100;
			var windowTop = $(window).scrollTop()+windowheight;

			if (windowTop > footerTop) {
				$("#footVidaktiv").get(0).play();
				$("#footVidinaktiv").get(0).play();
			} else {
				$("#footVidaktiv").get(0).pause();
				$("#footVidinaktiv").get(0).pause();
			}
		}
	}
	function playPauseHeaderVideo() {
		if($("#introvideo").length) {
			var windowheight = $(window).height();
			var windowTop = $(window).scrollTop()-100;

			if (windowheight > windowTop) {
				$("#introvideo").get(0).play();
				classIntrotimer.play();
			} else {
				$("#introvideo").get(0).pause();
				classIntrotimer.pause();
			}
		}
	}



	function playPauseParallaxVideo() {
		if($("#parallaxvideo").length) {
			var windowheight = $(window).height();
			var parallaxHeight = $('.parallaxbild').height();
			var parallaxTop = $('.parallaxbild').offset().top-20;
			var parallaxBottom = $('.parallaxbild').offset().top+parallaxHeight;
			var windowBottom = $(window).scrollTop()+windowheight;
			var windowTop = $(window).scrollTop()-20;

			if ((windowBottom > parallaxTop) && (windowTop < parallaxBottom)) {
				$("#parallaxvideo").get(0).play();
				raumslidetimer.play();
			}
			else {
				$("#parallaxvideo").get(0).pause();
				raumslidetimer.pause();
			}
			// Parallax-Video z-index
			if (windowTop > parallaxBottom) {
				$("#parallaxvideo").removeClass("zindex");
			}
			else {
				$("#parallaxvideo").addClass("zindex");
			}
		}
	}




	function showStayTuned() {
		if($("#bottomnav").length) {
			var windowheight = $(window).height();
			var bottomnavTop = $('#bottomnav').offset().top+30;
			var windowTop = $(window).scrollTop()+windowheight;

			if (windowTop > bottomnavTop) {
				$(".social_intro").addClass('show');
			} else {
				$(".social_intro").removeClass('show');
			}
		}
	}







	/* 2. Stufe Klick Ankernavi Scroll to ID */
	$('#ankernavi a, .ankerlink a, a.ankerlink').click(function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 800);

		event.preventDefault();
	});







	/* Secondnavi Aktiv Handler */
	function ankernaviScroll () {
		if($('#ankernavi').length) {
			if($('.einblendbox:nth-of-type(3)').length) {
				var dritteSection = $('.einblendbox:nth-of-type(3)').offset().top;
			}
			if($('.einblendbox:nth-of-type(4)').length) {
				var vierteSection = $('.einblendbox:nth-of-type(4)').offset().top;
			}
			if($('.einblendbox:nth-of-type(5)').length) {
				var fuenfteSection = $('.einblendbox:nth-of-type(5)').offset().top;
			}
			if($('.einblendbox:nth-of-type(6)').length) {
				var sechsteSection = $('.einblendbox:nth-of-type(6)').offset().top;
			}
			if($('.einblendbox:nth-of-type(7)').length) {
				var siebenteSection = $('.einblendbox:nth-of-type(7)').offset().top;
			}
			if($('.einblendbox:nth-of-type(8)').length) {
				var achsteSection = $('.einblendbox:nth-of-type(8)').offset().top;
			}
			if($('.einblendbox:nth-of-type(9)').length) {
				var neunteSection = $('.einblendbox:nth-of-type(9)').offset().top;
			}


			var x = $(this).scrollTop()+3;

			/* 2. Navi Aktiv */
			if (x > dritteSection) {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(2)').addClass('aktiv');
			} else {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(1)').addClass('aktiv');
			}

			/* 3. Navi Aktiv */
			if (x > vierteSection) {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(3)').addClass('aktiv');
			}

			/* 4. Navi Aktiv */
			if (x > fuenfteSection) {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(4)').addClass('aktiv');
			}

			/* 5. Navi Aktiv */
			if (x > sechsteSection) {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(4)').addClass('aktiv');
			}

			/* 6. Navi Aktiv */
			if (x > siebenteSection) {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(5)').addClass('aktiv');
			}

			/* 7. Navi Aktiv */
			if (x > achsteSection) {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(5)').addClass('aktiv');
			}

			/* 8. Navi Aktiv */
			if (x > neunteSection) {
				$('#ankernavi li').removeClass('aktiv'); $('#ankernavi li:nth-of-type(6)').addClass('aktiv');
			}
		}
	}





	/* kwast Klick Scroll Top */
	$("#kwast").click(function() {
		$('html, body').stop().animate({
			scrollTop: ($('body').offset().top)-0}, 800 , function(){/*ende*/}
		);
	});



// ------------------------------------------------------------------------------------------------------------------------------------------------ //


	/* Video am Ende Posterbild einblenden */
	/*var video=$('.peopleslider video').get(0);
	video.addEventListener('ended',function(){
		video.load();
	});*/





	/* Tänzerklick bei load */
	function artistLoads () {
		if($('.taenzer').length) {
			var displaystatus = $('.peopleslider.onDesktopshow').css('display');
			var aktiveArtist = location.hash.substring(1);

			if ($('.peopleslider.onDesktopshow').css('display') == 'none')
			{
				$('.taenzer_mobil a').each(function(){
					if ($(this).attr('class') == aktiveArtist) {
						$(this).click();
						$('html, body').stop().animate({
							scrollTop: ($('.taenzer_mobil a.' + aktiveArtist).offset().top)-70
						}, 10);
					}
				});
			}
			else {
				$('.taenzer a').each(function(){
					if ($(this).attr('class') == aktiveArtist) {
						$(this).click();
					}
				});
			}
		}
	}
	
	
	
	/* Kurs bei load */
	function kurseLoad () {
		if($('#kursliste').length) {
			var aktivKurs = location.hash.substring(1);

			$('.kursnummer').each(function(){
				if ($(this).html() == aktivKurs) {
					$(this).parents('.kurs').find('.kursheader').click();
					/*$('html, body').stop().animate({
						scrollTop: ($(this).parents('.kurs').offset().top)-140
					}, 1000);*/
				}
			});
		}
	}
	
	




	/* Tänzer Klick Scroll Top */
	$(".foundercontainer a, .coaches_container a, .showgroupcontainer a").click(function() {
		var myid = $(this).attr("class");

		$('html, body').stop().animate({
			scrollTop: ($('body').offset().top)-0}, 800 , function(){/*ende*/}
		);

		/* Falls Default video noch aktiv ist */
		if($('.peopleintro').length) {
			$(".peopleintro, #introvideo, .pfeil_down").addClass("hidden");
			$(".peopleslider").addClass("show");
			$("#intro_header").css( "background", "");


			if(isMobile()){ // Wenn es sich um mobilgerät handelt
				$(".button_back, .button_next").removeClass("hidden");
				$(".peopleintro").remove();
			} else { // Wenn es sich um kein mobilgerät handelt
				$('#introvideo').animate({top: 0}, 500, function() {
					$(this).find('source').remove();
					$(".peopleintro").remove();
					$(".button_back, .button_next").removeClass("hidden");
				});
			}
		}

		/* Falls der geklickte schon aktiv ist */
		if ($(".slide." + myid).hasClass('active')) {
			// mach nichts
		}
		else {
			$(".slide.active").addClass("last_next");
			$(".slide." + myid).addClass("active next_next");
			if($(".slide." + myid + " video").length) { // Falls ein video vorhanden - starten
				$(".slide." + myid + " video").get(0).play();
			}

			setTimeout(function(){
				if($('.slide.last_next video').length) { // Falls ein video vorhanden - pause
					$('.slide.last_next video').get(0).pause();
				}
				$('.slide.last_next').removeClass("last_next active");
				$('.slide.active').removeClass("next_next");
			}, 550);
		}
	});


	$(".taenzer_mobil a").click(function() {
		var myHeight = $(this).parent().find(".text").height()+20;
		$(this).parent().find(".textbox").css("height", myHeight);
		$('html, body').stop().animate({
			scrollTop: ($(this).offset().top)-70
		}, 800);
	});

	$(".taenzer_mobil .close").click(function() {
		$(this).parent().parent().removeAttr("style");
		$('html, body').stop().animate({
			scrollTop: ($(this).parent().parent().parent().offset().top)-70
		}, 800);
	});


	$(".lection").click(function() {
		if(isMobile()){ // Wenn es sich um mobilgerät handelt
			$(".lection").removeClass('aktiv');
			$(this).addClass('aktiv');
		}
	});






	/* Peopleslider */
	var slider_set_people;

	function slidePeopleNext () {
		var $active = $('.peopleslider .slide.active');
		if ($active.length == 0) {
			$active = $('.peopleslider .slide:last');
		}
		if ($active.next().length !=0) {
			var $next = $active.next();
		} else {
			var $next = $('.peopleslider .slide:first');
		}

		$active.addClass('last-active last_next');
		if ($active.find("video").length) { // Falls aktuell ein video vorhanden - pause
			$active.find("video").get(0).pause();
		}

		$next.css({opacity: 0.0})
			.addClass('active next_next')
			.animate({opacity: 1.0}, 500, function() {
				$(this).removeClass('next_next')
				$active.removeClass('active last-active last_next');
				slider_set_people = false;
			});
		if ($next.find("video").length) { // Falls ein video vorhanden - starten
			$next.find("video").get(0).play();
		}
	}

	function slidePeopleBack () {
		var $active = $('.peopleslider .slide.active');
		if ($active.length == 0) {
			$active = $('.peopleslider .slide:first');
		}
		if ($active.prev().length !=0) {
			var $next = $active.prev();
		} else {
			var $next = $('.peopleslider .slide:last');
		}

		$active.addClass('last-active last_back');
		if ($active.find("video").length) { // Falls aktuell ein video vorhanden - pause
			$active.find("video").get(0).pause();
		}

		$next.css({opacity: 0.0})
			.addClass('active next_back')
			.animate({opacity: 1.0}, 500, function() {
				$(this).removeClass('next_back')
				$active.removeClass('active last-active last_back');
				slider_set_people = false;
		});
		if ($next.find("video").length) { // Falls ein video vorhanden - starten
			$next.find("video").get(0).play();
		}
	}




	$(document).on("click", ".peopleslider .button_next", function() {
		if (!slider_set_people) {
			slider_set_people = true;
			slidePeopleNext()
		}
	});
	$(document).on("click", ".peopleslider .button_back", function() {
		if (!slider_set_people) {
			slider_set_people = true;
			slidePeopleBack()
		}
	});



// ------------------------------------------------------------------------------------------------------------------------------------------------ //

	/* parallaxBild */

	function parralaxbild() {
		if($('.parallaxbild').length) {
			var parallaxPositionTop = $(".parallaxbild").offset().top-300;
			var s = $(window).scrollTop()-parallaxPositionTop;

			if (s > 0) {
				$(".parallaxbild").css("background-position", "center -" + (Math.round(s/3)) + "px");
			} else {
				$(".parallaxbild").css("background-position", "center " + (Math.round(s/3*-1)) + "px");
			}
		}

		if($('.parallaxSlider').length) {
			var parallaxSliderPositionTop = $(".parallaxSlider").offset().top-300;
			var sSlider = $(window).scrollTop()-parallaxSliderPositionTop;

			if (sSlider > 0) {
				$(".parallaxSliderBild").css("background-position", "center -" + (Math.round(sSlider/3)) + "px");
			} else {
				$(".parallaxSliderBild").css("background-position", "center " + (Math.round(sSlider/3*-1)) + "px");
			}
		}
	};

	function parralaxText() {
		if($('h2.parallax').length) {
			s = $(window).scrollTop();
			$("h2.parallax").css("margin-top","-" +  (s/11)  + "px");
		}
	};



// ------------------------------------------------------------------------------------------------------------------------------------------------ //




	/* Contentnavi Klick */
	$(document).on("click", "#contentnav li", function() {
		$("#contentnav li, .inhaltbox").removeClass('aktiv');

		$(this).addClass('aktiv');

		var myid = $(this).attr("rel");
		$(".inhaltbox[rel='" + myid +"']").addClass("aktiv");
		contentnavInhaltHeight();
		switchCaroussel(myid);
	});

	/* Contentnavi */
	function contentnavInhaltHeight() {
		if($('.contentnavInhaltebox').length) {
			var inhaltheight = $(".inhaltbox.aktiv").height();
			$(".contentnavInhaltebox").css('height' , inhaltheight);
		}
	};
	/* Aktiv setzen bei load */
	if($('.contentnavInhaltebox').length) {
		$('#contentnav li:first-child, .contentnavInhaltebox .inhaltbox:first-child').addClass('aktiv');
	};
	/* switch caroussel */
	function switchCaroussel(kleuring){
			if (kleuring == "privat") {
			document.getElementById("caroussel_1").src="./build/uploads/01.png"; 
			document.getElementById("caroussel_2").src="./build/uploads/02.png"; 
			document.getElementById("caroussel_3").src="./build/uploads/03.png"; 
			document.getElementById("caroussel_4").src="./build/uploads/04.png"; 
			document.getElementById("caroussel_5").src="./build/uploads/05.png"; 
			document.getElementById("caroussel_6").src="./build/uploads/06.png"; 
			document.getElementById("caroussel_7").src="./build/uploads/07.png"; 
			document.getElementById("caroussel_8").src="./build/uploads/08.png"; 
			document.getElementById("caroussel_1_png").src="./build/uploads/01.png"; 
			document.getElementById("caroussel_2_png").src="./build/uploads/02.png"; 
			document.getElementById("caroussel_3_png").src="./build/uploads/03.png"; 
			document.getElementById("caroussel_4_png").src="./build/uploads/04.png"; 
			document.getElementById("caroussel_5_png").src="./build/uploads/05.png"; 
			document.getElementById("caroussel_6_png").src="./build/uploads/06.png"; 
			document.getElementById("caroussel_7_png").src="./build/uploads/07.png"; 
			document.getElementById("caroussel_8_png").src="./build/uploads/08.png"; 
			document.getElementById("stap1_desktop_txt").innerHTML ="Shampoo opbrengen"; 
			document.getElementById("stap1_mobil_txt").innerHTML ="Shampoo opbrengen"; 
			document.getElementById("stap2_desktop_txt").innerHTML ="Wassen"; 
			document.getElementById("stap2_mobil_txt").innerHTML ="Wassen"; 
			document.getElementById("stap3_desktop_txt").innerHTML ="Indelen voor het kleuren"; 
			document.getElementById("stap3_mobil_txt").innerHTML ="Indelen voor het kleuren"; 
			document.getElementById("stap4_desktop_txt").innerHTML ="Kleur opbrengen"; 
			document.getElementById("stap4_mobil_txt").innerHTML ="Kleur opbrengen"; 
			document.getElementById("stap5_desktop_txt").innerHTML ="Klaar om te stomen"; 
			document.getElementById("stap5_mobil_txt").innerHTML ="Klaar om te stomen"; 
			document.getElementById("stap6_desktop_txt").innerHTML ="Onder de stoomkap"; 
			document.getElementById("stap6_mobil_txt").innerHTML ="Onder de stoomkap"; 
			document.getElementById("stap7_desktop_txt").innerHTML ="Uitspoelen"; 
			document.getElementById("stap7_mobil_txt").innerHTML ="Uitspoelen"; 
			document.getElementById("stap8_desktop_txt").innerHTML ="Het haar drogen"; 
			document.getElementById("stap8_mobil_txt").innerHTML ="Het haar drogen"; 
		} else {
			document.getElementById("caroussel_1").src="./build/uploads/01a.png"; 
			document.getElementById("caroussel_2").src="./build/uploads/02a.png"; 
			document.getElementById("caroussel_3").src="./build/uploads/03a.png"; 
			document.getElementById("caroussel_4").src="./build/uploads/04a.png"; 
			document.getElementById("caroussel_5").src="./build/uploads/05a.png"; 
			document.getElementById("caroussel_6").src="./build/uploads/06a.png"; 
			document.getElementById("caroussel_7").src="./build/uploads/07a.png"; 
			document.getElementById("caroussel_8").src="./build/uploads/08a.png"; 
			document.getElementById("caroussel_1_png").src="./build/uploads/01a.png"; 
			document.getElementById("caroussel_2_png").src="./build/uploads/02a.png"; 
			document.getElementById("caroussel_3_png").src="./build/uploads/03a.png"; 
			document.getElementById("caroussel_4_png").src="./build/uploads/04a.png"; 
			document.getElementById("caroussel_5_png").src="./build/uploads/05a.png"; 
			document.getElementById("caroussel_6_png").src="./build/uploads/06a.png"; 
			document.getElementById("caroussel_7_png").src="./build/uploads/07a.png"; 
			document.getElementById("caroussel_8_png").src="./build/uploads/08a.png"; 
			document.getElementById("stap1_desktop_txt").innerHTML ="Uitgroei"; 
			document.getElementById("stap1_mobil_txt").innerHTML ="Uitgroei"; 
			document.getElementById("stap2_desktop_txt").innerHTML ="Eerste kleuring"; 
			document.getElementById("stap2_mobil_txt").innerHTML ="Eerste kleuring"; 
			document.getElementById("stap3_desktop_txt").innerHTML ="Onder de stoomkap"; 
			document.getElementById("stap3_mobil_txt").innerHTML ="Onder de stoomkap"; 
			document.getElementById("stap4_desktop_txt").innerHTML ="Uitgespoeld"; 
			document.getElementById("stap4_mobil_txt").innerHTML ="Uitgespoeld"; 
			document.getElementById("stap5_desktop_txt").innerHTML ="Tweede kleuring"; 
			document.getElementById("stap5_mobil_txt").innerHTML ="Tweede kleuring"; 
			document.getElementById("stap6_desktop_txt").innerHTML ="Onder de stoomkap"; 
			document.getElementById("stap6_mobil_txt").innerHTML ="Onder de stoomkap"; 
			document.getElementById("stap7_desktop_txt").innerHTML ="Uitspoelen"; 
			document.getElementById("stap7_mobil_txt").innerHTML ="Uitspoelen"; 
			document.getElementById("stap8_desktop_txt").innerHTML ="Resultaat"; 
			document.getElementById("stap8_mobil_txt").innerHTML ="Resultaat"; 
		}
	};	
	
	/* Angebotklick bei load */
	function tabLoads () {
		if($('#contentnav li').length) {
			var aktiveTab = location.hash.substring(1);
			$('#contentnav li').each(function(){
				if ($(this).attr('rel') == aktiveTab) {
					$(this).click();
					$('html, body').stop().animate({
						scrollTop: ($('.einblendbox:nth-of-type(2)').offset().top)-0}, 800 , function(){
						}
					);
				}
			});
		}
	}


	$(document).on("change", "#mobilfilterTanzstile", function() {
		var myValue = $( "#mobilfilterTanzstile option:selected" ).attr("value");
		$(".lection").removeClass('stilhidden');

		if ((myValue == "alle-tanzstiele") || (myValue == "tanzstiel")) {
		} else {
			$(".lection:not(.lection[stil='" + myValue +"'])").addClass('stilhidden');
		}
	});

	$(document).on("change", "#mobilfilterTanzstile_kurse", function() {
		var myValue = $( "#mobilfilterTanzstile_kurse option:selected" ).attr("value");
		$(".kurs").removeClass('stilhidden');

		if ((myValue == "alle-tanzstiele") || (myValue == "tanzstiel")) {
		} else {
			$(".kurs:not(.kurs[stil='" + myValue +"'])").addClass('stilhidden');
		}
	});


	$(document).on("click", ".filter:not(.filter.gross) .aktivauswahl", function() {
		var aktivauswahlheight = $(this).height()+12;
		var filterheight = $(this).parent().find('ul').height()+aktivauswahlheight;
		$(this).parent().height(filterheight);

		if ($(this).hasClass('offen')) {
			$(this).removeClass('offen');
			$(this).parent().height(aktivauswahlheight);
		} else {
			$(this).addClass('offen');
			$(this).parent().height(filterheight);
		}
	});
	$(document).on("click", ".filter.gross .aktivauswahl", function() {
		var aktivauswahlheight = $(this).height()+27;
		var filterheight = $(this).parent().find('ul').height()+aktivauswahlheight;
		$(this).parent().height(filterheight)+10;

		if ($(this).hasClass('offen')) {
			$(this).removeClass('offen');
			$(this).parent().height(aktivauswahlheight);
		} else {
			$(this).addClass('offen');
			$(this).parent().height(filterheight);
		}
	});
	
	// Tanzstiele Filter
	$(document).on("click", ".filter#tanzstil li", function() {
		var myClass = $(this).attr('class');
		var htmlInhalt = $(this).html();

		$(".filter#tanzstil li").removeClass('aktiv'); $(this).addClass('aktiv');
		$(".lection").removeClass('stilhidden');

		if ($(this).hasClass('filtertitel')) {
			$(".filter#tanzstil .aktivauswahl").html("Tanzstil");
		} else {
			$(".lection:not(.lection[stil='" + myClass +"'])").addClass('stilhidden');
			$(".filter#tanzstil .aktivauswahl").html(htmlInhalt);
		}

		// Filter schliessen und Höhe setzen
		var aktivauswahlheight = $('.filter#tanzstil .aktivauswahl').height()+12;
		$('.filter#tanzstil .aktivauswahl').removeClass('offen');
		$('.filter#tanzstil').height(aktivauswahlheight);
	});
	// Alter Filter
	$(document).on("click", ".filter#alter li", function() {
		var myClass = $(this).attr('class');
		var htmlInhalt = $(this).html();

		$(".filter#alter li").removeClass('aktiv'); $(this).addClass('aktiv');
		$(".lection").removeClass('alterhidden');

		if ($(this).hasClass('filtertitel')) {
			$(".filter#alter .aktivauswahl").html("Alter");
		} else {
			$(".lection:not(.lection[alter='" + myClass +"'])").addClass('alterhidden');
			$(".filter#alter .aktivauswahl").html(htmlInhalt);
		}

		// Filter schliessen und Höhe setzen
		var aktivauswahlheight = $('.filter#alter .aktivauswahl').height()+12;
		$('.filter#alter .aktivauswahl').removeClass('offen');
		$('.filter#alter').height(aktivauswahlheight);
	});
	// Niveau Filter
	$(document).on("click", ".filter#niveau li", function() {
		var myClass = $(this).attr('class');
		var htmlInhalt = $(this).html();

		$(".filter#niveau li").removeClass('aktiv'); $(this).addClass('aktiv');
		$(".lection").removeClass('niveauhidden');

		if ($(this).hasClass('filtertitel')) {
			$(".filter#niveau .aktivauswahl").html("Niveau");
		} else {
			$(".lection:not(.lection[niveau='" + myClass +"'])").addClass('niveauhidden');
			$(".filter#niveau .aktivauswahl").html(htmlInhalt);
		}

		// Filter schliessen und Höhe setzen
		var aktivauswahlheight = $('.filter#alter .aktivauswahl').height()+12;
		$('.filter#niveau .aktivauswahl').removeClass('offen');
		$('.filter#niveau').height(aktivauswahlheight);
	});


	// Tanzstiele Filter Kurse
	$(document).on("click", ".filter#tanzstil_kurse li", function() {
		var myClass = $(this).attr('class');
		var htmlInhalt = $(this).html();

		$('.kurs.aktiv').find('.kursinhalt').slideToggle(400);
		$('.kurs.aktiv').removeClass('aktiv');

		$(".filter#tanzstil_kurse li").removeClass('aktiv'); $(this).addClass('aktiv');
		$(".kurs").removeClass('stilhidden');

		if ($(this).hasClass('filtertitel')) {
			$(".filter#tanzstil_kurse .aktivauswahl").html("Tanzstil");
		} else {
			$(".kurs:not(.kurs[stil='" + myClass +"'])").addClass('stilhidden');
			$(".filter#tanzstil_kurse .aktivauswahl").html(htmlInhalt);
		}

		// Filter schliessen und Höhe setzen
		var aktivauswahlheight = $('.filter#tanzstil_kurse .aktivauswahl').height()+12;
		$('.filter#tanzstil_kurse .aktivauswahl').removeClass('offen');
		$('.filter#tanzstil_kurse').height(aktivauswahlheight);
	});

	// Tanzstiele Filter Kurse
	$(document).on("click", ".filter#alter_kurse li", function() {
		var myClass = $(this).attr('class');
		var htmlInhalt = $(this).html();
		
		$('.kurs.aktiv').find('.kursinhalt').slideToggle(400);
		$('.kurs.aktiv').removeClass('aktiv');

		$(".filter#alter_kurse li").removeClass('aktiv'); $(this).addClass('aktiv');
		$(".kurs").removeClass('alterhidden');

		if ($(this).hasClass('filtertitel')) {
			$(".filter#alter_kurse .aktivauswahl").html("Alter");
		} else {
			$(".kurs:not(.kurs[alter='" + myClass +"'])").addClass('alterhidden');
			$(".filter#alter_kurse .aktivauswahl").html(htmlInhalt);
		}

		// Filter schliessen und Höhe setzen
		var aktivauswahlheight = $('.filter#alter_kurse .aktivauswahl').height()+12;
		$('.filter#alter_kurse .aktivauswahl').removeClass('offen');
		$('.filter#alter_kurse').height(aktivauswahlheight);
	});

	// Niveau Filter Kurse
	$(document).on("click", ".filter#niveau_kurse li", function() {
		var myClass = $(this).attr('class');
		var htmlInhalt = $(this).html();

		$('.kurs.aktiv').find('.kursinhalt').slideToggle(400);
		$('.kurs.aktiv').removeClass('aktiv');

		$(".filter#niveau_kurse li").removeClass('aktiv'); $(this).addClass('aktiv');
		$(".kurs").removeClass('niveauhidden');

		if ($(this).hasClass('filtertitel')) {
			$(".filter#niveau_kurse .aktivauswahl").html("Niveau");
		} else {
			$(".kurs:not(.kurs[niveau='" + myClass +"'])").addClass('niveauhidden');
			$(".filter#niveau_kurse .aktivauswahl").html(htmlInhalt);
		}

		// Filter schliessen und Höhe setzen
		var aktivauswahlheight = $('.filter#niveau_kurse .aktivauswahl').height()+12;
		$('.filter#niveau_kurse .aktivauswahl').removeClass('offen');
		$('.filter#niveau_kurse').height(aktivauswahlheight);
	});
	
	// Standort Filter Kurse
	$(document).on("click", ".filter#standortfilter li", function() {
		var myClass = $(this).attr('rel');
		var htmlInhalt = $(this).html();
		
		
		$('.kurs.aktiv').find('.kursinhalt').slideToggle(400);
		$('.kurs.aktiv').removeClass('aktiv');
		

		$(".filter#standortfilter li").removeClass('aktiv');
		
		if ( (myClass == 'wetzikon') || (myClass == 'filtertitel') ) {
			$(".abonnemente .einblendcontent").slideDown(500, function() {
				$(window).scrollTop($(window).scrollTop()+1);
  			});
		} else {
			$(".abonnemente .einblendcontent").slideUp(500, function() {
				$(window).scrollTop($(window).scrollTop()+1);
			});			
		}
		
		$(this).addClass('aktiv');
		$(".kurs").removeClass('standorthidden');

		if ($(this).hasClass('filtertitel')) {
			$(".filter#standortfilter .aktivauswahl").html("Alle Standorte");
		} else {
			$(".kurs:not(.kurs[standort='" + myClass +"'])").addClass('standorthidden');
			$(".filter#standortfilter .aktivauswahl").html(htmlInhalt);
		}

		// Filter schliessen und Höhe setzen
		var aktivauswahlheight = $('.filter#standortfilter .aktivauswahl').height()+27;
		$('.filter#standortfilter .aktivauswahl').removeClass('offen');
		$('.filter#standortfilter').height(aktivauswahlheight);
	});
	
	// Standort Filter Mobil Kurse
	$(document).on("change", "#mobilfilterStandort_kurse", function() {
		var myValue = $( "#mobilfilterStandort_kurse option:selected" ).attr("value");
		$(".kurs").removeClass('standorthidden');
		
		$('.kurs.aktiv').find('.kursinhalt').slideToggle(400);
		$('.kurs.aktiv').removeClass('aktiv');

		if (myValue == "alle-standorte") {
		} else {
			$(".kurs:not(.kurs[standort='" + myValue +"'])").addClass('standorthidden');
		}
		
		if ( (myValue == 'wetzikon') || (myValue == 'alle-standorte') ) {
			$(".abonnemente .einblendcontent").slideDown(500, function() {
				$(window).scrollTop($(window).scrollTop()+1);
  			});
		} else {
			$(".abonnemente .einblendcontent").slideUp(500, function() {
				$(window).scrollTop($(window).scrollTop()+1);
			});			
		}
	});

// ------------------------------------------------------------------------------------------------------------------------------------------------ //


	/* Tabs Klick */
	$(document).on("click", "#tabs li", function() {
		$("#tabs li").removeClass('aktiv'); $(this).addClass('aktiv');
		$("ul.universumtabs").css('height',$(this) .find(".inhalt").height()+108);
	});
	/* Tab aktiv setzen bei load */
	if($('#tabs').length) {
		$('#tabs li:first-child').addClass('aktiv');
		$("ul.universumtabs").css('height',$("#tabs li.aktiv") .find(".inhalt").height()+108);
	};

	/* Tooltip */
	/*$(document).on("click", ".tooltip", function() {
		if ($(this).hasClass('aktiv')) {
			$(this).css('height', 27).css('width', 27);
		} else {
			$(this).css('height',$(this) .find(".tooltiptext").height()+43).css('width',$(this) .find(".tooltiptext").width()+40);
		}

		$(this).toggleClass('aktiv');
	});*/

	$('.tooltip').mouseenter(function () {
		$(this).css('height',$(this) .find(".tooltiptext").height()+43).css('width',$(this) .find(".tooltiptext").width()+40);
	});

	$('.tooltip').mouseleave(function () {
		$(this).css('height', 27).css('width', 27);
	});








	/* Zähle Elemente und setze Mittleren aktiv */
	function setAktive () {
		if($('.testimonials').length) {
			var anzahlPersonen = $('.personalien').length;
			var aufrunden = Math.round(anzahlPersonen/2);

			$('.personalien:nth-of-type(' + aufrunden + ')').addClass('aktiv');
			$('.portraitbild:nth-of-type(' + aufrunden + ')').addClass('aktiv');

			/* Falls gerade Anzahl verschiebe Container */
			if (anzahlPersonen %2 != 0){
			} else {
				$('.portraitcontainer .holder').css('margin-left', '-2850' + 'px');
			}
		}
	};
	setAktive ();



// ------------------------------------------------------------------------------------------------------------------------------------------------ //

	/* Angebotklick bei load */
	function angebotLoads () {
		if($('.angebot').length) {
			var displaystatus = $('.angebotcontainer.onDesktopshow').css('display');
			var aktiveAngebot = location.hash.substring(1);

			if ($('.angebotcontainer.onDesktopshow').css('display') == 'none')
			{
				$('.angebotcontainer_mobil .swiper-slide').each(function(){
					if ($(this).attr('rel') == aktiveAngebot) {
						var numberAngebot = $(this).index()+1;
						$('.swiper-pagination span:nth-of-type(' + numberAngebot + ')').click();
						$('html, body').stop().animate({
							scrollTop: ($('.einblendbox:nth-of-type(2)').offset().top)-60}, 10 , function(){
							}
						);
					}
				});
			}
			else {
				$('.angebot').each(function(){
					if ($(this).attr('rel') == aktiveAngebot) {
						$(this).click();
						$('html, body').stop().animate({
							scrollTop: ($('.einblendbox:nth-of-type(2)').offset().top)-0}, 800 , function(){
							}
						);
					}
				});
			}
		}
	}




	/* First Slide aktiv bei load */
	if($('.angebottextslider').length) {
		$('.angebottextslider span:first-child').addClass('active');
	};

	/* Slidelinks klick */
	$(".angebottextslider a").click(function() {
		myAngebotID = $(this).attr("rel");
  		$('html, body').stop().animate({
  			scrollTop: ($('.einblendbox:nth-of-type(2)').offset().top)-0}, 800 , function(){
					}
  		);
		//$(".angebot#" + myAngebotID).click();
		$(".angebot[rel='" + myAngebotID +"']").click();
  	});






		/* Angebot Klick Introtext ausblenden */
	$(document).on("click", ".angebot.site", function() {
		var windowwidth = $(window).width()/2;
		var number = $(this).index()+1;
		var numberwidth = number*300-windowwidth+350


		if ($(".angebot_Introtext").hasClass('hidden')) {
			$(".angebot").removeClass('show'); $(this).addClass('show');

			$(".angebotcontainer").stop();
			angeboteKlick = "aktiv"; // unterbinde scrollStop
			$(".angebotcontainer").animate({ scrollLeft: numberwidth }, 600, function() {
				angeboteKlick = "inaktiv"; // unterbinde scrollStop
			});
		} else {
			$(".angebotcontainer .holder").css('width' , $(".containerWidth").width()+1000);
			$(".angebot_Introtext").addClass('hidden');
			$(this).addClass('show');

			$(".angebotcontainer").stop();
			angeboteKlick = "aktiv"; // unterbinde scrollStop
			$(".angebotcontainer").animate({ scrollLeft: numberwidth }, 600, function() {
				angeboteKlick = "inaktiv"; // unterbinde scrollStop
			});
		}
	});



	/* Angebote Pfeilklick */
	function slideAngebotNext () {
		var $active = $('.angebotcontainer .angebot.show');
		if ($active.length == 0) {
			$active = $('.angebotcontainer .angebot:last');
		}
		if ($active.next().length !=0) {
			var $next = $active.next();
		} else {
			var $next = $('.angebotcontainer .angebot:first');
		}

		$active.removeClass('show');
		$next.addClass('show');
	}

	function slideAngebotBack () {
		var $active = $('.angebotcontainer .angebot.show');
		if ($active.length == 0) {
			$active = $('.angebotcontainer .angebot:first');
		}
		if ($active.prev().length !=0) {
			var $next = $active.prev();
		} else {
			var $next = $('.angebotcontainer .angebot:last');
		}

		$active.removeClass('show');
		$next.addClass('show');
	}

	$(document).on("click", "#angebot .button_next", function() {
		slideAngebotNext();
		//aktivpruefung();
	});
	$(document).on("click", "#angebot .button_back", function() {
		slideAngebotBack();
		//aktivpruefung();
	});



	/* Formular Anmeldung */
	$(document).on("click", "#step_preise .anmeldebutton", function() {
		var displaystatus = $('.angebotcontainer.onDesktopshow').css('display');
		myID = $(this).attr('id');

		$("#step_preise").removeClass("show");

		if ($('.angebotcontainer.onDesktopshow').css('display') == 'none')
		{ // Mobil
			myIDheight = $(".anmeldestep#" + myID).height()+80;
			$(".preise").height(myIDheight);
		}
		else {
			myIDheight = $(".anmeldestep#" + myID).height();
			$(".preise").height(myIDheight);
		}

		$(".anmeldestep#" + myID).addClass("show");
		$('html, body').animate({
			scrollTop: ($('.preise').offset().top)-40}, 600 , function(){/*ende*/}
		);
	});

	// Zurück Button
	$(document).on("click", ".anmeldestep .zurueckbutton", function() {
		$(".anmeldestep").removeClass("show");
		$(".preise").removeAttr("style");
		$("#step_preise").addClass("show");
	});




// ------------------------------------------------------------------------------------------------------------------------------------------------ //


	/* Regler und bild aktiv setzen bei load */
	if($('.bildung').length) {
		$('.levelbild:first-child, .zusatz:first-child, #regler p:first-child').addClass('aktiv');
	};


	/* Regler Klick Bubble aktiv */
	$(document).on("click", ".vortschritt_bubble", function() {
		$(this).addClass('aktiv');
		$(this).prevAll(".vortschritt_bubble").addClass('aktiv');
		$(this).nextAll(".vortschritt_bubble").removeClass('aktiv');
		$(".levelbeschreibung .zusatz, #regler p").removeClass('aktiv');
		$(".levelbild.aktiv").addClass('go'); $(".levelbild").removeClass('aktiv');
		setTimeout(function(){
			$('.levelbild.go').removeClass("go");
		}, 600);
	});



	/* Regler Klick */
	$(document).on("click", ".vortschritt_bubble:nth-of-type(1)", function() {
		$("#regler, #vortschritt_linie_aktiv").removeAttr('class');
		$(".levelbeschreibung .zusatz:nth-of-type(1), .levelbild:nth-of-type(1), #regler p:nth-of-type(1)").addClass('aktiv');
	});
	$(document).on("click", ".vortschritt_bubble:nth-of-type(2)", function() {
		$("#regler, #vortschritt_linie_aktiv").removeAttr('class'); $("#regler, #vortschritt_linie_aktiv").addClass('eins');
		$(".levelbeschreibung .zusatz:nth-of-type(2), .levelbild:nth-of-type(2), #regler p:nth-of-type(2)").addClass('aktiv');
	});
	$(document).on("click", ".vortschritt_bubble:nth-of-type(3)", function() {
		$("#regler, #vortschritt_linie_aktiv").removeAttr('class'); $("#regler, #vortschritt_linie_aktiv").addClass('zwei');
		$(".levelbeschreibung .zusatz:nth-of-type(3), .levelbild:nth-of-type(3), #regler p:nth-of-type(3)").addClass('aktiv');
	});
	$(document).on("click", ".vortschritt_bubble:nth-of-type(4)", function() {
		$("#regler, #vortschritt_linie_aktiv").removeAttr('class'); $("#regler, #vortschritt_linie_aktiv").addClass('drei');
		$(".levelbeschreibung .zusatz:nth-of-type(4), .levelbild:nth-of-type(4), #regler p:nth-of-type(4)").addClass('aktiv');
	});
	$(document).on("click", ".vortschritt_bubble:nth-of-type(5)", function() {
		$("#regler, #vortschritt_linie_aktiv").removeAttr('class'); $("#regler, #vortschritt_linie_aktiv").addClass('vier');
		$(".levelbeschreibung .zusatz:nth-of-type(5), .levelbild:nth-of-type(5), #regler p:nth-of-type(5)").addClass('aktiv');
	});
	$(document).on("click", ".vortschritt_bubble:nth-of-type(6)", function() {
		$("#regler, #vortschritt_linie_aktiv").removeAttr('class'); $("#regler, #vortschritt_linie_aktiv").addClass('fuenf');
		$(".levelbeschreibung .zusatz:nth-of-type(6), .levelbild:nth-of-type(6), #regler p:nth-of-type(6)").addClass('aktiv');
	});


// ------------------------------------------------------------------------------------------------------------------------------------------------ //


	/* Akkordeon */
	$(document).on("click", ".frage h3", function() {
		$(this).parent().toggleClass('aktiv');
		$(this).parent().find('.antwort').slideToggle(400);
	});

	/* Akkordeon */
	$(document).on("click", ".kurs .kursheader", function() {
		$(this).parent().toggleClass('aktiv');
		$(this).parent().find('.kursinhalt').slideToggle(400);
		
		if ($(this).parent().hasClass('aktiv')) {
			$('html, body').stop().animate({
				scrollTop: ($(this).parent().offset().top)-90
			}, 1000);
		}
	});
	
	

	/* Akkordeon */
	$(document).on("click", ".termine_dropdown", function() {
		$(this).find('.termine_dropdown_inhalt').slideToggle(400);
	});

// ------------------------------------------------------------------------------------------------------------------------------------------------ //

	function selectstyles() {
		$('select').each(function(){
			var $this = $(this), numberOfOptions = $(this).children('option').length;

			$this.addClass('select-hidden');
			$this.wrap('<div class="select"></div>');
			$this.after('<div class="select-styled"></div>');

			var $styledSelect = $this.next('div.select-styled');
			$styledSelect.text($this.children('option').eq(0).text());

			var $list = $('<ul />', {
				'class': 'select-options'
			}).insertAfter($styledSelect);

			for (var i = 0; i < numberOfOptions; i++) {
				$('<li />', {
					text: $this.children('option').eq(i).text(),
					rel: $this.children('option').eq(i).val()
				}).appendTo($list);
			}

			var $listItems = $list.children('li');

			$styledSelect.click(function(e) {
				e.stopPropagation();

				if ($(this).hasClass('active')) {
					$('div.select-styled.active').each(function(){
						$(this).removeClass('active').next('ul.select-options').slideUp( "slow" );
					});
				} else {
					$(this).toggleClass('active').next('ul.select-options').slideToggle();
				}
			});

			$listItems.click(function(e) {
				e.stopPropagation();
				$styledSelect.text($(this).text()).removeClass('active');
				$this.val($(this).attr('rel'));
				$list.slideUp( "slow" );
				//console.log($this.val());
			});

			$(document).click(function() {
				$styledSelect.removeClass('active');
				$list.slideUp( "slow" );
			});

		});
	};

});


//
// WhatsApp Current Page
//
waCurrentPage = function() {
  return encodeURI("whatsapp://send?text=Delia Natuurlijke Haarkleuring: " + 'http://' + window.location.hostname + window.location.pathname);
}