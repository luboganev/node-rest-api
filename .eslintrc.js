module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'immutable',
    ],
    rules: {
        'no-console': 'off',
        indent: ['error', 4],
        'immutable/no-mutation': 'error',
    },
};
