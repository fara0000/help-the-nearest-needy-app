/* eslint-disable prefer-destructuring */

const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const errors: string[] = [];
const isServer = typeof window === undefined;

if (!MONGO_HOST) {
  errors.push('MONGO_HOST is not defined');
}
if (!MONGO_PORT) {
  errors.push('MONGO_PORT is not defined');
}
if (!MONGO_DB) {
  errors.push('MONGO_DB is not defined');
}

if (errors.length && isServer) {
  throw new Error(errors.join(`\n`));
}

const MONGO_CONNECT_STRING = `mongodb://${MONGO_HOST}:${MONGO_PORT}/`;

export {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_CONNECT_STRING,
  MONGO_DB,
  MONGO_USERNAME,
  MONGO_PASSWORD,
};
