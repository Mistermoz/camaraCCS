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

			$('.header .nav').css('top', '' + ($('.header').height() + 10) + 'px');
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

			$('.header .nav').css('top', '' + ($('.header').height() + 10) + 'px');
		}

		$('.menu-mobile a').click(function (e) {
			$('.nav li').removeClass('activo01');
			$('.header .nav ul').toggleClass( 'open', 'addOrRemove' );

			e.preventDefault();
		});
	});
});
