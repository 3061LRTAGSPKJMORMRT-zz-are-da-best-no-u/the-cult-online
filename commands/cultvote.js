module.exports = {
  name: "cultvote",
  run: async (message, args, client) => {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      let vote = message.guild.channels.find(c => c.name === "voting");
      vote.send(`Voting time! (${args} are cultists!)`)
    }
  }
};
