const express = require('express');
const app = express();
const port = process.config.PORT || 3500;

const routes = require('./settings/routes');
routes(app);

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});