let {init} = require('./loaders');
let express = require('express');

async function startServer() {

    const app = express();

    await init({expressApp: app});

    app.listen(process.env.PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is ready !`);
    });
}

startServer();
