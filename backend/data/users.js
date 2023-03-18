import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },
    {
        name: 'Karthik',
        email: 'karthik@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'Nanjunda',
        email: 'nanjunda@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
]  

export default users