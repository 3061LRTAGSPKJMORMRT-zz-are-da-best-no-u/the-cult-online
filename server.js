const db = require("quick.db");
const Discord = require("discord.js");
/*let prefix = db.get(`prefix_${message.guild.id}`);
if (!prefix) {
  db.set(`prefix_${message.guild.id}`, "+");
  prefix = db.get(`prefix_${message.guild.id}`);
}*/

const Botlister = require("botlister")


const fs = require("fs"),
  client = new Discord.Client(),
  settings = {
    token: process.env.TOKEN
  };
if (!db.get("giveaways")) db.set("giveaways", []);
const { GiveawaysManager } = require("discord-giveaways");
const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
  // This function is called when the manager needs to get all the giveaway stored in the database.
  async getAllGiveaways() {
    // Get all the giveaway in the database
    return db.get("giveaways");
  }

  // This function is called when a giveaway needs to be saved in the database (when a giveaway is created or when a giveaway is edited).
  async saveGiveaway(messageID, giveawayData) {
    // Add the new one
    db.push("giveaways", giveawayData);
    // Don't forget to return something!
    return true;
  }

  async editGiveaway(messageID, giveawayData) {
    // Gets all the current giveaways
    const giveaways = db.get("giveaways");
    // Remove the old giveaway from the current giveaways ID
    const newGiveawaysArray = giveaways.filter(
      giveaway => giveaway.messageID !== messageID
    );
    // Push the new giveaway to the array
    newGiveawaysArray.push(giveawayData);
    // Save the updated array
    db.set("giveaways", newGiveawaysArray);
    // Don't forget to return something!
    return true;
  }

  // This function is called when a giveaway needs to be deleted from the database.
  async deleteGiveaway(messageID) {
    // Remove the giveaway from the array
    const newGiveawaysArray = db
      .get("giveaways")
      .filter(giveaway => giveaway.messageID !== messageID);
    // Save the updated array
    db.set("giveaways", newGiveawaysArray);
    // Don't forget to return something!
    return true;
  }
};

// Create a new instance of your new class
const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false, // Important - use false instead of a storage path
  updateCountdownEvery: 10000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "579011246024556546"
  }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

//const client = new Discord.Client();
client.commands = new Discord.Collection();

const cooldowns = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const lister = new Botlister({
  apiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6IjU0NDEyMzY1MjM1MDgwMzk2OSIsImlhdCI6MTU5OTg5MTQ1Mn0.sQ6C-vVDjbpvJ4Zb-9LkkBTTB4E6YNeUOhZLWNyJnO8",
  defaultBotId: "544123652350803969"
})

client.on("ready", () => {
  
  lister.updateBotStatistics({
        guilds: client.guilds.size,
        users: client.users.size
    }).then(() => console.log('Updated statistics on discordbotlist.com')).catch(console.error);
  console.log("Ready! ");
  client.user.setActivity(`version 0.5.1`, { type: "PLAYING" });
});

client.on("guildMemberAdd", member => {
  if (member.guild.id == "565880459788025876") {
    client.channels
      .get("566263868729327616")
      .send(
        `Welcome to The Cult Online ${member}! You can go to <#706875612526149652> for questions and support! We hope you enjoy your stay!`
      );
  }
});
let prefix = "+";

client.on("messageUpdate", (oldMessage, newMessage) => {
  if (newMessage.channel.type != "dm") {
    prefix = db.get(`prefix_${newMessage.guild.id}`);
    if (!prefix) {
      db.set(`prefix_${newMessage.guild.id}`, "+");
      prefix = db.get(`prefix_${newMessage.guild.id}`);
    }
  }
  if (!newMessage.content.startsWith(prefix) || newMessage.author.bot) return;
  let message = newMessage
  const args = newMessage.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );
  if (!command) return;
  if (!cooldowns.has(command.name)) {cooldowns.set(command.name, new Discord.Collection());}
  try {command.run(message, args, client)} catch (error) {console.error(error)} 
});
//client.on("debug", console.log)
client.on("message", message => {
  if (message.content == '-pls snipe' ) message.channel.send(`Never gonna give you up

Never gonna let you down

Never gonna run around and desert you

Never gonna make you cry

Never gonna say goodbye

Never gonna tell a lie and hurt you`) 
  if (message.channel.type != "dm") {
    prefix = db.get(`prefix_${message.guild.id}`);
    if (!prefix) {
      db.set(`prefix_${message.guild.id}`, "+");
      prefix = db.get(`prefix_${message.guild.id}`);
    }
    let mss = message.mentions.members.first();
    if (mss) {
      if (mss.id == "578945590210068490")
        return message.channel.send(
          "I think you are lost. My prefix for this server is `" + prefix + "`!"
        );
    }
  }
  /*if (message.content.includes('fuck')) {
    message.delete() 
    let umkk = 'boomerblindshish' 
    message.channel.send(`${message.author} said ${umkk} is a manager that doesnt know how to countdown.`) //STOP IT KACHIKAWAWA NO U
    } */
  /*  if (
    message.guild.id != "584044607910969386" &&
    message.guild.id != "565880459788025876"
  )
    return;*/
  // Game Chat
  if (message.channel.type == "dm" && !message.author.bot) {
    if (!message.content.startsWith("+")) {
      let chatDisabled = db.get("chatDisabled");
      if (chatDisabled === true) {
        message.author.send("You can't send messages right now!");
      } else {
        let players = db.get("players");
        let ap = db.get("playerNumb");
        if (players.includes(message.author.username)) {
          if (message.content.includes("\n")) {
            message.author.send("Your message contains more than one line!");
          } else {
            let terminal
            let discussion = db.get("discussion");
            if (discussion != true) return;
            for (let beggar = 1;beggar<=ap;beggar++) {
              let playerNick = db.get(`player_${beggar}`)
              if (message.author.id == playerNick) {
                terminal = beggar
              }
            }
            for (let i = 1; i <= ap; i++) {
              let player = db.get(`player_${i}`);
              let guy = client.users.get(player);
              if (player != message.author.id) {
                guy.send("**" + terminal + " " + message.author.username + "**: " + message.content);
              }
            }
          }
        }
      }
    }
  }
     console.log()
  /*if (message.content.startsWith('i\'m') || message.content.startsWith('im') || message.content.startsWith('I\'m') || message.content.startsWith('Im')) {
    const arg = message.content.slice(2).split(/ +/);
    message.channel.send(`Hi ${arg}, I'm dad`)
  }*/
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  let code;

  var alivePlayer = 0;
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  console.log(commandName);
  //if (!client.commands.has(commandName)) return;

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );
  if (!command) return;
  if (!cooldowns.has(command.name)) {cooldowns.set(command.name, new Discord.Collection());}

  try {
    command.run(message, args, client, code);
  } catch (error) {
    console.error(error);
    message.channel.send(
      "Uhh, there was an error when executing the command! This has been reported to the Dev! We are sorry for the inconvenience caused!"
    );
    client.channels
      .get("682915030437724194")
      .send("There had been an error! The command needs fixing!");
    console.log(command);
  }
});
let token = process.env.TOKEN;
client.login(token).then(() => console.log(client.guilds.size));

// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// =======================================================================
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var port = process.env.PORT || 3000;

// Routing
app.use(express.static("public"));
var numUsers = 0;

io.on("connection", function(socket) {
  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on("new message", function(data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit("new message", {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on("add user", function(username) {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit("login", {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit("user joined", {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on("typing", function() {
    socket.broadcast.emit("typing", {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on("stop typing", function() {
    socket.broadcast.emit("stop typing", {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", function() {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit("user left", {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});

// node server.js
//
