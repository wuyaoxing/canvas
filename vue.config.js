module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/canvas/'
        : '/',
    outputDir: 'docs'
}