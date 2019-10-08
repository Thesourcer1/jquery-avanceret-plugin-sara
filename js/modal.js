(function($) {
	'use strict';

	// Tilføjer plugin til fn så det kan bruges normalt
	$.fn.modal = function (options) {

		// Options
		// Sætter default options, hvis der ikke sendes noget med
		let defaultOptions = {
			selectors: {
				openbutton: 'open-btn',
				openmodal: 'open-modal',
				closebutton: 'close-btn',
			},
			modal:{
				type: '',
				effect: '',
				duration: '20',
			},
			closing:{
				clickanywhere: ''
			}
		};

		let opts = $.extend(true, {}, defaultOptions, options);

		// Går gennem alle elementer der matcher selector = idx=index, el=element
		return this.each(function (idx, el) {
			var openbutton = document.getElementById(opts.selectors.openbutton);
			var openmodal = document.getElementById(opts.selectors.openmodal);
			var closebutton = document.getElementById(opts.selectors.closebutton);
			var backgroundcolor = opts.style.background;
			var closebtn_style = opts.style.closebutton;
			var effect_durration = opts.modal.duration;
			var effect_type = opts.modal.effect;



			$(openbutton).click(function () {
				if (effect_type === "fade"){
					$(openmodal).fadeToggle(effect_durration).css({'background-color' : backgroundcolor});
					$(closebutton).html(closebtn_style).css({'cursor':'pointer'});
				} else if (effect_type === 'fade'){
					$(openmodal).fadeToggle(effect_durration).css({'background-color' : backgroundcolor});
					$(closebutton).html(closebtn_style).css({'cursor':'pointer'});
				} else {
					$(openmodal).toggle().css({
						'background-color' : backgroundcolor
					});
					$(closebutton).html(closebtn_style).css({'cursor':'pointer'});
				}
			});

			// For at undgå at luk effekten bliver sendt 2 gange så er der lavet et if/else.
			if (opts.closing.clickanywhere === 'yes') {
				$(window).click(function (event) {
					if (event.target === openmodal){
						$(openmodal).toggle()
					}
				});
			}

			$(closebutton).click(function () {
				if (effect_type === 'fade'){
					$(openmodal).fadeToggle(effect_durration);
				} else if (effect_type === 'slide'){
					$(openmodal).slideToggle(effect_durration);
				} else {
					$(openmodal).toggle(effect_durration);
				}
			});

		});
	};

})(jQuery);