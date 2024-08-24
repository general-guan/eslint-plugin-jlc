/**
 * @fileoverview 要求使用模板字面量而不是字符串连接
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: `problem`, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "要求使用模板字面量而不是字符串连接",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      preferTemplate: "要求使用模板字面量而不是字符串连接",
    }, // Add messageId and message
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      BinaryExpression(node) {
        if (
          node.operator === "+" &&
          ((node.left.type === "Literal" &&
            typeof node.left.value === "string") ||
            (node.right.type === "Literal" &&
              typeof node.right.value === "string"))
        ) {
          context.report({
            node,
            messageId: "preferTemplate",
          });
        }
      },
    };
  },
};
