![Quasar Framework logo](https://cdn.rawgit.com/quasarframework/quasar-art/863c14bd/dist/svg/quasar-logo-full-inline.svg)

# Quasar Framework PWA App Template
> [PWA](https://developers.google.com/web/progressive-web-apps/) Starter Kit for a Quasar Framework Project. Compatible with Quasar v0.14+.

Based on the work of Addy Osmani (https://github.com/vuejs-templates/pwa).

## Usage
Use Quasar CLI to generate a new project using this template:

``` bash
# install Quasar CLI if you don't have it already
$ npm install -g quasar-cli

# generate a project folder with this template
$ quasar init pwa my-project

$ cd my-project
$ npm install
$ quasar dev
```

> Important! Do not use Quasar wrappers (Cordova/Electron) on top of this template.

## Documentation

- This template builds on top of the main/default Quasar webpack template.

- Check out the [official Quasar guide](http://quasar-framework.org/guide/) for general information about Quasar that is not specific to this template.

## What's Included

* Service Worker precaching of application shell + static assets (prod)
* Script (async chunk) preloading using `<link rel="preload">`
* Web Application Manifest + favicons
* Mobile-friendly meta-viewport
* Lighthouse score of 90+/100

- `$ quasar dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `$ quasar build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.
  - Generates a Service Worker for offline caching your static assets using [sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)

# Quasar Framework
> Build responsive websites, PWAs, hybrid mobile Apps (that look native!) and Electron apps using same code, powered with Vue.

<a href="https://badge.fury.io/js/quasar-framework"><img src="https://badge.fury.io/js/quasar-framework.svg"></a>

## Supporting Quasar
Quasar Framework is an MIT-licensed open source project. Its ongoing development is made possible thanks to the support by these awesome [backers](https://github.com/rstoenescu/quasar-framework/blob/dev/backers.md). If you'd like to join them, check out [Quasar Framework's Patreon campaign](https://www.patreon.com/quasarframework).

## Community Forum

Head on to the official community forum: [http://forum.quasar-framework.org](http://forum.quasar-framework.org)

## Quasar Repositories

* [Quasar Framework](https://github.com/quasarframework/quasar)
* [Quasar CLI](https://github.com/quasarframework/quasar-cli)
* [Quasar Play App](https://github.com/quasarframework/quasar-play)

## Contributing

I'm excited if you want to contribute to Quasar under any form (report bugs, write a plugin, fix an issue, write a new feature).

### Issue Reporting Guidelines

**Please use the appropriate Github repo to report issues. See "Related Components" above.** For example, a bug related to CLI should be reported to the CLI repo, one related to build issues to Quasar Framework Templates repo and so on.

- The issue list of the repository is **exclusively** for bug reports and feature requests. For anything else please use the [Community Forum](http://forum.quasar-framework.org).

- Try to search for your issue, it may have already been fixed in the development branch or it may have a resolution.

- Check if the issue is reproducible with the latest stable version of Quasar. If you are using a pre-release, please indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from the issue author for more than 5 days, it will be closed.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

Read more [here](http://quasar-framework.org/guide/contributing.html).

## License

Copyright (c) 2016-2017 Razvan Stoenescu

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
