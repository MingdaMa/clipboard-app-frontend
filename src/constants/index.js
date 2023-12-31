// export const API_BASE_URL = 'http://localhost:8080';
export const API_BASE_URL = 'https://clipboard-app-backend-auth-5258f7d49733.herokuapp.com/';
export const ACCESS_TOKEN = 'accessToken';

// export const OAUTH2_REDIRECT_URI = 'http://localhost:5173/oauth2/redirect'
export const OAUTH2_REDIRECT_URI = 'https://clipboard-app-frontend-9b2de6f32184.herokuapp.com/ '

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
