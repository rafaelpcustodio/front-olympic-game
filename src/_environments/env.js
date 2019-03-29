const config = () => ({
    api: {
        url: 'http://localhost:8080/v1/api'
    },
    app: {
        environment: null,
        namespace: 'olympic-game_platform'
    }
})

Object.freeze(config)

export { config }