# imageCache: a jQuery plugin

imageCache is a simple jQuery plugin for pre-caching images.  The
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

# Licensing

Licensed under the MIT:
http://www.opensource.org/licenses/mit-license.php

Copyright (c) 2008 Stateless Systems (http://statelesssystems.com)
