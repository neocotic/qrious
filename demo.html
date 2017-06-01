<!DOCTYPE html>
<!--
QRious
Copyright (C) 2017 Alasdair Mercer
Copyright (C) 2010 Tom Zerucha

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <title>QRious Demo</title>

  <style>
    html {
      height: 100%;
      font-family: sans-serif;
    }

    body {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      height: calc(100% - 100px);
      margin: 50px 0;
      background-color: #ccc;
    }

    *, :after, :before {
      box-sizing: border-box;
    }

    main {
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      height: 100%;
    }

    main section {
      min-width: 250px;
      max-width: 50%;
      height: 100%;
      text-align: center;
    }

    main img {
      box-shadow: 0 0 10px 5px #666;
    }

    main form {
      padding: 25px 0 50px 0;
      text-align: left;
    }

    main form label {
      display: block;
      margin-top: 10px;
      color: #444;
      font-weight: bold;
    }

    main form input,
    main form select {
      width: 100%;
    }

    main form input:invalid {
      outline: 2px solid #f00;
      color: #f00;
    }
  </style>
</head>
<body>
<main>
  <section>
    <img id="qrious">

    <form autocomplete="off">
      <label>
        value
        <input type="text" name="value" value="QRious" spellcheck="false">
      </label>

      <label>
        size
        <input type="number" name="size" placeholder="100" min="100" max="1000" value="250">
      </label>

      <label>
        padding
        <input type="number" name="padding" placeholder="Auto" min="0">
      </label>

      <label>
        level
        <select name="level">
          <option value="L">L - 7% damage</option>
          <option value="M">M - 15% damage</option>
          <option value="Q">Q - 25% damage</option>
          <option value="H">H - 30% damage</option>
        </select>
      </label>

      <label>
        background color
        <input type="color" name="background" value="#ffffff">
      </label>

      <label>
        background alpha
        <input type="number" name="backgroundAlpha" placeholder="1" min="0" max="1" step="0.1" value="1">
      </label>

      <label>
        foreground color
        <input type="color" name="foreground" value="#000000">
      </label>

      <label>
        foreground alpha
        <input type="number" name="foregroundAlpha" placeholder="1" min="0" max="1" step="0.1" value="1">
      </label>
    </form>
  </section>
</main>

<script src="./dist/qrious.js"></script>
<script>
  (function() {
    var $background = document.querySelector('main form [name="background"]');
    var $backgroundAlpha = document.querySelector('main form [name="backgroundAlpha"]');
    var $foreground = document.querySelector('main form [name="foreground"]');
    var $foregroundAlpha = document.querySelector('main form [name="foregroundAlpha"]');
    var $level = document.querySelector('main form [name="level"]');
    var $section = document.querySelector('main section');
    var $padding = document.querySelector('main form [name="padding"]');
    var $size = document.querySelector('main form [name="size"]');
    var $value = document.querySelector('main form [name="value"]');

    var qr = window.qr = new QRious({
      element: document.getElementById('qrious'),
      size: 250,
      value: 'QRious'
    });

    $background.addEventListener('change', function() {
      qr.background = $background.value || null;
    });

    $backgroundAlpha.addEventListener('change', function() {
      qr.backgroundAlpha = $backgroundAlpha.value || null;
    });

    $foreground.addEventListener('change', function() {
      qr.foreground = $foreground.value || null;
    });

    $foregroundAlpha.addEventListener('change', function() {
      qr.foregroundAlpha = $foregroundAlpha.value || null;
    });

    $level.addEventListener('change', function() {
      qr.level = $level.value;
    });

    $padding.addEventListener('change', function() {
      if ($padding.validity.valid) {
        qr.padding = $padding.value !== '' ? $padding.value : null;
      }
    });

    $size.addEventListener('change', function() {
      if (!$size.validity.valid) {
        return;
      }

      qr.size = $size.value || null;

      $section.style.minWidth = qr.size + 'px';
    });

    $value.value = 'QRious';
    $value.addEventListener('input', function() {
      qr.value = $value.value;
    });
  })();
</script>
</body>
</html>
