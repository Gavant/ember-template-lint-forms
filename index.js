/* eslint-env node */
module.exports = {
    name: 'ember-template-lint-forms',
    rules: {
        'require-maxlength': require('./rules/require-maxlength')
    },
    configurations: {
        forms: {
            rules: {
                'require-maxlength': true
            }
        }
    }
};
