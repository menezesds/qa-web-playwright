export default {
    ci: {
        prefix: 'http://localhost:3000',
        sufix: ''
    },
    local: {
        api: 'http://localhost:3000/api',
        home: 'http://localhost:3000'
    },
    staging: {
        api: 'https://your-staging-url.com/api',
        home: 'https://your-staging-url.com'
    },
    production: {
        api: 'https://your-production-url.com/api',
        home: 'https://your-production-url.com'
    }
}