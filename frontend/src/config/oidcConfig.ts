const authority = process.env.REACT_APP_KEYCLOAK_REALM
const clientId = process.env.REACT_APP_KEYCLOAK_CLIENT_ID
const redirectUri = process.env.REACT_APP_KEYCLOAK_REDIRECT_URI
const postLogoutRedirectUri = process.env.REACT_APP_KEYCLOAK_POST_LOGOUT_REDIRECT_URI

export const oidcConfig = {
    authority: authority ? authority : '',
    client_id: clientId ? clientId : '',
    redirect_uri: redirectUri ? redirectUri : '',
    post_logout_redirect_uri: postLogoutRedirectUri ? postLogoutRedirectUri : '',
}