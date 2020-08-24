import cygnus from '../databases/cygnus'
import { DataTypes } from 'sequelize'

const User = cygnus.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  }
})

User.fetchAllUsers = async () => {
  try {
    return await User.findAll()
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

User.fetchOneUser = async id => {
  try {
    return await User.findOne({ where: id })
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

User.createUser = async user => {
  try {
    return await User.create(user)
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

User.deleteUser = async id => {
  try {
    await User.destroy({
      where: {
        id
      }
    })
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

User.updateUser = async (id, user) => {
  try {
    return await User.update(user, {
      where: {
        id
      },
      returning: true,
      plain: true
    })
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

export { User as default }
