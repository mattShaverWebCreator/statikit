# Statikit

![](https://img.shields.io/github/package-json/v/miikis/statikit.svg?color=tomato&label=latest&style=flat-square)

This is a bare-bones webpack starter for small, static sites.

## Usage
1. Fork this repo.
2. When you create a new repo using GitHub's UI, select Statikit as the template.
3. Run `yarn install` to install dependencies
4. `yarn start` for development
5. `yarn build` for production

## Features

-   [x] Write your site content in [Pug](https://pugjs.org/api/getting-started.html) or [Handlebars](https://handlebarsjs.com/) and take advantage of template inheritance so you can stop repeating common HTML blocks, like `<header>`s and `<footer>`s.
-   [x] Style your website with [Sass](https://sass-lang.com/) and have your CSS output auto-prefixed and minified.
-   [x] Write in the newest JavaScript syntax (ES6+).
-   [x] Automagically optimize the size of your images. Images less than 7kb in size will be converted to base-64 URIs. Everything else is run through image optimizers. Supported file formats include:
    -   [x] PNG
    -   [x] JPEG/JPG
    -   [x] Gif
    -   [x] SVG
-   [x] Have fonts & videos automatically transferred to your production build.
-   [x] Watch your browser instantly reload as you save your files, thanks to [webpack-dev-server](https://webpack.js.org/configuration/dev-server/).
-   [x] Default prettier config. Use `yarn format` if you ever need to reformat all of your html, css, js and json files. But, if you have a prettier extension installed in your IDE, you'll probably never need to.

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
