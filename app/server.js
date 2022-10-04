const Hapi = require('@hapi/hapi')
const router = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['*']
            }
          }
    });

    server.route(router)

    await server.start();
    console.log('server running on port: %s', server.info.uri);
};

module.exports = init