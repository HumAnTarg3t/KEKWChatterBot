const tmi = require("tmi.js");
const story = require('./story')
const fs = require("fs");
const readline = require("readline");
require("dotenv").config();

const storyEdited = story.join(" ").split(" ");

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.userName,
    password: process.env.passWord,
  },
  channels: ["humantarg3t"],
});

client.connect();
let pauseOn = true;
let wordCount = 0;
client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;
  if (message === "forsenE" && pauseOn) {
    client.say(channel, storyEdited[wordCount]);
    console.log(storyEdited[wordCount]);
    wordCount += 1;
    pauseOn = false;
    fs.writeFile("./wordCount.txt", wordCount.toString(), "utf-8", (err) => {
      if (err) {
        return console.log(er);
      }
    });
  }
  if (message === "LUL") {
    pauseOn = true;
  }
});
