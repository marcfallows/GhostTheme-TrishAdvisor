(function($, undefined) {

    "use strict";

    var $window = $(window);

    $.fn.scrolled = function (options) {

        var $targetElement = $(this);

        options = $.extend({
            className: 'scrolled'
        }, options);

        var cachedTop = $targetElement.css('position') == 'fixed'
            ? $targetElement.position().top
            : $targetElement.offset().top;

        updateScrolled();
        $window.scroll(updateScrolled);

        function updateScrolled() {
            var currentScrollTop = $(this).scrollTop();

            if (currentScrollTop > cachedTop ) {
                $targetElement.addClass(options.className);
            } else {
                $targetElement.removeClass(options.className);
            }
        }
    };

})(jQuery);
