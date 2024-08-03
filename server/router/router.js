const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer()
const verifyToken = require('../middleware/verifyToken');

//Require controllers item;
const controllers = require('../controllers/controllers');
const notesControllers = require('../controllers/notesController');

router.route('/register').post(controllers.register)
router.route('/login').post(controllers.login)

router.route('/user').get(controllers.getUser)
router.route('/user/:id').delete(controllers.deleteUser)

router.route('/contact')
    .post(controllers.contactForm)
    .get(controllers.getContact)
router.route('/contact/:id').delete(controllers.deleteContact)

router.route('/course')
    .post(controllers.addCourse)
    .get(controllers.getCourses)
router.route('/course/:id').delete(controllers.deleteCourse)

router.route('/notes').post(verifyToken, upload.fields([{ name: 'preview', maxCount: 1 }, { name: 'view', maxCount: 1 }]), notesControllers.addNotes)

module.exports = router;