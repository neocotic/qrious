# [qrcode.js](http://forchoon.com/projects/javascript/qrcode-js/)

A pure JavaScript library for [QR code](http://en.wikipedia.org/wiki/QR_code)
generation using [HTML5](http://en.wikipedia.org/wiki/HTML5).

Originally based on [jsqrencode](http://code.google.com/p/jsqrencode/) but with
cleaner and safer code not to mention a simple and understandable API.

This library requires HTML5 to work as its
[&lt;canvas&gt;](https://developer.mozilla.org/en/DOM/HTMLCanvasElement)
element is used to render the QR code.

## Creating a QR code

All the data used by qrcode.js are *optional* and you can choose to provide no
information at all if you wish. The API has two simple methods that take a
single object argument that can contain the following values;

* *{String}* **background** - The background colour to be used.
  * White (`#fff`) is used if not specified.
* *{HTMLCanvasElement}* **canvas** - A `<canvas>` element in which the QR code
  should be rendered.
  * Creates a new `<canvas>` element if not specified.
* *{String}* **foreground** - The foreground colour to be used.
  * Black (`#000`) is used if not specified.
* *{HTMLImageElement}* **image** - An `<img>` element in which the QR code
  should be rendered.
  * Creates a new `<img>` element if not specified.
  * *Only* used by `QRCode.generateImage`.
* *{String}* **level** - The ECC (error correction capacity) level to be
  applied (L, M, Q, H).
  * The `L` ECC level is used if not specified.
* *{Number}* **size** - The module size of the generated QR code (1-10). This
  is the actual size of the QR code symbol and is scaled to 25 pixels
  (e.g. 1 = 25px, 3 = 75px).
  * Uses a module size of `4` will be used if not specified.
* *{String}* **value** - The value to be encoded in the generated QR code.
  * Uses an empty string if not specified.

### Using &lt;img&gt;

```
QRCode.generateImage([data])
```

This returns either a new `<img>` element containing the generated QR code or
the value of `data.image` if it was specified.

**Example:**

Add an image of a rendered QR code to a page.

``` html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="qrcode.js"></script>
        <script type="text/javascript">
            function loadQR() {
                document.body.appendChild(QRCode.generateImage({
                    level: 'H',
                    size: 4,
                    value: 'http://forchoon.com/projects/javascript/qrcode-js/'
                }));
            }
        </script>
    </head>
    <body onload="loadQR();"></body>
</html>
```

![qrcode.js Example
1](http://forchoon.com/wp-content/uploads/2011/08/qrcode-js-1.png)

### Using &lt;canvas&gt;

```
QRCode.generateCanvas([data])
```

This returns either a new `<canvas>` element containing the generated QR code
or the value of `data.canvas` if it was specified.

**Example:**

Render the QR code in an existing canvas on a page.

``` html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="qrcode.js"></script>
        <script type="text/javascript">
            function loadQR() {
                QRCode.generateCanvas({
                    canvas: document.getElementById('qr'),
                    level: 'L',
                    size: 4,
                    value: 'https://github.com/neocotic/qrcode.js'
                });
            }
        </script>
    </head>
    <body onload="loadQR();">
        <canvas id="qr"></canvas>
    </body>
</html>
```

![qrcode.js Example
2](http://forchoon.com/wp-content/uploads/2011/08/qrcode-js-2.png)

## What is ECC?

ECC (error correction capacity) levels represent the amount of data that can be
restored if the QR code symbol is smudged or damanged. There are four ECC
levels ranging from **L** (smallest) to **H** (best);

* **L** - Approx. 7% of codewords can be restored
* **M** - Approx. 15% of codewords can be restored
* **Q** - Approx. 25% of codewords can be restored
* **H** - Approx. 30% of codewords can be restored

## Is that all?

Well actually, no. All parameters wrapped in square brackets `[...]` are
optional and do not need to be provided.