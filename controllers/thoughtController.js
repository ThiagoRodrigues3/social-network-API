const { User, Thought } = require('../models');

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find()
      .select('-__v')
      .then((UserData) => {
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('friends')
      .populate('thoughts')
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: 'No User Matched This ID' });
        }
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // create new user
  createUser(req, res) {
    User.create(req.body)
      .then((UserData) => {
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update  user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: 'No User Matched This ID' });
        }
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // delete user and thoughts from user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: 'No User Matched This ID' });
        }
        return Thought.deleteMany({ _id: { $in: UserData.thoughts } });
      })
      .then(() => {
        res.json({ message: 'User and Thoughts deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add to friends list
  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: 'No User Matched This ID' });
        }
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // remove from friends list
  removeFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: 'No User Matched This ID' });
        }
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
