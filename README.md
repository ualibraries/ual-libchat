# University of Arizona Libraries LibChat Customizations

## Getting started

Install the dependencies: `npm install`

Build the project with `npm run build`

Push your changes to the remote repository, then deploy to production with `npm run deploy:prod`

You can deploy from the `develop` branch with `npm run deploy:dev`

This project uses [Shipit](https://github.com/shipitjs/shipit) for deployments.

By default, Shipit uses your current OS username for connecting to the remote server. To override that, use the `--user` parameter. Example: `shipit prod deploy --user=YOUR_USERNAME`

## LibChat settings

Paste the following into the 'Custom CSS' field on the 'LibChat Widget Creator' page:

```css
@import url("https://www.library.arizona.edu/vendor-support/libchat/current/css/ual-libchat.css");
```

## Local testing

Start a local static webserver by running `npm run serve`.
You will the be provided with a css import at-rule to paste into LibChat widget creator.

## Learn more

* [PostCSS](http://postcss.org/) and [PostCSS-cssnext](http://cssnext.io/)
* [Shipit](https://github.com/shipitjs/shipit)
* [Travis CI](https://travis-ci.org/)
