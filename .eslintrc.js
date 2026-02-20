module.exports = {
    root: true,
    extends: ['universe/native'],
    rules: {
        'react-hooks/exhaustive-deps': 'warn',
    },
    overrides: [
        {
            files: ['*.config.js', 'metro.config.js'],
            env: {
                node: true,
            },
        },
    ],
};
