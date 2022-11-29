const express = require("express");
const mongoose = require("mongoose");
const User = require("./auth.model");

const app = express.Router();

app.get("/:id", async (req, res) => {
  try {
    let users = await User.findOne({ _id: req.params.id });

    res.send(users);
  } catch (e) {
    res.send(e.message);
  }
});

app.get("", async (req, res) => {
  const { q } = req.query;
  try {
    if (q) {
      let temp = new RegExp(q, "i");
      let users = await User.find({ fName: temp });
      res.send(users);
    } else {
      let users = await User.find();
      res.send(users);
    }
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    if (password === user.password) {
      res.send({
        token: `${user.email}:${user._id}:${user.password}`,
      });
    } else {
      res.send("password is incorrect");
    }
  } else {
    res.send("You have to Signup first");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    res.send("user already exist");
  } else {
    let user = await User.create(req.body);
    res.send("Acc created Successfully");
  }
});

app.patch("", async (req, res) => {
  console.log(req.headers.token);
  const [email, _id, password] = req.headers.token.split(":");
  const {
    bio,
    image,
    cover_image,
    city,
    lives_in,
    status,
    works_at,
    worked_at,
    number,
    school,
    intersted_in,
    about_you,
    favourite_quote,
    life_event,
    user_name,
    user_image,
    type,
  } = req.body;

  if (type == "friends") {

    let friend = await User.findById(_id);
    if (
      friend.find((el) => {
        if (el.user_name == user_name) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      return res.send("Already exist");
    } else {
      let temp = await User.findByIdAndUpdate(_id, {
        $push: {
          friends: { user_name, user_image },
        },
      });
      res.send(temp);
    }
  } else if (type == "followers") {
    let temp = await User.findByIdAndUpdate(_id, {
      $push: {
        followers: { user_name, user_image },
      },
    });
    res.send(temp);
  } else if (type == "removeFriend") {
    let temp = await User.findByIdAndUpdate(_id, {
      $pull: {
        friends: { user_name, user_image },
      },
    });
    res.send(temp);
  } else {
    console.log({ lives_in });
    let temp = await User.findByIdAndUpdate(
      { _id: _id },
      {
        $set: {
          "userDetails.bio": bio,
          "userDetails.image": image,
          "userDetails.cover_image": cover_image,
          "userDetails.city": city,
          "userDetails.lives_in": lives_in,
          "userDetails.status": status,
          "userDetails.works_at": works_at,
          "userDetails.number": number,
          "userDetails.school": school,
          "userDetails.intersted_in": intersted_in,
          "userDetails.about_you": about_you,
          "userDetails.favourite_quote": favourite_quote,
        },
        $push: {
          "userDetails.life_event": life_event,
          "userDetails.worked_at": worked_at,
        },
      }
    );
    res.send(temp);
  }
});

module.exports = app;
