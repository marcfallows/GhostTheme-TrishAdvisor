/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".nav-toggle, .nav-cover").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened");
        });

        $(".main-nav").scrolled();

        // Open external links in new tab.
        $(document.links).filter(function() {
            return this.hostname != window.location.hostname;
        }).attr('target', '_blank');
    });
})(jQuery);