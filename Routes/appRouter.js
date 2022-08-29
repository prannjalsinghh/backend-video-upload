const express = require("express");
const router = express.Router();
const User = require("../Schema/usersSchema");

router.route("/addData").post((req, res) => {
  const user = {
    name: req.body.name,
    number: req.body.number,
    image: req.body.image,
    verified: req.body.verified,
    work: req.body.work,
    about: req.body.about,
    rank: req.body.rank,
  };
  const newUser = new User({
    name: user.name,
    number: user.number,
    image: user.image,
    verified: user.verified,
    work: user.work,
    about: user.about,
    rank: user.rank,
    respects: [],
  });
  newUser.save();
  res.send("user created");
});

router.route("/getUsers").get((req, res) => {
  User.find().then((foundData) => {
    res.json(foundData);
  });
});

router.route("/findByNumber").post((req, res) => {
  console.log(req.body.number);
  User.findOne({ number: req.body.number }).then((foundData) =>
    res.send(foundData)
  );
});

router.route("/updateRespects").post( (req, res) => {
  console.log(req.body);
   User.findOneAndUpdate(
    { number: req.body.number },
    {$push:{ respects: req.body.respects }},
  ).then(()=>User.findOne({ number: req.body.number }).then((foundData) =>
      res.send(foundData)
))
});

module.exports = router;
