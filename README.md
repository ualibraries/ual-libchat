# University of Arizona Libraries LibChat Customizations

[![Build Status](https://travis-ci.org/ualibraries/ual-libchat.svg?branch=master)](https://travis-ci.org/ualibraries/ual-libchat)
[![Dependencies](https://david-dm.org/ualibraries/ual-libchat.svg)](https://david-dm.org/ualibraries/ual-libchat)

![Screenshot](screenshot.png)

## Getting started

Install the dependencies: `npm install`

Build the project with `npm run build`

## Deploying

The contents of the `css` directory are served from an Amazon S3 bucket named `ualibr-libchat`.

You can deploy the project by running `npm run deploy`. You might need to specify an AWS profile
like this: `npm run deploy -- --profile=profilename`.

## LibChat settings

Login to LibChat settings at https://arizona.libapps.com/libapps/.

Paste the following into the 'Custom CSS' field on the 'LibChat Widget Creator' page:

```css
@import url("https://ualibr-libchat.s3.amazonaws.com/ual-libchat.css");
```

## Local testing

Running `npm run watch` will:

* Start a local static webserver.
You will the be provided with a css import at-rule to paste into LibChat widget creator.
* Watch CSS files and process them when they change

## When the Travis build fails

Travis checks to see if the URL of the LibChat stylesheet has changed. It
does that by comparing LibChat stylesheet URL to one which is saved in
`test/config.js`. If the URL are same, the test passes.

If the test doesn't pass, follow these steps.

  1. Go to http://new.library.arizona.edu/chat to see if our custom styles
     are loading. If everything looks OK,
  2. Update `theirCSSURL` in `tests/config.js` to match the new LibChat
     CSS URL.

If the test is failing and our custom styles are not loading, we have
a problem on our hands.

## Learn more

* [PostCSS](http://postcss.org/) and [PostCSS-cssnext](http://cssnext.io/)
* [Travis CI](https://travis-ci.org/)
* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/)
