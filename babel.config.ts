module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@data': './src/data',
                        '@domain': './src/domain',
                        '@presentation': './src/presentation',
                    },
                },
            ],
        ],
    };
};
