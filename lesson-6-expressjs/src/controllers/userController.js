const users = [
  {
    id: '1',
    name: 'Hieu',
  },
  {
    id: '2',
    name: 'Khai',
  },
  {
    id: '4',
    name: 'Tien',
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
  const { name } = req.body
  if (!name) {
    return res.status(400).json({
      isSuccess: false,
      message: 'invalid name',
    })
  }
  users.push({ id: `${users.length + 1}`, name })
  // var user = {
  //   id: '1232',0
  //   name: 'dean',
  //   job: 'fake',
  // }
  // users.push(user)

  return res.status(200).json({
    isSuccess: true,
    message: 'update success!',
    users,
  })
}
