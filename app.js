const tmi = require("tmi.js");
const story = require("./story");
const fs = require("fs");
const readline = require("readline");
require("dotenv").config();
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const storyEdited = story.join(" ").split(" ");

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.userName,
    password: process.env.passWord,
  },
  channels: ['burn'],
});

client.connect();
let wordBlock = true;
let timeBlock = false;
let wordCount = 0;
client.on("message", (channel, tags, message, self) => {
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
        setTimeout(() => {
          timeBlock = false;
          console.log("TIME BLOCK OVER");
        }, 2000);

        //sette en pause på 30 sek her
      });
    }
  }
  if (message === "LUL") {
    wordBlock = true;
  }
});
