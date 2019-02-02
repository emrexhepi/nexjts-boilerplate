module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "linebreak-style": 0,
      "indent": 0,
      "no-trailing-spaces": 0,
      "class-methods-use-this" : 0,
      "no-console":"off",
      "react/jsx-filename-extension": [1, {
        "extensions": [".js", ".jsx"]
      }],
      "react/forbid-prop-types": 0,
      "function-paren-newline": ["error", "consistent"],
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to" ]
      }]
    },
    "env": {
      "es6": true,
      "node": true,
      "browser": true
    }
}