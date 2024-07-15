/**
 * @fileoverview 禁止使用 new 运算符与 Function 对象
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "禁止使用 new 运算符与 Function 对象",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      noNewFunc: "禁止使用 new 运算符与 Function 对象",
    }, // Add messageId and message
  },

  create(context) {
    return {
      NewExpression(node) {
        if (node.callee.name === "Function") {
          context.report({ node, messageId: "noNewFunc" });
        }
      },
    };
  },
};
