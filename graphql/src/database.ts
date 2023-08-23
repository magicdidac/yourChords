import { Connection, createConnection } from 'mysql2/promise'

const setConnection = async (): Promise<Connection> => {
    return await createConnection({
        host: process.env.DB_IP,
        user: process.env.DB,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: 3306
    })
}

export const callDB = async (query: string): Promise<any> => {
    const connection = await setConnection()
    const result = await connection.query(query)
    const data = result[0]

    return !data ? [] : data
}