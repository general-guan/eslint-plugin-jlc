/**
 * @fileoverview export 结构体/类/单例/函数库/对象，采用大写驼峰命名
 * @author gjj
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/pascalcase"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("pascalcase", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const JlcStyleGuide = {};export default JlcStyleGuide;",
  ],

  invalid: [
    {
      code: "const jlcStyleGuide = {};export default jlcStyleGuide;",
      errors: [{ messageId: "pascalcase", type: "ExportDefaultDeclaration" }],
    },
  ],
});
