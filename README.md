# eslint-plugin-patterns

Eslint rules specifically for Patterns to help encourage best practice usage.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@etchteam/eslint-plugin-patterns`:

```sh
npm install @etchteam/eslint-plugin-patterns --save-dev
```

## Usage

Add `@etchteam/patterns` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "'@etchteam/patterns'"
    ]
}
```

Then configure the rules you want to use under the rules section. 
Recommended config is below.

```json
{
    "rules": {
        "@etchteam/patterns/dont-touch-src": "warn",
        "@etchteam/patterns/dont-add-classes-to-components": "warn"
    }
}
```

## Supported Rules

* @etchteam/patterns/dont-touch-src
* @etchteam/patterns/dont-add-classes-to-components


