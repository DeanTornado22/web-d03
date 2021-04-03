let users = [
  {
    id: '1',
    name: 'Hieu',
    email: 'uh@gmail.com',
  },
  {
    id: '2',
    name: 'Khai',
    email: 'oke@gmail.com',
  },
  {
    id: '4',
    name: 'Tien',
    email: 'tieulongnu@gmail.com',
  },
]
module.exports.getUsers = (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: 'success',
    users,
  })
}
module.exports.getUsersById = (req, res) => {
  const { id } = req.params
  const user = users.find((user) => user.id === id)

  if (!user) {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the id user',
    })
  }
  return res.status(200).json({
    isSuccess: true,
    message: 'success',
    user: user,
  })
}
module.exports.createUser = (req, res) => {
  const { name, email } = req.body
  if (!name) {
    return res.status(400).json({
      isSuccess: false,
      message: 'invalid name',
    })
  }
  users.push({ id: `${users.length + 1}`, name, email })

  return res.status(200).json({
    isSuccess: true,
    message: 'update success!',
    users,
  })
}

module.exports.updateUserById = (req, res) => {
  const { id } = req.params
  const user = users.find((user) => user.id === id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    return res.status(200).json({
      isSuccess: true,
      message: 'success',
      users,
    })
  } else {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the id user',
    })
  }
}

module.exports.deleteUserById = (req, res) => {
  const { id } = req.params
  const user = users.find((user) => user.id === id)
  if (!user) {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the id user',
    })
  }
  users = users.filter((user) => user.id !== id)
  return res.status(200).json({
    isSuccess: true,
    message: 'delete success!',
    users,
  })
}
