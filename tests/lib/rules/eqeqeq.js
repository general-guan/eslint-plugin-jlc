/**
 * @fileoverview 要求使用 === 和 !==
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/eqeqeq"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("eqeqeq", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "a === b",
    "a !== b",
  ],

  invalid: [
    {
      code: "a == b",
      errors: [{ messageId: "eqeqeq", type: "BinaryExpression" }],
    },
    {
      code: "a != b",
      errors: [{ messageId: "eqeqeq", type: "BinaryExpression" }],
    },
  ],
});
