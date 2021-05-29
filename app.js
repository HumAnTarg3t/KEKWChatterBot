const tmi = require("tmi.js");
const story = require("./story");
const fs = require("fs");
let readlineSync = require("readline-sync");
require("dotenv").config();
let twitchChannel = readlineSync.question(
  `What twitch channel?`
);

const storyEdited = story.join(" ").split(" ");

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.userName,
    password: process.env.passWord,
  },
  channels: [twitchChannel],
});
const emoteBlock = ["forsenE", "Kappa", "KEKW", "OMEGALUL"];
const emoteUnblock = ["LUL", "xqcL", "DansGame", "PogChamp"];

client.connect();
let wordBlock = true;
let timeBlock = false;
let testCount = readlineSync.question(
  `On what wordCount did you stop?(check wordCount.txt)`
);
let wordCount = testCount;

client.on("message", (channel, tags, message, self) => {
  //Adjust the timer here --> (MAX ms - MIN ms) + MIN ms
  let timer = Math.floor(Math.random() * (31000 - 30000) + 30000);
  let trimmaTimer = (timer / 1000).toPrecision(2);
  // Ignore echoed messages.
  if (self) return;
  if (emoteBlock.includes(message) && wordBlock) {
    if (!timeBlock) {
      client.say(channel, storyEdited[wordCount]);
      console.log(storyEdited[wordCount]);
      wordCount++;
      wordBlock = false;
      console.log("WORD BLOCK NOW");
      timeBlock = true;
      fs.writeFile("./wordCount.txt", wordCount.toString(), "utf-8", (err) => {
        if (err) {
          return console.log(er);
        }
        console.log("TIME BLOCK NOW");
        console.log(`WAITING ${trimmaTimer} SEC`);
        setTimeout(() => {
          timeBlock = false;
          console.log("TIME BLOCK OVER");
        }, timer);
      });
    }
  }
  if (emoteUnblock.includes(message)) {
    wordBlock = true;
    console.log(`WORD BLOCK OVER`);
  }
});
