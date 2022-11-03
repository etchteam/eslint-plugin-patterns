# Don&#39;t import things from the src folder (dont-touch-src)

Patterns provides a public export interface that has been flattened to mask the internal organisation structure.

Components may be moved to different folders, but as this is not part of the public export, imports from `src` are subject to break without warning.

## Rule Details

Examples of **incorrect** code for this rule:

```js

import MCard from '@boughtbymany/patterns/src/components/layout/Card/MCard'

```

Examples of **correct** code for this rule:

```js

import { MCard } from '@boughtbymany/patterns'   

```