//{ id, title, content, author, time, comments {author, comment}}
let posts = [
  {
    id: '1',
    title: 'Tai sao tui co don',
    content: 'Vi may co don',
    author: 'Dean',
    time: '22/7/2021',
    comments: {
      author: "What's up dude?",
      comment: 'This is great post!',
    },
  },
  {
    id: '2',
    title: 'Tai sao con gai hay la',
    content: 'Vi no thich',
    author: 'Khai',
    time: '22/8/2021',
    comments: {
      author: 'Mind Blown?',
      comment: 'Great lesson!',
    },
  },
  {
    id: '3',
    title: 'Lam sao ko e',
    content: 'Hay giau',
    author: 'Phat',
    time: '22/9/2021',
    comments: {
      author: 'Ok! I am done',
      comment: 'Good!',
    },
  },
]

module.exports.getPosts = (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: 'Posts are successfully crawled',
    posts,
  })
}

module.exports.getPostById = (req, res) => {
  const { id } = req.params
  const post = posts.find((pos) => pos.id === id)
  if (post) {
    return res.status(200).json({
      isSuccess: true,
      message: 'Post found!',
      post,
    })
  } else {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the post',
    })
  }
}

module.exports.createPost = (req, res) => {
  const checkValid = (...args) => {
    return args.some((arg) => arg === '')
  }
  const { id, title, content, author, time } = req.body
  if (checkValid(id, title, content, author, time)) {
    return res.status(400).json({
      isSuccess: false,
      message: 'invalid input',
    })
  }

  posts.push({ id, title, content, author, time })

  return res.status(200).json({
    isSuccess: true,
    message: 'update success!',
    posts,
  })
}

module.exports.updatePostById = (req, res) => {
  const { id } = req.params
  const post = posts.find((pos) => pos.id === id)
  if (post) {
    post.title = req.body.title || post.title
    post.author = req.body.author || post.author
    post.time = req.body.time || post.time
    post.content = req.body.content || post.content
    return res.status(200).json({
      isSuccess: true,
      message: 'success',
      posts,
    })
  } else {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the id user',
    })
  }
}

module.exports.deletePostById = (req, res) => {
  const { id } = req.params
  const post = posts.find((post) => post.id === id)
  if (!post) {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the id post',
    })
  }
  posts = posts.filter((post) => post.id !== id)
  return res.status(200).json({
    isSuccess: true,
    message: 'delete success!',
    posts,
  })
}
