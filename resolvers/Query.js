const Query = {
  users(parent, args, { User }, info) {
    return User.fetchAllUsers()
  }
}

export { Query as default }
