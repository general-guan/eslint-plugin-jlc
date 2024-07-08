/**
 * @fileoverview 要求使用 let 或 const 而不是 var
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
      description: "要求使用 let 或 const 而不是 var",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      noVar: "要求使用 let 或 const 而不是 var",
    }, // Add messageId and message
  },

  create(context) {
    return {
      "VariableDeclaration:exit"(node) {
        if (node.kind === "var") {
          context.report({
            node,
            messageId: "noVar",
            fix: function (fixer) {
              const varToken = context.sourceCode.getFirstToken(node, {
                filter: (t) => t.value === "var",
              });
              return fixer.replaceText(varToken, "let");
            },
          });
        }
      },
    };
  },
};
