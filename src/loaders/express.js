let bodyParser = require('body-parser');
let cors = require('cors');
let {api} = require('../config');
let routes = require('../api/route');
let swaggerUI = require('swagger-ui-express')
let {swagger} = require('../api/openapi');

module.exports = async ({app}) => {

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(api.prefix, routes);
    // ...More middlewares

    //Swagger routes
    app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swagger))

    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /// error handlers
    app.use((err, req, res, next) => {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });

    // Return the express app
    return app;
}
