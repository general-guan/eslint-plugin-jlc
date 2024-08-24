/**
 * @fileoverview 要求使用模板字面量而不是字符串连接
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/prefer-template"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("prefer-template", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const message = `Hello ${name}`",
  ],

  invalid: [
    {
      code: "const name = 'tom';const message = 'Hello' + name",
      errors: [{ messageId: "preferTemplate", type: "BinaryExpression" }],
    },
    {
      code: "const message = 'Hello' + 'name'",
      errors: [{ messageId: "preferTemplate", type: "BinaryExpression" }],
    },
  ],
});
