module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'root',
            password: 'gabi1708'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
