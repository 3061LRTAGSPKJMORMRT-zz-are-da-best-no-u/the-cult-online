const db = require("quick.db")

module.exports = {
  name: "tccancel",
  run: async (message, args, client) => {
    if (message.member.hasPermission("MANAGE_ROLES")) {
      client.channels
        .get("567789735670448138")
        .send("Game has been canceled! Thank you for joining!");
      let joiningRole = message.guild.roles.find(r => r.name === "Joined");
      joiningRole.delete();
      message.guild.createRole({
        name: "Joined",
        color: "#000044"
      });
    }
    db.set(`game_${message.guild.id}`, null);
  }
};
