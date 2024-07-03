/**
 * @fileoverview 要求使用 === 和 !==
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
      description: "要求使用 === 和 !==",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      eqeqeq: "要求使用 === 和 !==",
    }, // Add messageId and message
  },

  create(context) {
    return {
      BinaryExpression(node) {
        if (node.operator === "==" || node.operator === "!=") {
          context.report({ node, messageId: "eqeqeq" });
        }
      },
    };
  },
};
