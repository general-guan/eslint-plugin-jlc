/**
 * @fileoverview export 结构体/类/单例/函数库/对象，采用大写驼峰命名
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
      description: "export 结构体/类/单例/函数库/对象，采用大写驼峰命名",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      pascalcase: "export 结构体/类/单例/函数库/对象，采用大写驼峰命名",
    }, // Add messageId and message
  },

  create(context) {
    const check = (name, node) => {
      const lowerCamelCaseRegex = /^[A-Z][a-zA-Z0-9]*$/;
      if (!lowerCamelCaseRegex.test(name) || name.includes("_")) {
        context.report({ node, messageId: "pascalcase" });
      }
    };

    return {
      ExportDefaultDeclaration(node) {
        check(node.declaration.name, node);
      },
    };
  },
};
