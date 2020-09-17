const db = require("quick.db")

module.exports = {
  name: "tcstart",
  run: async (message, args, client) => {
    message.guild.channels.get("567789735670448138").send("Game has started!")
  }
}