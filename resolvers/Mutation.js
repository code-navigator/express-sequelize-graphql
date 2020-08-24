import { uuid } from 'uuidv4'

const Mutation = {
  createUser(parent, { data }, { User }, info) {
    console.log(data)

    const user = {
      id: uuid(),
      ...data
    }

    return User.createUser(user)
  },
  async deleteUser(parent, args, { User }, info) {
    const user = await User.fetchOneUser({ ...args })

    if (!user) {
      throw new Error('User not found.')
    }

    User.deleteUser(args.id)

    return user.dataValues
  },
  async updateUser(parent, { id, data }, { User }, info) {
    let user = await User.fetchOneUser({ id })

    if (!user) {
      throw new Error('User not found.')
    }

    user = await User.updateUser(id, { ...data })

    return user[1].dataValues
  }
}

export { Mutation as default }
