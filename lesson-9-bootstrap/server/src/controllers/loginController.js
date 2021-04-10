let loginUsers = []

module.exports.login = (req, res) => {
  const { name, email, password } = req.body
  loginUsers.push({ name, email, password })
  res.status(200).json({
    isSuccess: true,
    message: 'Login successfully!',
    loginUsers,
  })
}
