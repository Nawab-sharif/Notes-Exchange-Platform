const Notes = require('../models/notes-model');
const { uploadFile } = require('../utils');

exports.addNotes = async (req, res) => {
    try {
        const { courseId, title, price } = req.body;
        const userId = req.user

        if (!courseId || !title || !price) {
            return res.status(400).json({ msg: 'Some required field are missing.' });
        }

        const isNotes = await Course.findOne({ title })

        if (isNotes) {
            return res.status(400).json({ msg: 'Already exist!' });
        }

        const previewFile = req.files['preview'][0]
        const viewFile = req.files['view'][0]

        const [previewFileRes, viewFileRes] = await Promise.all([uploadFile(previewFile.buffer), uploadFile(previewFile.buffer)])
        const obj = { title, course: courseId, user: userId, price, previewUrl: previewFileRes?.secure_url, viewUrl: viewFileRes?.secure_url }
        // console.log(obj)
        const notes = await Notes.create(obj);

        return res.status(201).json({ msg: 'Succesfully created!', notes })

    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error from upload notes');
    }
}