const express = require('express');
const   upload  = require('../Config/multer');
const { creatUser, getUser, login, deleteuser, updateUser, getUserbyid } = require('../Controller/userController');

const router = express.Router();

router.post('/register', upload.array("photo"), creatUser)
router.post('/login', login)
router.get('/user', getUser)
router.delete('/user/:id', deleteuser)
router.get('/register/:id', getUserbyid )
router.put('/register/:id', upload.array("photo"), updateUser)




module.exports = router;