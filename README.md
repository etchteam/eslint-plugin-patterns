# eslint-plugin-patterns

eslint rules for manypets patterns

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-patterns`:

```sh
npm install eslint-plugin-patterns --save-dev
```

## Usage

Add `patterns` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "patterns"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "patterns/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


