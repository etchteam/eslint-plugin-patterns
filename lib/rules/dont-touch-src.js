/**
 * @fileoverview Don't import from the src folder
 * @author ManyPets
 */
"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Don't import from the src folder",
      recommended: false,
      url: 'https://github.com/etchteam/eslint-plugin-patterns/blob/main/docs/rules/dont-touch-src.md',
    },
    fixable: null,
    schema: [],
    messages: {
      dontTouchSrc: "Don't import from the src folder."
    }
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value.includes('@boughtbymany/patterns/src')) {
          context.report({ node: node.source, messageId: 'dontTouchSrc' });
        }
      }
    };
  },
};
