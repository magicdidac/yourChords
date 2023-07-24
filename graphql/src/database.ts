import { Connection, createConnection } from 'mysql2/promise'

const setConnection = async (): Promise<Connection> => {
    return await createConnection({
        host: '89.116.147.103',
        user: 'u59068159_your_chords',
        database: 'u59068159_your_chords',
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