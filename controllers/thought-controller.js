const { Thought, User } = require('../models');

const thoughtController = {

    getThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: -1 })
            .then((dbUserData) => {
                res.json(dbUserData)
            }).catch((err) => {
                console.log(err.message);
                res.status(500).json(err)
            })
    },
    
    getSingleThought(req,res) {
        Thought.find({ _id: req.params.thoughId })
        .then(res.json(dbUserData))
    },

    createThought(req, res) {
        Thought.create(req.body)
        .then((dbUserData) => {
            return User.findOneAndUpdate()
        })
    }
}