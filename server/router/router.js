const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer()
const verifyToken = require('../middleware/verifyToken');

//Require controllers item;
const controllers = require('../controllers/controllers');
const notesControllers = require('../controllers/notesController');
const feedbackController = require('../controllers/feedbackController');

// User routes are here
router.route('/register').post(controllers.register)
router.route('/login').post(controllers.login)

router.route('/user').get(controllers.getUser)
router.route('/user/:id')
    .delete(controllers.deleteUser)
    .put(controllers.updateUser)

// Contact routes are here
router.route('/contact')
    .post(controllers.contactForm)
    .get(controllers.getContact)
router.route('/contact/:id').delete(controllers.deleteContact)


// Course routes are here
router.route('/course')
    .post(controllers.addCourse)
    .get(controllers.getCourses)
router.route('/course/:id').delete(controllers.deleteCourse)


// Notes routes are here
router.route('/notes')
    .post(verifyToken, upload.fields([{ name: 'preview', maxCount: 1 }, { name: 'view', maxCount: 1 }]), notesControllers.addNotes)
    .get(notesControllers.getNotes);
router.route('/notes/:id')
    .delete(notesControllers.deleteNotes)
    .put(notesControllers.updateNotes)


// Feedback routes are here
router.route('/feedback')
    .post(verifyToken, feedbackController.saveFeedback)
    .get(feedbackController.getFeedback)
router.route('/feedback/:id').delete(feedbackController.deleteFeedback)



module.exports = router;