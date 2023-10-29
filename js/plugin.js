
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.advancedLightbox = factory(root.jQuery);
    }
}(this, function ($) {

    function AdvancedLightbox(options) {
        this.album = [];
        this.currentImageIndex = void 0;
        this.init();

        // New options and defaults
        this.options = $.extend({}, this.constructor.defaults, {
            // Add new options here
            animationSpeed: 400,
            showThumbnails: true,
            thumbnailWidth: 100,
            thumbnailHeight: 60,
            // Add more options as needed
        });
        this.option(options);
    }

    // Add new default options
    AdvancedLightbox.defaults = {
        albumLabel: 'Image %1 of %2',
        alwaysShowNavOnTouchDevices: false,
        fadeDuration: 600,
        fitImagesInViewport: true,
        // Add more default options here
    };

    // Add new methods and functionalities as needed

    AdvancedLightbox.prototype.init = function () {
        // Initialize your advanced lightbox
        // Add code here to set up the new features
    };

    AdvancedLightbox.prototype.showThumbnails = function () {
        // Add code here to display thumbnails of images in the album
    };

    AdvancedLightbox.prototype.hideThumbnails = function () {
        // Add code here to hide thumbnails
    };

    // Modify or add methods for additional functionalities

    return new AdvancedLightbox();
}));
