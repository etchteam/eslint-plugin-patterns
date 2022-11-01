/**
 * @fileoverview Don&#39;t change a component&#39;s appearance or layout.
 * @author ManyPets
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const config = require("../../config")
const rule = require("../../../lib/rules/dont-add-classes-to-components"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester(config);
ruleTester.run("dont-add-classes-to-components", rule, {
  valid: [
    {
      filename: 'test.vue',
      code: '<template><MCard /></template>'
    }
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: "<template><MCard class=\"custom-class\" /></template>",
      errors: [{ messageId: 'dontAddClassesToComponents' }],
    },
  ],
});
