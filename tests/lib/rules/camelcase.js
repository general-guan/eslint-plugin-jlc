/**
 * @fileoverview 变量和函数、参数命名全部采用小写驼峰命名，代码中的命名开头结尾不允许使用下划线或符号
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/camelcase"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("camelcase", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const loadingModules = {}",
    "function stringFormat(source,typeName) {}",
  ],

  invalid: [
    {
      code: "const loading_modules = {}",
      errors: [{ messageId: "camelcase", type: "VariableDeclaration" }],
    },
    {
      code: "const LoadingModules = {}",
      errors: [{ messageId: "camelcase", type: "VariableDeclaration" }],
    },
    {
      code: "function string_format(source) {}",
      errors: [{ messageId: "camelcase", type: "FunctionDeclaration" }],
    },
    {
      code: "function stringFormat(source,type_name) {}",
      errors: [{ messageId: "camelcase", type: "FunctionDeclaration" }],
    },
  ],
});
