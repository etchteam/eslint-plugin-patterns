/**
 * @fileoverview Don't change a component's appearance or layout.
 * @author Etch
 */
"use strict";
const VueUtils = require('eslint-plugin-vue/lib/utils')

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Don't change a component's appearance or layout.",
      recommended: false,
      url: 'https://github.com/etchteam/eslint-plugin-patterns/blob/main/docs/rules/dont-add-classes-to-components.md',
    },
    fixable: null,
    schema: [],
    messages: {
      dontAddClassesToComponents: "Don't add classes to patterns components."
    }
  },

  create(context) {
    return VueUtils.defineTemplateBodyVisitor(context, {
      "VAttribute" (node) {
        const isClass = node.key.rawName === 'class';

        if (!isClass) {
          return
        }

        const element = node.parent && node.parent.parent

        const isElement = element && element.type === 'VElement'

        if (!isElement) {
          return
        }

        const tagChar1 = element.rawName.slice(0, 1)
        const tagChar2 = element.rawName.slice(1, 2)
        const isPatterns = tagChar1 === 'M' && tagChar2 === tagChar2.toUpperCase()
          || tagChar1 === 'm' && tagChar2 === '-'

        if (!isPatterns) {
          return
        }

        context.report({ node: node, messageId: 'dontAddClassesToComponents' });
      }
    })
  },
};
