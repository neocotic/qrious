                    __           
       __   _ __   /\_\    ____  
     /'__`\/\`'__\ \/\ \  /',__\ 
    /\ \L\ \ \ \/__ \ \ \/\__, `\
    \ \___, \ \_\\_\_\ \ \/\____/
     \/___/\ \/_//_/\ \_\ \/___/ 
          \ \_\    \ \____/      
           \/_/     \/___/       

[qr.js][] is a pure JavaScript library for [QR code][] generation using canvas.

## Standard Usage

``` javascript
qr.canvas([data|value][, callback(error, canvas)])
qr.image([data|value][, callback(error, image)])
qr.toDataURL([data|value][, callback(error, url)])
qr.save([data|value][, path][, callback(error)])
```

### First Argument

[qr.js][] allows either a `data` object or string `value` to be passed as the
first argument. If a string is used all options will use their default value;
otherwise they can be set using the following properties;

* `background` - *Optional:* The background colour to be used (defaults to
  `"#fff"`).
* `canvas` - *Optional:* The `<canvas>` element in which the QR code should be
  rendered (creates a new `<canvas>` element by default).
* `foreground` - *Optional:* The foreground colour to be used (defaults to
  `"#000"`).
* `image` - *Optional:* The `<img>` element in which the QR code should be
  rendered (creates a new `<img>` element by default).
  * This property is only used by `qr.image`.
* `level` - *Optional:* The ECC (error correction capacity) level to be applied
  (defaults to `"L"`).
* `path` - *Optional:* The path to which the QR code should be saved.
  * This property is only used by `qr.save`.
  * This property is only required when running outside of a browser and is
    ingored otherwise.
* `size` - *Optional:* The module size of the generated QR code (defaults to
  `4`).
* `value` - *Optional:* The value to be encoded in the generated QR code
  (defaults to `""`).

## Miscellaneous

``` javascript
qr.noConflict([callback(error)])
qr.VERSION
```

## Bugs

If you have any problems with this library or would like to see the changes
currently in development you can do so here;

https://github.com/neocotic/qr.js/issues

## Questions?

Take a look at `docs/qr.html` to get a better understanding of what the code is
doing.

If that doesn't help, feel free to follow me on Twitter, [@neocotic][].

However, if you want more information or examples of using this library please
visit the project's homepage;

http://neocotic.com/qr.js

[@neocotic]: https://twitter.com/#!/neocotic
[qr.js]: http://neocotic.com/qr.js
[QR code]: http://en.wikipedia.org/wiki/QR_code