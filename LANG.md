## Multiple Languages ##

We can use localize.js to detect what language a client speaks: https://help.localizejs.com/docs/detecting-language-of-a-visitor

Alternatively (or possibly even better), we may also want to use this node package: https://www.npmjs.com/package/get-user-locale

However, this is community driven, so we aren't guaranteed stability.

Once having detected a language we can use that to create the rest of the page using predefined strings for different languages
in a JSON format. We can then load those into the state of the various pages and components to bring specific languages based
on the webpage visitor.

## Multiple Pages ##

We can set up multiple domains/subdomains and specify languages with the lang prop on the HTML tag for SEO, but this is the more expensive and unnecessary option.

Information: https://www.w3schools.com/tags/att_global_lang.asp
