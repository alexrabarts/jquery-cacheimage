/*
 * cacheImage: a jQuery plugin
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  $.extend($, {
    cacheImage: function (src, options) {
      if (typeof src === 'object') {
        $.each(src, function () {
          $.cacheImage(String(this), options);
        });

        return;
      }

      var image = new Image();

      options = options || {};

      $.each(['load', 'error', 'abort'], function () { // Callbacks
        var e = String(this);
        if (typeof options[e] === 'function') { $(image).bind(e, options[e]); }

        if (typeof options.complete === 'function') {
          $(image).bind(e, options.complete);
        }
      });

      image.src = src;

      return image;
    }
  });

  $.extend($.fn, {
    cacheImage: function (options) {
      return this.each(function () {
        $.cacheImage(this.src, options);
      });
    }
  });
})(jQuery);
