module.exports = {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-config-prettier-scss"
  ],
  "rules": {
    "selector-id-pattern": null, // セレクタid名をkebab-case以外でも許可
    "selector-class-pattern": null, // セレクタclass名をkebab-case以外でも許可
    "keyframes-name-pattern": null, // keyframes名をkebab-case以外でも許可
    "scss/at-mixin-pattern": null, // mixin名をkebab-case以外でも許可
    "scss/at-function-pattern": null, // function名をkebab-case以外でも許可
    "scss/dollar-variable-pattern": null, // SCSS変数名をkebab-case以外でも許可
  }
};