      .oooooo.      ooooooooo.    o8o
     d8P'  `Y8b     `888   `Y88.  `"'
    888      888     888   .d88' oooo   .ooooo.  oooo  oooo   .oooo.o
    888      888     888ooo88P'  `888  d88' `88b `888  `888  d88(  "8
    888      888     888`88b.     888  888   888  888   888  `"Y88b.
    `88b    d88b     888  `88b.   888  888   888  888   888  o.  )88b
     `Y8bood8P'Ybd' o888o  o888o o888o `Y8bod8P'  `V88V"V8P' 8""888P'

[QRious](https://github.com/neocotic/qrious) is a pure JavaScript library for generating QR codes using HTML5 canvas.

[![Chat](https://img.shields.io/gitter/room/neocotic/qrious.svg?style=flat-square)](https://gitter.im/neocotic/qrious)
[![Build Status](https://img.shields.io/travis/neocotic/qrious/develop.svg?style=flat-square)](https://travis-ci.org/neocotic/qrious)
[![Optional Dependency Status](https://img.shields.io/david/optional/neocotic/qrious.svg?style=flat-square)](https://david-dm.org/neocotic/qrious?type=optional)
[![Dev Dependency Status](https://img.shields.io/david/dev/neocotic/qrious.svg?style=flat-square)](https://david-dm.org/neocotic/qrious?type=dev)
[![License](https://img.shields.io/npm/l/qrious.svg?style=flat-square)](https://github.com/neocotic/qrious/blob/master/LICENSE.md)
[![Release](https://img.shields.io/npm/v/qrious.svg?style=flat-square)](https://www.npmjs.com/package/qrious)

* [Install](#install)
* [Examples](#examples)
* [API](#api)
* [Migrating from v1](#migrating-from-v1)
* [Bugs](#bugs)
* [Contributors](#contributors)
* [License](#license)

## Install

Install using the package manager for your desired environment(s):

``` bash
$ npm install --save qrious
# OR:
$ bower install --save qrious
```

You'll need to have at least [Node.js](https://nodejs.org) installed and you'll only need [Bower](https://bower.io) if
you want to install that way instead of using `npm`.

If you want to simply download the file to be used in the browser you can find them below:

* [Development Version](https://cdn.rawgit.com/neocotic/qrious/master/dist/umd/qrious.js) (123kb - [Source Map](https://cdn.rawgit.com/neocotic/qrious/master/dist/umd/qrious.js.map))
* [Production Version](https://cdn.rawgit.com/neocotic/qrious/master/dist/umd/qrious.min.js) (37kb - [Source Map](https://cdn.rawgit.com/neocotic/qrious/master/dist/umd/qrious.min.js.map))

### Node.js Dependencies

If you plan on using QRious in the browser then you're good to go!

However, if you plan on using it on a server using Node.js, then you'll find that QRious depends heavily on [node-canvas](https://github.com/Automattic/node-canvas)
to provide HTML5 canvas support, however, since his library is entirely dependant on [Cairo](http://cairographics.org)
being installed as an external dependency, QRious only has this marked as an `optionalDependency`. That said; it won't
work without it on Node.js. Sorry. Please see their wiki on steps on how to do this on various platforms:

https://github.com/LearnBoost/node-canvas/wiki/_pages

If you are planning on installing QRious through `npm` for use in the browser, then you can avoid unnecessarily
installing the `canvas` dependency by using the following:

``` bash
$ npm install --save --no-optional qrious
```

## Examples

In the browser:

``` html
<!DOCTYPE html>
<html>
  <body>
    <canvas id="qr"></canvas>

    <script src="/path/to/qrious.js"></script>
    <script>
      (function() {
        const qr = new QRious({
          element: document.getElementById('qr'),
          value: 'https://github.com/neocotic/qrious'
        });
      })();
    </script>
  </body>
</html>
```

In Node.js:

``` javascript
const express = require('express');
const QRious = require('qrious');

const app = express();

app.get('/qr', (req, res) => {
  const qr = new QRious({ value: 'https://github.com/neocotic/qrious' });

  res.end(new Buffer(qr.toDataURL(), 'base64'));
});

app.listen(3000);
```

Open up `demo.html` in your browser to play around a bit.

## API

Simply create an instance of `QRious` and you've done most of the work. You can control many aspects of the QR code
using the following fields on your instance:

| Field           | Type   | Description                                        | Default       |
| --------------- | ------ | -------------------------------------------------- | ------------- |
| background      | String | Background color of the QR code                    | `"white"`     |
| backgroundAlpha | Number | Background alpha of the QR code                    | `1.0`         |
| foreground      | String | Foreground color of the QR code                    | `"black"`     |
| foregroundAlpha | Number | Foreground alpha of the QR code                    | `1.0`         |
| level           | String | Error correction level of the QR code (L, M, Q, H) | `"L"`         |
| mime            | String | MIME type used to render the image for the QR code | `"image/png"` |
| padding         | Number | Padding for the QR code (pixels)                   | `null` (auto) |
| size            | Number | Size of the QR code (pixels)                       | `100`         |
| value           | String | Value encoded within the QR code                   | `""`          |

``` javascript
const qr = new QRious();
qr.background = 'green';
qr.backgroundAlpha = 0.8;
qr.foreground = 'blue';
qr.foregroundAlpha = 0.8;
qr.level = 'H';
qr.padding = 25;
qr.size = 500;
qr.value = 'https://github.com/neocotic/qrious';
```

The QR code will automatically update when you change one of these fields, so be wary when you plan on changing lots of
fields at the same time. You probably want to make a single call to `set(options)` instead as it will only update the QR
code once:

``` javascript
const qr = new QRious();
qr.set({
  background: 'green',
  backgroundAlpha: 0.8,
  foreground: 'blue',
  foregroundAlpha: 0.8,
  level: 'H',
  padding: 25,
  size: 500,
  value: 'https://github.com/neocotic/qrious'
});
```

These can also be passed as options to the constructor itself:

``` javascript
const qr = new QRious({
  background: 'green',
  backgroundAlpha: 0.8,
  foreground: 'blue',
  foregroundAlpha: 0.8,
  level: 'H',
  padding: 25,
  size: 500,
  value: 'https://github.com/neocotic/qrious'
});
```

You can also pass in an `element` option to the constructor which can be used to generate the QR code using an existing
DOM element. `element` must either be a `<canvas>` element or an `<img>` element which can then be accessed via the
`canvas` or `image` fields on the instance respectively. An element will be created for whichever one isn't provided or
for both if no `element` is specified, which means that they can be appeneded to the document at a later time.

``` javascript
const qr = new QRious({
  element: document.querySelector('canvas'),
  value: 'https://github.com/neocotic/qrious'
});

qr.canvas.parentNode.appendChild(qr.image);
```

A reference to the `QRious` instance is also stored on both of the elements for convenience.

``` javascript
const canvas = document.querySelector('canvas');
const qr = new QRious({
  element: canvas,
  value: 'https://github.com/neocotic/qrious'
});

qr === canvas.qrious;
//=> true
```

### `toDataURL([mime])`

Generates a base64 encoded data URI for the QR code. If you don't specify a MIME type, it will default to the one
passed to the constructor as an option or the default value for the `mime` option.

``` javascript
const qr = new QRious({
  value: 'https://github.com/neocotic/qrious'
});

qr.toDataURL();
//=> "data:image/png;base64,iVBOR...AIpqDnseH86KAAAAAElFTkSuQmCC"
qr.toDataURL('image/jpeg');
//=> "data:image/jpeg;base64,/9j/...xqAqIqgKFAAAAAq3RRQAUUUUAf/Z"
```

### `VERSION`

The current version of `QRious`.

``` javascript
QRious.VERSION;
//=> "2.3.0"
```

## Migrating from v1

If you've been using v1 (`qr`) then you can find details about what's changed and a guide on how to migrate to v2
(`Qrious`) below:

https://github.com/neocotic/qrious/wiki/Migrating-from-v1

You can also find the code and documentation for the v1 below:

https://github.com/neocotic/qrious/tree/1.1.4

## Bugs

If you have any problems with QRious or would like to see changes currently in development you can do so
[here](https://github.com/neocotic/qrious/issues).

## Contributors

If you want to contribute, you're a legend! Information on how you can do so can be found in
[CONTRIBUTING.md](https://github.com/neocotic/qrious/blob/master/CONTRIBUTING.md). We want your suggestions and pull
requests!

A list of QRious contributors can be found in [AUTHORS.md](https://github.com/neocotic/qrious/blob/master/AUTHORS.md).

## License

Copyright © 2017 Alasdair Mercer  
Copyright © 2010 Tom Zerucha

See [LICENSE.md](https://github.com/neocotic/qrious/blob/master/LICENSE.md) for more information on our GPLv3 license.
