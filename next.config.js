module.exports = {
    pageExtensions: ['page.js'],
    productionBrowserSourceMaps: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            }
        ]
    }
}