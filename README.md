# KEKWChatterBot 
 Tells a story to twitch chat with delay.
 Uses emotes to determine when to type.
 
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Installation](#Installation)
* [How to use](#How-to-use)
* [Features](#features)
* [Issues](#issues)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
 
## General info
Edit what channel you want to tell a story to in the `app.js` --> `channels: ["channel here"]`
Get your own `userName` and `passWord=oauth` and paste it in the `.env`

Right now you can only tell a story to 1 chat at the sametime.
If your storytelling gets interupted, don't worry!
The word count is saved in a separate `wordCount.txt` that will create itself and update itself. BUT REMEMBER TO UPDATE THE APP WITH THE CURRENT NUBMER AFTER CLOSING THE APP

If you want to change the story --> Paste it in the `story.js`, be sure that the story is inside the   --> `` <--(backticks)

The default triggers are `KEKW` will type 1 word of the story to chat --> gets a timeout for 30 sec and a word block --> when someone types `LUL` then the story can resume from the start `KEKW`

## Technologies
* JavaScript 
     * Node.js
     * TMI.js
     * dotenv


 
## Installation
* `git clone https://github.com/HumAnTarg3t/KEKWChatterBot`
* `cd KEKWChatterBot`
* `npm install`
* Rename your `.env_temp` to `.env`
 
## How to use
`Node app` in the terminal.

 
## Features
* Deployed:
     * [X] Single chat teller

* In development:
     * [ ] Multiple chat teller.
     
  

 
## Issues
It's perfect:) (Havent tested it)
 
 
## Status
Project is: _never done_ but its up and _running_.

 
## Inspiration
The urge for learning.
 
## Contact
Created by [@HumAnTarg3t](https://github.com/HumAnTarg3t)
 
 

