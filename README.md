# Rachis Directory Structure Resolver

[![npm version][npmsemver-image]][npmsemver-url]
[![Build Status][ci-image]][ci-url]
[![Code Climate][cq-image]][cq-url]
[![Dependencies][deps-image]][deps-url]
[![Dev Dependencies][dev-deps-image]][dev-deps-url]
[![License][license-image]][license-url]

> Rachis resolver for nested directory structures

## Table of Contents

* [Installation](#installation)
* [How it works](#how-it-works)
* [Contributing](#contributing)
    * [Bug reports, feature requests and discussion](#contributing)
    * [Developing](#contributing)
* [License](#license)
* [Frequently Asked Questions](#faq)

## <a name="installation"></a> Installation

`RachisDirectoryStructure` is available on `npm`

    npm install --save rachis-directory-structure

## <a name="how-it-works"></a> How it works

Resolves API elements (resources, methods or plugin data) that are subdirectories

* / (api root)
	* /resource

## <a name="contributing"></a> Contributing

### <a name="bugs"></a> Bug reports, feature requests and discussion

Feel free to use the [GitHub issue tracker](https://github.com/fcanela/rachis-directory-structure/issues) to report any bugs or file feature requests. In case you found a bug and have no GitHub account, feel free to email me: fcanela.dev at gmail dot com.

### <a name="developing"></a> Developing

Pull requests are welcome. I also love technical discussions, so feel free to open a issue on the [tracker](https://github.com/fcanela/rachis-directory-structure/issues).

To begin developing clone the GitHub repository and install dependencies with `npm install`.

The module has some `npm` scripts which could be useful for developing purpose:

* `npm start` watches for changes and runs tests
* `npm test` runs tests
* `npm run lint` lints the code

## <a name="license"></a> License

Copyright (c) 2016 Francisco Canela. Licensed under the MIT license.

## <a name="faq"></a> Frequently Asked Questions

### Is this production ready?

I use [Semver](http://semver.org/) for versioning.

Until the software reaches 1.0.0 I would discourage the use for non-recreative projects.

[npmsemver-image]: https://img.shields.io/npm/v/rachis-directory-structure.svg
[npmsemver-url]: https://www.npmjs.com/package/rachis-directory-structure
[ci-image]: https://travis-ci.org/fcanela/rachis-directory-structure.svg?branch=master
[ci-url]: https://travis-ci.org/fcanela/rachis-directory-structure
[cq-image]: https://codeclimate.com/github/fcanela/rachis-directory-structure/badges/gpa.svg
[cq-url]: https://codeclimate.com/github/fcanela/rachis-directory-structure
[deps-image]: https://david-dm.org/fcanela/rachis-directory-structure.svg
[deps-url]: https://david-dm.org/fcanela/rachis-directory-structure
[dev-deps-image]: https://david-dm.org/fcanela/rachis-directory-structure/dev-status.svg
[dev-deps-url]: https://david-dm.org/fcanela/rachis-directory-structure#info=devDependencies
[license-image]: https://img.shields.io/npm/l/rachis-directory-structure.svg
[license-url]: LICENSE
