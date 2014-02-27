/*
 * cacheImage: a jQuery plugin
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
    $.extend($, {
        cacheImage: function (src, options, deferred) {

            if (typeof src === 'object') {
                var deferredObjs = [];

                $.each(src, function (i) {
                    deferredObjs.push($.Deferred());
                    $.cacheImage(String(this), options, deferredObjs[i]);
                });
                if (!deferred) {
                    $.when.apply($, deferredObjs).done(function() {
                        if (typeof options.allDone === 'function') {
                            options.allDone();
                        }
                    });
                }

                return;
            }

            if (!src) {
                deferred.resolve();
                if (typeof options.complete === 'function') {
                    options.complete();
                }
            }

            var image = new Image();

            options = options || {};

            $.each(['load', 'error', 'abort'], function () { // Callbacks
                var e = String(this);
                if (typeof options[e] === 'function') { $(image).bind(e, options[e]); }

                $(image).bind(e, function(){
                    if (typeof options.complete === 'function') {
                        options.complete();
                    }

                    deferred.resolve();
                });
            });

            image.src = src;

            return image;
        }
    });


    $.extend($.fn, {
        cacheImage: function (options) {

            var images = [];
            this.each(function(){
                images.push(this.src);
            });

            $.cacheImage(images, options);
            return this;
        }
    });
})(jQuery);
