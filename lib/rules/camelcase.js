/**
 * @fileoverview 变量和函数、参数命名全部采用小写驼峰命名，代码中的命名开头结尾不允许使用下划线或符号
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
      description:
        "变量和函数、参数命名全部采用小写驼峰命名，代码中的命名开头结尾不允许使用下划线或符号",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      camelcase:
        "变量和函数、参数命名全部采用小写驼峰命名，代码中的命名开头结尾不允许使用下划线或符号",
    }, // Add messageId and message
  },

  create(context) {
    const check = (name, node) => {
      const lowerCamelCaseRegex = /^[a-z]+([A-Z][a-z]+)*$/;
      if (!lowerCamelCaseRegex.test(name) || name.includes("_")) {
        context.report({ node, messageId: "camelcase" });
      }
    };
    return {
      VariableDeclaration(node) {
        node.declarations.forEach((declaration) => {
          const { name } = declaration.id;
          check(name, node);
        });
      },
      FunctionDeclaration(node) {
        const name1 = node.id.name;
        check(name1, node);
        node.params.forEach((param) => {
          const { name } = param;
          check(name, node);
        });
      },
    };
  },
};
