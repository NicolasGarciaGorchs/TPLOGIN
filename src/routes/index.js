const usersController = require('../controllers/user/controller.users')
const loginController = require('../controllers/login/controller.login')
const profileController = require('../controllers/profile/controller.profile')
const logoutController = require('../controllers/logout/controller.logout')

const router = app => {
    app.use('/', usersController);
    app.use('/login', loginController);
    app.use('/profile', profileController);
    app.use('/logout', logoutController);
}
module.exports = router