const Feedback = require('../models/feedback-model');

exports.saveFeedback = async (req, res) => {
    try {
        const { notesId, feedback } = req.body;
        const userId = req.user;
        console.log(notesId)
        // return console.log(feedback,userId);
        if (!notesId || !feedback) {
            return res.status(400).json({ msg: 'Some required field are missing.' });
        }
        await Feedback.create({ user: userId, notes: notesId, feedback });
        return res.status(200).json({ msg: "Feedback send successfully" })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ msg: "Feedback not delivered" })
    }

};

exports.getFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
            .populate({ path: "user", select: "name contact" })
            .populate({ path: "notes", select: "title" });
        // console.log(users);
        if (feedbacks) {
            return res.status(200).json({ msg: feedbacks });
        }
        else {
            return res.status(200).json({ msg: "No feedback exists" });
        }
    } catch (error) {
        return res.status(500).json('Internal server error from getFeedback');
    }
}

exports.deleteFeedback = async (req, res) => {
    try {
        _id = req.params.id;
        // console.log(_id)
        const feedback = await Feedback.findOne({ _id });
        if (feedback) {
            const del = await Feedback.deleteOne({ _id });
            return res.status(200).json({ msg: "Feedback Deleted" });
        }
        else {
            return res.status(200).json({ msg: "No feedback exists" });
        }

    } catch (error) {
        return res.status(500).json('Internal server error from deleteContact');
    }
}