import auth0 from 'auth0-js';

const CLIENT_DOMAIN = '__AUTH0_DOMAIN__';
const CLIENT_ID = '__AUTH0_CLIENT_ID__';
const SCOPE = 'openid email';
const REDIRECT = 'http://localhost:3000/callback';

const auth = new auth0.WebAuth({
  domain: CLIENT_DOMAIN,
  clientID: CLIENT_ID,
});

export function login() {
  auth.authorize({
    responseType: 'id_token',
    redirectUri: REDIRECT,
    scope: SCOPE,
  });
}
