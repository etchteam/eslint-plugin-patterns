/**
 * @fileoverview Don&#39;t import things from the src folder
 * @author Etch
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const config = require("../../config")
const rule = require("../../../lib/rules/dont-touch-src"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester(config);
ruleTester.run("dont-touch-src", rule, {
  valid: [
    "import { MCard } from '@boughtbymany/patterns'"
  ],
  invalid: [
    {
      code: "import MCard from '@boughtbymany/patterns/src/components/layout/Card/MCard'",
      errors: [{ messageId: 'dontTouchSrc' }],
    },
  ],
});
