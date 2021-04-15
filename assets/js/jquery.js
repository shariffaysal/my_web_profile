$(document).ready(function () {

	/* STICKY MENU */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky__menu');
		} else {
			$("header").removeClass('sticky__menu');
		}
	});


	/* SHOW & HIDE MENU */
	$(".menu__show__icon").click(function () {
		$(".main__menu").toggleClass("main__menu-show");
	});


	/* PROGRESS VAR */
	function tdProgress(container) {
		"use strict";
		container.find('.progress_area').each(function (i) {
			var progress = jQuery(this);
			var pValue = parseInt(progress.data('value'), 10);
			var pColor = progress.data('color');
			var pBarWrap = progress.find('.sj_bar_wrap');
			var pBar = progress.find('.sj_bar');
			pBar.css({
				width: pValue + '%',
				backgroundColor: pColor
			});
			setTimeout(function () {
				pBarWrap.addClass('open');
			}, (i * 0));
		});
	}
	jQuery('.skill_bar').each(function () {
		"use strict";
		var pWrap = jQuery(this);
		pWrap.waypoint({
			handler: function () {
				tdProgress(pWrap);
			},
			offset: '90%'
		});
	});


	/* WOW JS */
	new WOW().init();

});