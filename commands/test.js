const Discord = require("discord.js");
const shuffle = require("shuffle-array");
const db = require("quick.db")

module.exports = {
  name: "test",
  description: "Ping!",
  run: async (message, args) => {
    db.set(`questsSkipped`, 5)
    db.set("started", "no")
  }
};
