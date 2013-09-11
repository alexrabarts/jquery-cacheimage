# cacheImage: a jQuery plugin

cacheImage is a simple jQuery plugin for pre-caching images.  The
plugin can be used to eliminate flashes of unstyled content (FOUC) and
improve perceived page load time.  Callbacks for load, error and abort
events are provided.

## Usage

Cache an image:

<pre>
  $.cacheImage('/path/to/image.png');
  // or if you have images hidden in the DOM:
  $('#myImage').cacheImage();
</pre>

Cache several images:

<pre>
  $.cacheImage(['/path/to/an/image.png', '/path/to/another/image.png'])
  // or if you have images hidden in the DOM:
  $('#myImages img').cacheImage();
</pre>

Add some callbacks:

<pre>
  $.cacheImage('/path/to/image.png', {
    load    : function (e) { console.log('Loaded',    this, e); },
    error   : function (e) { console.log('Error',     this, e); },
    abort   : function (e) { console.log('Aborted',   this, e); },
    // complete callback is called on load, error and abort
    complete: function (e) { console.log('Completed', this, e); }
  });
</pre>

# Licensing

Licensed under the MIT:
http://www.opensource.org/licenses/mit-license.php

Copyright (c) 2011 Stateless Systems (http://statelesssystems.com)
