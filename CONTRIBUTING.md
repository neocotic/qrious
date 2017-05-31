# Contributing

If you have any questions about [QRious](https://github.com/neocotic/qrious) please feel free to
[raise an issue](https://github.com/neocotic/qrious/issues/new).

Please [search existing issues](https://github.com/neocotic/qrious/issues) for the same feature and/or issue before
raising a new issue. Commenting on an existing issue is usually preferred over raising duplicate issues.

Please ensure that all files conform to the coding standards, using the same coding style as the rest of the code base.
This can be done easily via command-line:

``` bash
# install/update package dependencies
$ npm install
# run test suite
$ npm test
```

You must have at least [Node.js](https://nodejs.org) version 4 or newer and [npm](https://npmjs.com) installed version 5
or newer installed.

Feel free to make use of the `demo.html` to test your changes locally before committing. You will need to rebuild the
distribution files in order to see your changes in the `demo.html`, but you can do so by running the following command:

``` bash
$ npm run build
```

All pull requests should be made to the `develop` branch.

Don't forget to add your details to the list of [AUTHORS.md](https://github.com/neocotic/qrious/blob/master/AUTHORS.md)
if you want your contribution to be recognized by others.
