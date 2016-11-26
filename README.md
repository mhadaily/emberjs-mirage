# Ember integrated with Mirage as a REST Server

This is an experimental app to teach you how to integrate Mirage with Ember.See [Ember Mirage Cli](http://www.ember-cli-mirage.com/) for more documents.

This application is live as a demo at [Mirage API Server with EmberJS on AWS S3](http://mirage-emberapp.s3-website-us-east-1.amazonaws.com/) - Check out deploy section for more information.

To get started please consider following steps: 

##Packages
I have implemented ember-i18n for multilingual purpose and ember-sass and ember-sass-pod to organize better css code. For more information, please read Package.json devDependencies. If you have any question please feel free to drop me an email. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-app`
* `npm install`  Or `yarn`
* `bower install`

#### Note: I have used Yarn as my package manager, please feel free and replace NPM with Yarn as it's way faster. 

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* `ember deploy` (development)
* `ember deploy production --activate=true` (production) As I am deploy into Amazon so please add your AWS credentials to deploy
 

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
