import { dbConfig } from '../config'
import sql from 'mssql'

let isConnected
let db

sql.on('error', (err) => {
  console.error(err)
})

const connectSQLServer = async () => {
  if (isConnected) return db

  try {
    let pool = await sql.connect(dbConfig)
    isConnected = pool.connected
    return db
  } catch (err) {
    throw new Error(err)
  }
}

export default connectSQLServer