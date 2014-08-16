# Angular formFor

**Navigation**:
[Overview](https://github.com/bvaughn/angular-form-for/wiki/) |
[Input Types](https://github.com/bvaughn/angular-form-for/wiki/Input-Types) |
[Validation Types](https://github.com/bvaughn/angular-form-for/wiki/Validation-Types) |
[Templates](https://github.com/bvaughn/angular-form-for/wiki/Template-Overrides) |
[API Reference](https://github.com/bvaughn/angular-form-for/wiki/API-Reference)

---

*formFor* is a quick and easy way to declare complex HTML forms with client and server-side validations.
Using *formFor* a sign-up form may look like this:

```html
<form form-for="user" service="UserSignUp">
  <text-field attribute="email"></text-field>
  <text-field attribute="password" type="password"></text-field>
  <checkbox-field attribute="iAgreeToTheTerms"></checkbox-field>
  <submit-button label="Sign Up"></submit-button>
</form>
```

But that's not all! *formFor* is incredibly flexible, offering a wide range of configuration options.
Check out [the wiki](https://github.com/bvaughn/angular-form-for/wiki/) to learn more!
You can also check out some demos on Plunkr!

#### Simple sign-up form demo

http://plnkr.co/edit/6X0ECbJJwCFAHlqe1OO0?p=preview

#### Advanced sign-up form demo

http://plnkr.co/edit/jY8TC8xbMdK5dBJMResL?p=preview

#### Filtered drop down demo

http://plnkr.co/edit/AL7K9ZugRN40sJvDBIKL?p=preview

## Installation

You can install this plugin with either [Bower](http://bower.io/) or [NPM](https://www.npmjs.org/):

```shell
bower install angular-form-for --save-dev
npm install angular-form-for --save-dev
```

This will download an `angular-form-for` folder into your bower/node components directory. Inside of that folder there will be a `dist` folder with the *formFor* JavaScript and CSS files. By default *formFor* is compatible with [Bootstrap](getbootstrap.com) 3.2.x styles. A separate, *formFor* only CSS stylehseet is included for those not using Bootstrap.

Lastly just include the *formFor* module in your Angular application like so:

```js
angular.module('myAngularApp', ['formFor']);
```

## More information

Check out the *formFor* wiki for lots of helpful information including:

* [How to use formFor](https://github.com/bvaughn/angular-form-for/wiki/)
* [Input Types](https://github.com/bvaughn/angular-form-for/wiki/Input-Types)
* [Validation Types](https://github.com/bvaughn/angular-form-for/wiki/Validation-Types)
* [Templates](https://github.com/bvaughn/angular-form-for/wiki/Template-Overrides)
* [API Reference](https://github.com/bvaughn/angular-form-for/wiki/API-Reference)
* [IE8 Support](https://github.com/bvaughn/angular-form-for/wiki/IE8-Support)

If you have any questions please feel free to create an issue or [contact me](https://github.com/bvaughn/) directly through Github.

## License

Copyright (c) 2014 Brian Vaughn. Licensed under the MIT license.
