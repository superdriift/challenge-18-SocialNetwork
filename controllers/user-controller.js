const { User, Thought } = require('../models');

const userController = {
    getUsers(req, res) {
        User.find().select('-__v').then((dbUserData) => {
            res.json(dbUserData);
        }).catch((err) => {
            console.log(err.message);
            res.status(500).json(err);
        });
    },
    getSingleUser(req, res) {
        User.find(_id: req.params.userid)
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(500).json({ error_message: 'No user found with this ID!'})
            }
            res.json(dbUserData)
        })
    },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => {

            })
    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    },


    addFriend(req, res) {

    }, 
    removeFriend(req, res) {

    }
}

module.exports = userController;