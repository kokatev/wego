# TVS Wego 2.0 - Instructions
- We're goint to use Bootstrap, Mustache, jQuery & SASS for the development. 
- For Lazy loading of images, we're using jQuery.lazy library
- For build package we're using Gulp

**Pre-requisite:** NodeJS (for npm) & Ruby (for SASS) should be insalled on your machine.

## Steps
- Clone this repo
- Open command propmt for the folder& fire below commands in order where package.json exists
- npm install gulp
- npm install
- gulp

### jQuery.lazy
We're using jQuery.lazy to implement Lazy loading of images. Please follow below instructions:
- Whenever adding img tag to HTML add as given below:

`<img class="lazy your-other-class" data-src="assets/img/6.jpg" />`

### Mustache
Please have a look at code in the header & footer to see how Mustache code needs to be implemented.
