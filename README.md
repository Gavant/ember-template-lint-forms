# ember-template-lint-forms
Ember handlebars template linter rules for validating form elements. This plugin assumes that your project has [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) installed.

## Installation

```
yarn add --dev ember-template-lint-forms
```

Then update your `template-lintrc.js` file to contain the following:
```
module.exports = {
    extends: ['recommended', 'ember-template-lint-forms:forms'],
    plugins: ['ember-template-lint-forms'],
    rules: {
        ....
    }
};
```

## Limitations & Caveats

Currently, this plugin only validates that textual input elements (e.g. `type="text|password|email|..."`) have a `maxlength` attribute defined. 

Only native HTML `<input>` elements and `<AngleBracket>` invocation style ember components `<Input>` and `<FlInput>` (from the [ember-floating-labels](https://github.com/Gavant/ember-floating-labels) addon) are validated.

## Future Improvements

- [ ] Add more validation rules!
- [ ] Allow customizing what ember components should be validated (e.g. `<MyAwesomeInput>`)

