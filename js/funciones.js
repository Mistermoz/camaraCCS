// JavaScript Document

$(document).ready(function(){
	$('.bxslider-home').bxSlider({
		minSlides: 1,
		maxSlides: 1,
		auto: true,
		pause: 7000,
		slideMargin: 0
	});
	
	//$('.candado').unbind('click')
	$('#envio').click(function() {
	  $('.candado').css("background","none");
	  $('.candado').css("color","#FFF");
	  $('.listtop li').addClass('chek');
	});
	
	$('.ingresoCliente').click(function() {
	  $( ".topoculto" ).toggle();
	});
	
	//
	$(window).resize(function(event) {
		if($(window).width() <= 768) {
			$('.nav li').off('mouseenter mouseleave');
			$('.subnav li').off('mouseenter mouseleave');

			$('.header .nav').css('top', '' + $('.header').height() + 'px');
		}else {
			$('.nav li').on('mouseenter', function() {
				$(this).find('.subnav').show();
				$(this).addClass('activo01');
			});
			
			$('.nav li').on('mouseleave', function() {
				$(this).find('.subnav').hide();
				$(this).removeClass('activo01');
			});
			
			$('.subnav li').on('mouseenter', function() {
				$(this).find('.subsubnav').hide();
				$(this).find('.subsubnav').show();
			});
			
			$('.subnav li').on('mouseleave', function() {
				$(this).find('.subsubnav').hide();
			});
			
			$('.subnav li').on('mouseenter', function() {
				$(this).addClass('activo02');
			});
			
			$('.subnav li').on('mouseleave', function() {
				$(this).removeClass('activo02');
			});

			$('.header .nav').css('top', 'unset');
		}
	});

	$(window).load(function() {
		// Funciones de collapse

		$('.collapse_head').click(function(){
			$(this).toggleClass('open'); 
			$(this).parent().find('.collapse_body').slideToggle('fast');
		});	
		
		/********* Mobile Menu *******/

		if($(window).width() > 768) {
			$('.nav li').on('mouseenter', function() {
				$(this).find('.subnav').show();
				$(this).addClass('activo01');
			});
			
			$('.nav li').on('mouseleave', function() {
				$(this).find('.subnav').hide();
				$(this).removeClass('activo01');
			});
			
			$('.subnav li').on('mouseenter', function() {
				$(this).find('.subsubnav').hide();
				$(this).find('.subsubnav').show();
			});
			
			$('.subnav li').on('mouseleave', function() {
				$(this).find('.subsubnav').hide();
			});
			
			$('.subnav li').on('mouseenter', function() {
				$(this).addClass('activo02');
			});
			
			$('.subnav li').on('mouseleave', function() {
				$(this).removeClass('activo02');
			});
		}else {
			$('.nav li').off('mouseenter mouseleave');
			$('.subnav li').off('mouseenter mouseleave');

			$('.nav li').on('click', function() {
				$('.nav li').removeClass('activo01');
				$(this).addClass('activo01');
			});

			$('.header .nav').css('top', '' + $('.header').height() + 'px');
		}

		$('.menu-mobile a').click(function (e) {
			$('.nav li').removeClass('activo01');
			$('.header .nav ul').toggleClass( 'open', 'addOrRemove' );

			e.preventDefault();
		});

		/***** OWL Carousel Acuerdos ******/

		var owlSlider = $('.owl-carousel').owlCarousel({
			dots: false,
	    loop: true,
	    margin:10,
	    responsiveClass: true,
	    responsive:{
        0:{
            items:2,
            nav:false
        },
        480:{
            items:3,
            nav:false
        },
        768:{
            items:5,
            nav:false
        },
        980:{
            items:7,
            nav:false
        },
        1000:{
            items:8,
            nav:false,
            loop:true
        }
	    }
		});

		$('.control a').click(function (e) {
			var op = $(this).attr('href').replace('/#/', '');

			if(op === 'anterior') {
				owlSlider.trigger('prev.owl.carousel');
			}else {
				owlSlider.trigger('next.owl.carousel');
			}

			e.preventDefault();
		});

		/********* Tabs **********/
		var Tabs = {
		  init: function() {
		    this.bindUIfunctions();
		    this.pageLoadCorrectTab();
		  },

		  bindUIfunctions: function() {
		    $(document).on("click", ".transformer-tabs a[href^='#']:not('.active')", function(event) {
	        Tabs.changeTab(this.hash);
	        event.preventDefault();
	      })
	      .on("click", ".transformer-tabs a.active", function(event) {
	        Tabs.toggleMobileMenu(event, this);
	        event.preventDefault();
	      });
		  },

		  changeTab: function(hash) {
		    var anchor = $("[href='" + hash + "']");
		    var div = $(hash);
		    // activate correct anchor (visually)
		    anchor.addClass("active").parent().siblings().find("a").removeClass("active");

		    // activate correct div (visually)
		    div.addClass("active").siblings().removeClass("active");

		    // update URL, no history addition
		    // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
		    // window.history.replaceState("", "", hash);

		    // Close menu, in case mobile
		    anchor.closest("ul").removeClass("open");
		  },

		  // If the page has a hash on load, go to that tab
		  pageLoadCorrectTab: function() {
		    this.changeTab('tab-1');
		  },

		  toggleMobileMenu: function(event, el) {
		    $(el).closest("ul").toggleClass("open");
		  }
		}

		Tabs.init();

		/************** Formulario Solicitud *****************/
		var idiomas_elegidos = [];

		$('.choice-box').on('click', 'a', function(e) {
			$(this).toggleClass( 'active', 'addOrRemove' );

			e.preventDefault();
		});

		$('.controls-choice a').click(function(e) {
			var op = $(this).attr('href').replace('/#/', '');

			if(op === 'left') {
				$(".success-box a").each(function( index, el ) {
				  var idioma = $(el).attr('href').replace('/#/', '');

					if($(el).hasClass('active')) {
						$(".success-box").find(el).remove();
						$('.choice-box a[href="/#/' + idioma + '"]').removeClass('elegido');
						$(".success-box a").removeClass('active');
						idiomas_elegidos.pop(idioma);
					}
				});
			}else {
				$('.choice-box a').each(function(index, el) {
					var idioma = $(el).attr('href').replace('/#/', '');

					if($(el).hasClass('active') && !$(el).hasClass('elegido')) {
						var tmp = $(el).clone();
						$(el).addClass('elegido');
						$(".success-box").append(tmp);
						$(".success-box a").removeClass('active');
						$(".choice-box a").removeClass('active');
						idiomas_elegidos.push(idioma);
					}
				});
			}

			e.preventDefault();
		});

		$('.cleanAll').click(function(e) {
			$('#formulario-certificado')[0].reset();
			e.preventDefault();
		});

		$("#rut").Rut({
		   format_on: 'keyup',
		});

		$('#formulario-certificado').submit(function(e) {
			$('.error').html('');

			 if(!$.Rut.validar($('#rut').val())) {
			 		$('.error').append('El Rut ingresado no es válido.')
			 }

			 e.preventDefault();
		});

		$.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        changeMonth: true,
      	changeYear: true
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);

		$( "#datepicker" ).datepicker();
	});
});
