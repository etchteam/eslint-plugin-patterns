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
      url: null,
    },
    fixable: null,
    schema: [],
    messages: {
      dontAddClassesToComponents: "Don't add classes to components. Changing a components appearance or layout makes it harder to maintain."
    }
  },

  create(context) {
    return VueUtils.defineTemplateBodyVisitor(context, {
      "VElement" (node) {
        const tagChar1 = node.rawName.slice(0, 1)
        const tagChar2 = node.rawName.slice(1, 1)
        const isPatterns = tagChar1 === 'M' && tagChar2 === tagChar2.toUpperCase()

        if (!isPatterns) {
          return
        }

        const attributes = node.startTag.attributes.map((a) => a.key.name)

        if (attributes.includes('class')) {
          context.report({ node: node, messageId: 'dontAddClassesToComponents' });
        }

        return {}
      }
    })
  },
};
