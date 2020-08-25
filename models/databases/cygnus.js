import { Sequelize } from 'sequelize'

const cygnus = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    define: {
      timestamps: false
    }
  }
)

cygnus
  .authenticate()
  .then(() => {
    console.log("Connected to database 'Cygnus.'")
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

export { cygnus as default }
