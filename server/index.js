require('dotenv').config();
const port = process.env.PORT || 3000;
const app = require('express')();

const ROUTES = [
  'login',
];

ROUTES.forEach(route => {
  require(`./${route}`)(app);
});

app.listen(port);
