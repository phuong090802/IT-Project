const { 
    getGroup, 
    getMemberById, 
    addMember, 
    sendMessageById,
    sendMessageAll 
} = require('../controllers/controllers.groupcontroller');

const express = require("express");
const router = express.Router();

router.get('/', getGroup);
router.post('/', getGroup);

router.get('/20110547/:id', getMemberById);
router.post('/20110547/:id', addMember);

router.get('/message/:id', sendMessageById);
router.get('/message', sendMessageAll);
module.exports = router;
