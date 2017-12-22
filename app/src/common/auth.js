import auth0 from 'auth0-js';

const CLIENT_DOMAIN = `${process.env.REACT_APP_AUTH0_DOMAIN}`;
const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
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
