export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/';

export const MAIL_TOKEN = '51651f76f2def2cd4bd12c9645092abb';
export const MAIL_ENDPOINT = 'https://send.api.mailtrap.io/';