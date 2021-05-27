const tmi = require("tmi.js");
require("dotenv").config();

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.userName,
    password: process.env.passWord,
  },
  // channels: ["humantarg3t"],
  channels: ["humantarg3t"],
});

client.connect();
let pauseOn = true;
client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;
  if (message === "forsenE" && pauseOn) {
    client.say(channel, "Her kommer det en historie");
    pauseOn = false;
  }
  if (message === "LUL") {
    pauseOn = true;
  }
});
