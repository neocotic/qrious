# Contributing

If you have any questions about [QRious](https://github.com/neocotic/qrious) please feel free to
[raise an issue](https://github.com/neocotic/qrious/issues/new).

Please [search existing issues](https://github.com/neocotic/qrious/issues) for the same feature and/or issue before
raising a new issue. Commenting on an existing issue is usually preferred over raising duplicate issues.

Ensure that all files confirm to the coding standards and that you update any relevant unit tests (in the `test`
directory) and that all tests are currently passing. This can be done easily via command-line:

``` bash
# install/update package dependencies
$ npm install
# run test suite
$ npm test
```

The only dependency here is just [Node.js](https://nodejs.org). Unfortunately, the tests don't currently cover enough of
the QR encoding logic to be relied upon alone. Feel free to make use of the `demo.html` to test your changes locally
before committing.

Use the same coding style as the rest of the code base and only rebuild the `dist/qrious.js` file, leaving the minified
files alone as these are only updated immediately prior to a version being released. This can be done using the
following command:

``` bash
$ npm run build
```

All pull requests should be made to the `develop` branch.

Don't forget to add your details to the list of [AUTHORS.md](https://github.com/neocotic/qrious/blob/master/AUTHORS.md)
if you want your contribution to be recognized by others.
