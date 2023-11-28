const {Router} = require('express')
const Users = require('../../model/users.model')

const router = Router()

router.get('/', (req, res) => {
    res.render('createUser',{ 
        style: 'createUser.css',
    })
})


router.post('/', async (req, res) => {
    try{
        const {name, lastname, email, age, password} = req.body
        const userCreated = {
            name,
            lastname,
            email,
            age,
            password
        }

        const newUserCreated = await Users.create(userCreated) 

        res.redirect('/login');

    }catch(error)
    {
        res.json({message: error})
    }
})

module.exports = router;