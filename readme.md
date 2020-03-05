# Get Bouncer Homepage #

The purpose of this repository is to provide a framework for the get bouncer webpage. It will eventually be expanded to include the various products offered by bouncer and it will serve as a portal for generating API keys in a developer console of sorts.

## Running the Server ##

### Run Development Build ###
```
npm run dev
```

### Make Production Build ###
```
npm run build
```

### Run Production Build ###
```
npm run start
```

### Run Unit Tests ###
```
npm run test
```

## Pages ##

* Get Bouncer Homepage \[In Progress\]
* Card Scan Homepage \[Planned\]
* ID Scan Homepage \[Planned\]
* Developer Console \[Planned\]

We are currently in the early development stages of the creating the Get Bouncer homepage.

## Components ##

### Standard ###

* Header
* Paragraph
* Button
* Navigation
* Footer
* List
* ListItem
* Row
* Col

### Specialized ###

* Donut
* Phone
* Tile (extends Col)
* Portrait

The above indicated components are currently being developed and will be used in various areas within the different webpages. They have been abstracted from the provided sample layout.

## Dependencies ##

### Next ###
We will be using [next.js](https://nextjs.org) to facilitate serverside rendering of the page. This is to improve SEO and to abstract as much away from the user as possible. We want the user to have a smooth experience regardless of the device they are running on. As a company founded on security, we also want to make sure that the page is secure and want to be managing as much of the site on the server as possible, because that makes it easier for us to monitor user actions.

Next is lightweight and easy to set up. It doesn't require too many dependencies and is perfect for what we need.

### React ###
The standard library for implementing dynamic UIs is [React](https://reactjs.org). This will help us make the most out of the webpage and make it as smooth and flexible as possible. It will also help us set up the default components as specified above.

### Get User Locale ###
Determines the user's language preferences based on browser indicated language preference. To test different languages, set you preferred browser language to something different. Based on the location and preferences on the server, SEO may only be optimized for one language. Note: find a fix for that issue

## Dev Dependencies ##

### JSDoc ###
JSDoc is very useful for generating and mainting documentation. When creating new functions and classes use the following syntax:

```javascript
/**
 * @param {Number} num - Passes in a number
 * 
 * @return {Number} - The number that was passed in
 */

function id (num) {
    return num;
}

/**
 * React component for the home page
 * 
 * @property {Number} x - The page's x coordinate
 */
class Page {
    x = 4;

    render() {
        ...
    }
}
```

Please refer to the [jsdoc website](https://jsdoc.app/) for more information and follow their general schematics. This will make it really easy for us to maintain the codebase and it is well worth our time.

### Jest ###
We will be using [jest](https://jestjs.io) to perform unit tests. To create and run unit tests, place them in the tests folder and refer to the above linked website to understand how to use jest.

## General Architecture ##
The clientside will feature little to no functionality and most computation will be done on the server. Most functionality such as language detection will be abstracted to different files as we mostly want the site just to be static. In the case of the console, logic will be abstracted outside of the react code. We will do this so that the website can be easily update if the company ever desire to use a different library, or a different set of tools. The main idea is we won't have to start from scratch.

## Hierarchy ##
Place standard React components in the components subfolder and put pages into the pages sub-folder. For each page, make a corresponding language file named "pagename_lang.js" and create and export a default object. Use that object for all string generation for the page. Follow the format as seen in index.js for doing so.