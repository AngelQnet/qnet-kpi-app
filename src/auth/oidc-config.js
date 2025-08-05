export const oidcConfig = {
authority: 'https://wso2.qnetja.com:9443/oauth2/oidcdiscovery',  // WSO2 Identity Server URL here
  client_id: 'sNI5ymWFIOmFfTqA41TJCrqshSIa',                 // Client ID from WSO2
  redirect_uri: 'http://localhost:3000/callback',       // App's callback URL (must match WSO2 config)
  response_type: 'code',
  scope: 'openid profile email',
  // post_logout_redirect_uri: 'http://localhost:8000/',    // Where to go after logout
  loadUserInfo: true,
  response_mode: 'query',
}