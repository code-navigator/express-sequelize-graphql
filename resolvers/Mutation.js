import { uuid } from 'uuidv4'

const Mutation = {
  createUser(parent, args, { User }, info) {
    const user = {
      id: uuid(),
      ...args
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
  async updateUser(parent, args, { User }, info) {
    let user = await User.fetchOneUser({ id: args.id })

    if (!user) {
      throw new Error('User not found.')
    }

    user = await User.updateUser(args.id, { ...args })

    return user[1].dataValues
  }
}

export { Mutation as default }
