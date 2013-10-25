(function($){
	$.fn.accordion = function() {
		var el = this;
		var ddHeight;
		ddHeight = new Array();

		el.addClass('enhance');
		setHeight();

		function setHeight() {
			el.find('dd').each(function(i) {
				var dd = $(this);

				dd.css('height', '100%');
				ddHeight[i] = dd.height();
				dd.removeAttr('style');
				dd.addClass('closed');
			});
		}

		var hash = location.hash;
		var hasHash = el.find('dt a[href="'+hash+'"]');

		if (hasHash.length) {
			var toExpand = hasHash.parent().next('dd');
			var i = toExpand.index('dd');

			toExpand
				.attr('id', 'active')
				.css('height', ddHeight[i]+'px')
				.removeClass('closed');
		}

		el.find('dt a').bind('touchstart', function(e) {
			e.preventDefault();

			var toExpand = $(this).parent().next('dd');
			var i = toExpand.index('dd');

			if (toExpand.attr('id') == 'active') {
				toExpand
					.removeAttr('id')
					.removeAttr('style')
					.addClass('closed');

				location.hash = '';
			} else {
				var active = toExpand.parent().find('#active');

				if (active) {
					active
						.removeAttr('id')
						.removeAttr('style')
						.addClass('closed');
				}

				toExpand
					.attr('id', 'active')
					.css('height', ddHeight[i]+'px')
					.removeClass('closed');

				location.hash = $(this).attr('href');
			}
		});

		return function() {
			setHeight();
		};
	}
})(jQuery);