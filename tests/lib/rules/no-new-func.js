/**
 * @fileoverview 禁止使用 new 运算符与 Function 对象
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-new-func"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-new-func", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const x = function backAdd(a, b) { return a + b }",
  ],

  invalid: [
    {
      code: "const x = new Function('a', 'b', 'return a + b')",
      errors: [{ messageId: "noNewFunc", type: "NewExpression" }],
    },
  ],
});
