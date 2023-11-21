import * as request from '../lib/request'

const baseUrl = 'http:// :3030/users'
export const login = async (username, password) => {

     const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });
   return result;
}