const Notes = require('../models/notes-model');
const { uploadFile } = require('../utils');

exports.addNotes = async (req, res) => {
    try {
        const { courseId, title, price } = req.body;
        const userId = req.user
        const previewFile = req.files['preview'][0]
        const viewFile = req.files['view'][0]

        if (!courseId || !title || !price || !previewFile || !viewFile) {
            return res.status(400).json({ msg: 'Some required field are missing.' });
        }

        const isNotes = await Notes.findOne({ title })
        if (isNotes) {
            return res.status(400).json({ msg: 'Already exist!' });
        }


        const [previewFileRes, viewFileRes] = await Promise.all([uploadFile(previewFile.buffer), uploadFile(viewFile.buffer)])
        const obj = { title, course: courseId, user: userId, price, previewUrl: previewFileRes?.secure_url, viewUrl: viewFileRes?.secure_url }
        // console.log(obj)
        const notes = await Notes.create(obj);
        return res.status(201).json({ msg: 'Succesfully created!', notes })

    } catch (error) {
        // console.log(error)
        return res.status(500).json('internal server error from upload notes');
    }
}

exports.getNotes = async (req, res) => {
    try {
        const isApproved = req.query.approved || false
        const notes = await Notes.find({ isApproved })
            .populate({ path: "course", select: "title" })
            .populate({ path: "user", select: "name" })
        if (!notes.length) {
            return res.status(200).json({ msg: "Notes are not available", notes })
        }
        return res.status(200).json({ msg: "Successfull", notes })
    } catch (error) {
        // console.log(error)
        return res.status(500).json({ msg: "Something went wrong" })
    }
}

exports.deleteNotes = async (req,res) =>{
    try {
        _id = req.params.id;
        // console.log(_id)
        const notes = await Notes.findOne({ _id });
        // console.log(notes);
        if (notes) {
            const del = await Notes.deleteOne({ _id });
            return res.status(200).json({ msg: "Notes Deleted" });
        }
        else {
            return res.status(200).json({ msg: "No notes exists" });
        }

    } catch (error) {
        return res.status(500).json('internal server error from deleteNotes');
    }
}

exports.updateNotes = async (req,res) =>{
    try {
        _id = req.params.id;
        // console.log(_id)
        const notes = await Notes.findOne({ _id });
        // console.log(notes);
        if (notes) {
            const update = await Notes.updateOne({ _id } , {$set:{isApproved:true}});
            return res.status(200).json({ msg: "Notes Accepted" });
        }
        else {
            return res.status(200).json({ msg: "No notes exists" });
        }

    } catch (error) {
        return res.status(500).json('internal server error from updateNotes');
    }
}

