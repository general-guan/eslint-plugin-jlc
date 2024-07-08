/**
 * @fileoverview 要求使用 let 或 const 而不是 var
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-var"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-var", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "let a = 123456",
  ],

  invalid: [
    {
      code: "var a = 123456",
      output: "let a = 123456",
      errors: [{ messageId: "noVar", type: "VariableDeclaration" }],
    },
  ],
});
