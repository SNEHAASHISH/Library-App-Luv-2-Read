export const oktaConfig = {
    clientId: '0oab9xsum1zlPGXVs5d7',
    issuer: 'https://dev-39965552.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes : ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true
}