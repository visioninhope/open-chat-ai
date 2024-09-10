export default {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null, // 先禁用默认的规则
    'rule-empty-line-before': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind', // 允许 @tailwind 指令
          'apply', // 允许 @apply 指令
          'variants', // 允许 @variants 指令
          'responsive', // 允许 @responsive 指令
          'screen', // 允许 @screen 指令
        ],
      },
    ],
  },
  customSyntax: 'postcss-scss',
}
