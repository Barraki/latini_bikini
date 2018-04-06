$(function () {
	$(document).ready(function () {
		$(".animsition").animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: 1500,
			outDuration: 800,
			linkElement: '.animsition-link',
			// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
			loading: true,
			loadingParentElement: 'body', //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: ['animation-duration', '-webkit-animation-duration'],
			// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			overlay: false,
			overlayClass: 'animsition-overlay-slide',
			overlayParentElement: 'body',
			transition: function (url) {
				window.location.href = url;
			}
		});
	});
	// Custom JS
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})

	var owl = $(".owl-carousel");
	owl.owlCarousel();
	//$(".next") - находим нашу кнопку
	$(".next").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev").click(function () {
		owl.trigger("prev.owl.carousel");
	});


	$('.hamburger').click(function () {
		element = $('.mobile-menu');
		display = element.css('display');
		if (display == 'none')
			$('.mobile-menu').slideDown(400);
		if (display == 'block')
			$('.mobile-menu').slideUp(400);
	});

	$('.mobile-menu a').click(function () {
		$('.mobile-menu').slideUp(400);
	});


	$(function () {
		$("#accordion").accordion({
			collapsible: true,
			heightStyle: "content"
		});
	});
	$(function () {
		$("#accordion-1").accordion({
			collapsible: true,
			heightStyle: "content"
		});
	});

	$(function () {
		$("#accordion-2").accordion({
			heightStyle: "fill"
		});

		$("#accordion-resizer").resizable({
			minHeight: 140,
			minWidth: 200,
			resize: function () {
				$("#accordion-2").accordion("refresh");
			}
		});
	});

	$(function () {
		$("#accordion-3").accordion({
			collapsible: true,
			heightStyle: "content"
		});
	});

	$(function () {
		$("#accordion-4").accordion({
			collapsible: true,
			heightStyle: "content"
		});
	});

	var keypressSlider = document.getElementById('keypress');
	var input0 = document.getElementById('input-with-keypress-0');
	var input1 = document.getElementById('input-with-keypress-1');
	var inputs = [input0, input1];

	noUiSlider.create(keypressSlider, {
		start: [100, 30000],
		connect: true,
		direction: 'ltr',
		step: 100,
		range: {
			'min': 0,
			'15%' : 100,
			'85%' : 30000,
			'max': 35000,
		},
		format: wNumb({
			decimals: 0,
			suffix: '₽',
			thousand: ' '
		})
	});

	keypressSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = values[handle];
	});

	function setSliderHandle(i, value) {
		var r = [null, null];
		r[i] = value;
		keypressSlider.noUiSlider.set(r);
	}

	// Listen to keydown events on the input field.
	inputs.forEach(function (input, handle) {

		input.addEventListener('change', function () {
			setSliderHandle(handle, this.value);
		});

		input.addEventListener('keydown', function (e) {

			var values = keypressSlider.noUiSlider.get();
			var value = Number(values[handle]);

			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
			var steps = keypressSlider.noUiSlider.steps();

			// [down, up]
			var step = steps[handle];

			var position;

			// 13 is enter,
			// 38 is key up,
			// 40 is key down.
			switch (e.which) {

				case 13:
					setSliderHandle(handle, this.value);
					break;

				case 38:

					// Get step to go increase slider value (up)
					position = step[1];

					// false = no step is set
					if (position === false) {
						position = 1;
					}

					// null = edge of slider
					if (position !== null) {
						setSliderHandle(handle, value + position);
					}

					break;

				case 40:

					position = step[0];

					if (position === false) {
						position = 1;
					}

					if (position !== null) {
						setSliderHandle(handle, value - position);
					}

					break;
			}
		});
	});

	$('#page-navigation').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, ...  195],
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})

});