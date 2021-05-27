const tmi = require("tmi.js");
const story = require("./story");
const fs = require("fs");
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
let wordBlock = true;
let timeBlock = false;
let wordCount = 0;



client.on("message", (channel, tags, message, self) => {
  let timer = Math.floor(Math.random() * (31000 - 30000) + 30000);
  let trimmaTimer = (timer/1000).toPrecision(2)
  // Ignore echoed messages.
  if (self) return;
  if (message === "KEKW" && wordBlock) {
    if (!timeBlock) {
      client.say(channel, storyEdited[wordCount]);
      console.log(storyEdited[wordCount]);
      wordCount += 1;
      wordBlock = false;
      console.log("WORD BLOCK NOW");
      timeBlock = true;
      fs.writeFile("./wordCount.txt", wordCount.toString(), "utf-8", (err) => {
        if (err) {
          return console.log(er);
        }
        console.log("TIME BLOCK NOW");
        console.log(`Waiting ${trimmaTimer} sec`);
        setTimeout(() => {
          timeBlock = false;
          console.log("TIME BLOCK OVER");
        }, timer);
      });
    }
  }
  if (message === "LUL") {
    wordBlock = true;
    console.log(`WORD BLOCK OVER`);
  }
});
