const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const Course = require('../models/course-model');


// ********************** //
// This is Register Logic //
// ********************** //
exports.register = async (req, res) => {
    try {
        console.log(req.body);
        const { role, name, email, contact, password } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" })
        }
        const userCreated = await User.create({ role, name, email, contact, password });
        return res.status(200).json({ msg: "Registration Successfull", });
    }
    catch (error) {
        return res.status(500).json('Internal server error from register');
    }
};

exports.getUser = async (req, res) => {
    try {
        const users = await User.find();
        // console.log(users);
        if (users) {
            return res.status(200).json({ msg: users });
        }
        else {
            return res.status(200).json({ msg: "No user exists" });
        }

    } catch (error) {
        return res.status(500).json('internal server error from getUser');
    }
}

exports.deleteUser = async (req, res) => {
    try {
        _id = req.params.id;
        // console.log(_id)
        const user = await User.findOne({ _id });
        // console.log(user);
        if (user) {
            const del = await User.deleteOne({ _id });
            return res.status(200).json({ msg: "Course Deleted" });
        }
        else {
            return res.status(200).json({ msg: "No course exists" });
        }

    } catch (error) {
        return res.status(500).json('internal server error from deleteCourse');
    }
}

exports.updateUser = async (req, res) => {
    try {
        _id = req.params.id;
        // console.log(_id)
        const user = await User.findOne({ _id });
        // console.log(user)
        if (user) {
            const update = await User.updateOne({ _id }, { $set:{ isAdmin: !user.isAdmin } });
            return res.status(200).json({ msg: "User Updated" });
        }
        else {
            return res.status(200).json({ msg: "No user exists" });
        }

    } catch (error) {
        return res.status(500).json('internal server error from update user');
    }
}

// ********************** //
// This is Login Logic    //
// ********************** //
exports.login = async (req, res) => {
    try {
        // console.log(req.body)
        const { email, password } = req.body;
        const userExist = await User.findOne({ email: email }, {});
        if (!userExist) {
            return res.status(200).json({ msg: "Invalid Credentials" });
        }
        if (password == userExist.password) {
            return res.status(200).json({
                msg: "Login Successfull",
                token: await userExist.generateToken(),
                user: userExist
            });
        } else {
            return res.status(200).json({ msg: "Invalid email or password" })
        }
    } catch (error) {
        return res.status(500).json('internal server error')
    }
}

// ********************** //
// This is Contact Logic  //
// ********************** //
exports.contactForm = async (req, res) => {
    try {
        const { name, contact, email, message } = req.body;
        // console.log(req.body);
        await Contact.create({ name, contact, email, message });
        return res.status(200).json({ message: "Message send successfully" })
    } catch (error) {
        return res.status(200).json({ message: "Message not delivered" })
    }

};

exports.getContact = async (req, res) => {
    try {
        const users = await Contact.find();
        // console.log(users);
        if (users) {
            return res.status(200).json({ msg: users });
        }
        else {
            return res.status(200).json({ msg: "No user exists" });
        }
    } catch (error) {
        return res.status(500).json('Internal server error from getContact');
    }
}

exports.deleteContact = async (req, res) => {
    try {
        _id = req.params.id;
        // console.log(_id)
        const contact = await Contact.findOne({ _id });
        // console.log(contact);
        if (contact) {
            const del = await Contact.deleteOne({ _id });
            return res.status(200).json({ msg: "Contact Deleted" });
        }
        else {
            return res.status(200).json({ msg: "No contact exists" });
        }

    } catch (error) {
        return res.status(500).json('Internal server error from deleteContact');
    }
}


// ********************** //
// This is Course Logic  //
// ********************** //
exports.addCourse = async (req, res) => {
    try {
        // console.log(req.body)
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ msg: 'Title is required!' });
        }
        const isCourse = await Course.findOne({ title })
        if (isCourse) {
            return res.status(400).json({ msg: 'Already exist!' });
        }
        const course = await Course.create({ title });
        return res.status(201).json({ msg: 'Succesfully created!', course })

    } catch (error) {
        return res.status(500).json('Internal server error from getUser');
    }
}

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        // console.log(users);
        if (courses) {
            return res.status(200).json({ msg: "Successfull", courses });
        }
        else {
            return res.status(200).json({ msg: "No Course exists" });
        }

    } catch (error) {
        return res.status(500).json('Internal server error from getCourses');
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        _id = req.params.id;
        // console.log(_id)
        const courses = await Course.findOne({ _id });
        // console.log(courses);
        if (courses) {
            const del = await Course.deleteOne({ _id });
            return res.status(200).json({ msg: "Course Deleted" });
        }
        else {
            return res.status(200).json({ msg: "No course exists" });
        }

    } catch (error) {
        return res.status(500).json('Internal server error from deleteCourse');
    }
}

