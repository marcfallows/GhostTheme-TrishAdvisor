(function( $ ) {

    "use strict";

    $.fn.scrolled = function (options) {

        var $this = $(this);

        options = $.extend({
            className: 'scrolled',
            targetElement: document.body
        }, options);

        var $targetElement = $(options.targetElement);
        var scrolled;

        updateScrolled();
        $this.scroll(updateScrolled);

        function updateScrolled() {
            if ($this.scrollTop() > 0 && !scrolled) {
                scrolled = true;
                $targetElement.addClass('scrolled');
            } else if ($this.scrollTop() <= 0 && scrolled) {
                scrolled = false;
                $targetElement.removeClass('scrolled');
            }
        }
    };

})( window.jQuery );
