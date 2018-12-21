//to change domain name or port edit these two params

const port = 8007 
const domainName = 'localhost';

export const loginPost = `http://${domainName}:${port}/auth/token/obtain/`//response is access and refresh token
export const registerPost = `http://${domainName}:${port}/auth/register/`
export const refreshPost = `http://${domainName}:${port}/auth/token/refresh/`
export const recipePost = `http://${domainName}:${port}/api/recipes/`


// /tesco-api/grocery-search/

