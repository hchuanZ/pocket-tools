const config = {
    dataBaseConfig: {
        "username": process.env.DB_USER,
        "host": process.env.DB_HOST,
        "database": process.env.DB_NAME,
        "password": process.env.DB_PASSWORD,
        "dialect": "mysql"
    },
    secret_key: 'pocket_tools'
}

module.exports = config