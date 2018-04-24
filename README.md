# Winning with Web Components

## Abstract
The bar for web development continues to increase. While web frameworks proliferate, the rise of the mobile web has made performance a major concern. Fortunately, web standards have evolved. A new set of web standards, collectively referred to as web components, give us the ability to make custom HTML elements. 

With web components, you can build your own suite of custom elements that work with any JavaScript framework (or none at all). Angular, React, Vue, ShinyNewFramework.js... doesn't matter. You can build a single set of components and use them accross all of your sites.  Because they are native browser constructs, applications built with web components also render quickly.

In this talk, you will learn about the web components standard and how to use them in your application. You'll learn about the why web components are useful, some libraries that can help you build them, and how to integrate them in your own applications. By the end of this talk, you'll be ready to build your own suite of web components.

## Demos
This project has several demos you can check out. 

### /basic-components
This folder includes a few native web components that require no framework. These work great in Chrome, but not so well in Firefox and Edge. 

You can run these by opening the .html pages directly.

### /stencil-demo/library
This folder conains web components build with Stencil.js. This makes use of the Stencil component starter. 

To run these on a local web server:

```bash
npm install
npm start
```

### /react-demo/wc-app
This folder contains a React web application that uses the components from the stencil project.

To run the app:
```bash
npm install
npm start
```
