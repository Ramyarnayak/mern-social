// const User = require("../models/User");
// const router = require("express").Router();
// const bcrypt = require("bcrypt");

// //update user
// router.put("/:id", async (req, res) => {
//       const user = await User.findByIdAndUpdate(req.params.id, {
//         $set: req.body,
//       });
//       res.status(200).json("Account has been updated");
   
// });

// //delete user
// router.delete("/:id", async (req, res) => {
//   if (req.body.userId === req.params.id || req.body.isAdmin) {
//     try {
//       await User.findByIdAndDelete(req.params.id);
//       res.status(200).json("Account has been deleted");
//     } catch (err) {
//       return res.status(500).json(err);
//     }
//   } else {
//     return res.status(403).json("You can delete only your account!");
//   }
// });

// //get a user
// router.get("/", async (req, res) => {
//   const userId = req.query.userId;
//   const username = req.query.username;
//   try { 
//       const user = userId
//       ? await User.findById(userId) 
//      : await User.findOne({ username: username })
//     const { password, updatedAt, ...other } = user._doc;
//     res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// //get all users
// router.get("/all", async (req, res) => {
 
 
//   try {
//     const user = 
//     await User.find()

   
     
//     // const { password, updatedAt, ...other } = user._doc;
//     res.status(200).json(user);
//     // res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// //get friends
// router.get("/friends/:userId", async (req, res) => {
//   try {
//     console.log(req.params.userId)
//     const user = await User.findById(req.params.userId);
//     const friends = await Promise.all(
//       user.followers.map((friendId) => {
//         return User.findById(friendId);
//       })
//     );
//     let friendList = [];
//     friends.map((friend) => {
//       const { _id, username, profilePicture } = friend;
//       friendList.push({ _id, username, profilePicture });
//     });
//     res.status(200).json(friendList)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// //get non friends
// router.get("/nonfriends/:userId", async (req, res) => {
//   try {
//     console.log(req.params.userId)
//     const allUsers = 
//     await User.find()

//     const user = await User.findById(req.params.userId);
//     const friends = await Promise.all(
//       user.followers.map((friendId) => {
//         return User.findById(friendId);
//       })
//     );
 
//     let friendList = [];
//     alluser=[];
//     friends.map((friend) => {
//       const { _id, username, profilePicture } = friend;
//       friendList.push({ _id, username, profilePicture });
//     });
//     let nonFriendList=[];
//     allUsers.map((allUser)=>{
//       const { _id, username, profilePicture } = allUser;
//       alluser.push({ _id, username, profilePicture }); 


//     })
//     nonFriendList = alluser.filter( el => {
//       return friendList.some( f => {
//         return f.username !== el.username
//       });
//     });
 
  
  
//     res.status(200).json(nonFriendList)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //follow a user

// router.put("/:id/follow", async (req, res) => {
  
//       const user = await User.findById(req.params.id);
//       const currentUser = await User.findById(req.body.userId);
//         await user.updateOne({ $push: { followings: req.body.userId } });
//         await currentUser.updateOne({ $push: { followers: req.body.friendId} });
//         res.status(200).json("user has been followed");
      

//   }
// );


// //save a friend

// router.post("/", async (req, res) => {
//   const newFriend = new Post(req.body);
//   try {
//     const savedFriend = await newFriend.save();
//     res.send()
//     res.status(200).json(savedFriend);
//   } catch (err) {
//     res.status(500).json("kk"+err);
//   }
// });

// //unfollow a user

// router.put("/:id/unfollow", async (req, res) => {
//   if (req.body.userId !== req.params.id) {
//     try {
//       const user = await User.findById(req.params.id);
//       const currentUser = await User.findById(req.body.userId);
//       if (user.followers.includes(req.body.userId)) {
//         await user.updateOne({ $pull: { followers: req.body.userId } });
//         await currentUser.updateOne({ $pull: { followings: req.params.id } });
//         res.status(200).json("user has been unfollowed");
//       } else {
//         res.status(403).json("you dont follow this user");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("you cant unfollow yourself");
//   }
// });



// // router.put("/:id/profilePic", async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.id);
// //     const currentUser = await User.findById(req.body.userId);
   
// // console.log(req.body.profilePicture)
// //      await user.updateOne({ $push: { profilePicture: req.body.profilePicture} });
// //       await currentUser.updateOne({ $push: { profilePicture: req.body.profilePicture} });
      
// //       res.status(200).json("user has been followed");
    
// //   } catch (err) {
// //     console.log(req.body.profilePicture)
// //     res.status(500).json(err);
// //   }
// // }
// // );  



// //get friends
// router.get("/friends/:userId", async (req, res) => {
//   try {
//     console.log(req.params.userId)
//     const user = await User.findById(req.params.userId);
//     const friends = await Promise.all(
//       user.followers.map((friendId) => {
//         return User.findById(friendId);
//       })
//     );
//     let friendList = [];
//     friends.map((friend) => {
//       const { _id, username, profilePicture } = friend;
//       friendList.push({ _id, username, profilePicture });
//     });
//     res.status(200).json(friendList)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;






const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get friends
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow a user

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});

//unfollow a user

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
});

module.exports = router;
