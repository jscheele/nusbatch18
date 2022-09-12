// demonstration of using Auth0 to login users before allowing access to endpoints
// to step through this, see James Quick's video tutorial at https://www.youtube.com/watch?v=QQwo4E_B0y8

const express = require('express');
const data = require("./data");
const app = express();
require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

// req.isAuthenticated is provided from the auth router
app.get('/', (request, response) => {
  response.send(request.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

app.get('/profile', requiresAuth(), (request, response) => {
    response.send(JSON.stringify(request.oidc.user));
});

app.get('/user/by-uid', requiresAuth(), (request, response) => {
    let user = data.get_user_by_user_id(request.query.user_id);
    response.status(200).send(user);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
