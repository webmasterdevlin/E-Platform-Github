import { AccessTokenModel, LoginModel, RegisterModel } from './sign-in.types';
import { api } from '../../../../utils/axios.config';

export async function loginUserAxios(login: LoginModel) {
  return await api.post<AccessTokenModel>('login', login);
}

export async function registerUserAxios(register: RegisterModel) {
  return await api.post<AccessTokenModel>('register', register);
}
