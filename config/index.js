import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
}

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.SERVER_NAME,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
}

export { port, env, dbConfig }