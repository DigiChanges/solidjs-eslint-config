module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:solid/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint/eslint-plugin",
        "solid"
    ],
    rules: {
        "solid/jsx-no-undef": 2,
        'jsx-quotes': [ 'error', 'prefer-double' ],
        "indent": [
            1,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "comma-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "space-infix-ops": 2,
        "space-in-parens": [
            1,
            "always",
            {
                "exceptions": [
                    "empty"
                ]
            }
        ],
        "key-spacing": ["warn", { "beforeColon": false, "afterColon": true}],
        "array-bracket-spacing": [
            "warn",
            "always"
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        'template-curly-spacing': [ 'warn', 'never' ],
        "padded-blocks": ["error", "never"],
        "block-spacing": "warn",
        "arrow-spacing": "warn",
        "space-before-function-paren": "warn",
        "keyword-spacing": [
            "warn",
            {
                "before": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "spaced-comment": [
            "error",
            "always"
        ],
        'no-multi-spaces': 'error',
        "brace-style": [
            "warn",
            "allman",
            { "allowSingleLine": true }
        ],
        "prefer-const": [
            "warn"
        ],
        "max-len": [
            "error",
            {
                "ignoreStrings": true,
                "ignoreRegExpLiterals": true,
                "code": 200
            }
        ],
        "no-shadow-restricted-names": "error",
        "no-sequences": "error",
        "no-new-wrappers": "error",
        "no-multiple-empty-lines": "warn",
        "no-eval": "error",
        "no-fallthrough": "warn",
        "no-invalid-this": "off",
        "no-cond-assign": "error",
        "no-duplicate-case": "error",
        "no-empty": "off",
        "no-caller": "error",
        "new-parens": "error",
        "max-lines": [
            "warn",
            600
        ],
        "no-trailing-spaces": [
            "warn",
            {
                "ignoreComments": false,
                "skipBlankLines": false
            }
        ],
        "no-unused-vars": "off",
        "no-prototype-builtins": "warn",
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "no-console": 1,
        "prefer-template": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "prefer-object-spread": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "curly": "warn",
        "use-isnan": "error",
        "no-empty-function": "off",
        "semi": "off",
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                "multiline": {
                  "delimiter": "semi",
                  "requireLast": true
                },
                "singleline": {
                  "delimiter": "semi",
                  "requireLast": false
                },
                "multilineDetection": "brackets"
              }
        ],
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/indent": ["warn"],
        "@typescript-eslint/no-empty-function": [
            "warn",
            { "allow": ["arrowFunctions"] }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off"
    },
} ;