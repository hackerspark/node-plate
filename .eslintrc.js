module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
	'linebreak-style': ['error', 'windows'],
	'max-len': ['error', { 'ignoreComments': true }],
  'no-tabs': 'off',
  'valid-jsdoc': 'off',

  'jsdoc/check-alignment': 1, // Recommended
  'jsdoc/check-examples': 1,
  'jsdoc/check-indentation': 1,
  'jsdoc/check-param-names': 1, // Recommended
  'jsdoc/check-syntax': 1,
  'jsdoc/check-tag-names': 1, // Recommended
  'jsdoc/check-types': 1, // Recommended
  'jsdoc/implements-on-classes': 1, // Recommended
  'jsdoc/match-description': 1,
  'jsdoc/newline-after-description': 1, // Recommended
  'jsdoc/no-types': 1,
  'jsdoc/no-undefined-types': 1, // Recommended
  'jsdoc/require-description': 1,
  'jsdoc/require-description-complete-sentence': 1,
  'jsdoc/require-example': 1,
  'jsdoc/require-hyphen-before-param-description': 1,
  'jsdoc/require-jsdoc': 1, // Recommended
  'jsdoc/require-param': 1, // Recommended
  'jsdoc/require-param-description': 1, // Recommended
  'jsdoc/require-param-name': 1, // Recommended
  'jsdoc/require-param-type': 1, // Recommended
  'jsdoc/require-returns': 1, // Recommended
  'jsdoc/require-returns-check': 1, // Recommended
  'jsdoc/require-returns-description': 1, // Recommended
  'jsdoc/require-returns-type': 1, // Recommended
  'jsdoc/valid-types': 1 // Recommended

  },
  'plugins': [
        'jsdoc'
  ],

};
