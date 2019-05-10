/* eslint-env node */
'use strict';

const Rule = require('ember-template-lint').Rule;
const ATTR_TYPE_REGEX = /(text|password|email|url|number|tel|time|date|datetime)/;

const logMissingMaxlength = function(node) {
    this.log({
        message: `${node.tag} element is missing a maxlength attribute`,
        line: node.loc && node.loc.start.line,
        column: node.loc && node.loc.start.column,
        source: this.sourceForNode(node)
    });
};

const isMissingMaxlength = function(attrs) {
    return !attrs || !attrs.find((a) => a.name === 'maxlength' || a.name === '@maxlength');
};

module.exports = class RequireMaxlength extends Rule {
    visitor() {
        return {
            ElementNode(node) {
                const tag = node.tag.toUpperCase();
                const isBlock = node.children && node.children.length > 0;
                if (tag === 'FLINPUT' && !isBlock && isMissingMaxlength(node.attributes)) {
                    return logMissingMaxlength.call(this, node);
                } else if (tag === 'INPUT') {
                    //only validate textual input types
                    const attrs = node.attributes || [];
                    const typeAttr = attrs.find((a) => a.name === 'type' || a.name === '@type');
                    const isTextualInput = !typeAttr || (typeAttr.value && ATTR_TYPE_REGEX.test(typeAttr.value.chars));
                    if (isTextualInput && isMissingMaxlength(node.attributes)) {
                        return logMissingMaxlength.call(this, node);
                    }
                }
            }
        };
    }
};
