import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Thanh Dat',
    email: 'dat@example.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
  {
    name: 'Thanh Minh',
    email: 'minh@example.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
]

export default users