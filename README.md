# [qrcode.js](http://forchoon.com/projects/javascript/qrcode-js/)

A pure JavaScript library for [QR code](http://en.wikipedia.org/wiki/QR_code)
generation using [HTML5](http://en.wikipedia.org/wiki/HTML5).

## &lt;img&gt;

```
QRCode.image([data])
```

## &lt;canvas&gt;

```
QRCode.canvas([data])
```

## Data Object

All properties of the `data` object are *optional*, including the parameter
itself.

* *{String}* **background** - The background colour to be used (defaults to
  white).
* *{HTMLCanvasElement}* **canvas** - A `<canvas>` element in which the QR code
  should be rendered (creates a new `<canvas>` element by default).
* *{String}* **foreground** - The foreground colour to be used (defaults to
  black).
* *{HTMLImageElement}* **image** - An `<img>` element in which the QR code
  should be rendered (creates a new `<img>` element by default).
  * This property is *only* used by `QRCode.image` & `QRCode.generateImage`.
* *{String}* **level** - The ECC (error correction capacity) level to be
  applied (defaults to `L`).
* *{Number}* **size** - The module size of the generated QR code (defaults to
  `4`).
* *{String}* **value** - The value to be encoded in the generated QR code
  (defaults to an empty string).

## Further Information

If you want more information or examples of using this library please visit the
project's homepage;

<http://forchoon.com/projects/javascript/qrcode-js/>