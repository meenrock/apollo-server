import { db } from ''
import sql from 'mssql'

const execStored = function (storedName, params) {
  return new Promise(function (resolve, reject) {
    sql.connect(dbConfig).then((pool) => {
      const request = pool.request()
      params?.forEach((item) => {
        request.input(item.key, item.type, item.value)
      })
      request
        .execute(storedName)
        .then((result) => {
          resolve(result.recordset)
        })
        .catch((err) => {
          console.error('sql error', err)
          reject(err)
        })
        .finally(() => {
          // pool.close();
        })
    })
  })
}

export default execStored