module.exports = {
    root: true,
    extends: '@react-native-community',
    plguins: ['react', 'react-hooks', 'import'],
    settings: {
        'import/resolver': {
            'babel-plguin-root-import': {
                rootPathSuffix: 'src',
            },
        },
    },
    rules: {
        semi: [2, 'never'],
        'no-extra-boolean-cast': 'off',
    },
}