import 'dotenv/config';

export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://playwright.dev',
  user: {
    name: process.env.USER_NAME ?? '',
    password: process.env.USER_PASSWORD ?? '',
  },
};
