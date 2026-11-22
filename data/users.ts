import { env } from '../config/env';

export const users = {
  valid: { name: env.user.name, password: env.user.password },
  invalidName: { name: 'wrong_user', password: env.user.password },
  invalidPassword: { name: env.user.name, password: 'wrong_password' },
};
