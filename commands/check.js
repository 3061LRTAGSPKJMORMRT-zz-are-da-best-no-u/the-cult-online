const db = require("quick.db");

module.exports = {
  name: "check",
  run: async (message, args, client) => {
    if (message.channel.name == "priv-aura-seer") {
      let guy =
        message.guild.members.find(m => m.nickname === args[0]) ||
        message.guild.members.find(m => m.id === args[0]) ||
        message.guild.members.find(m => m.user.username === args[0]);
      let ownself = message.guild.members.find(
        m => m.nickname === message.member.nickname
      );
      let did = await db.fetch(`did_${message.channel.id}`);
      if (ownself == guy || !guy || !guy.roles.has("584047417653985281"))
        return await message.reply("Invalid user!");
      if (did != null)
        return await message.reply("You already used your abilities!");
      let role = await db.fetch(`aura_${guy.id}`);
      message.channel.send(
        `You checked **${args[0]} ${guy.user.username} (${role}) **!`
      );
      db.set(`did_${message.channel.id}`, "1");
    } else if (message.channel.name == "priv-detective") {
      let did = await db.fetch(`did_${message.channel.id}`);
      if (did != null)
        return await message.reply("You already used your abilities!");

      let guy1 =
        message.guild.members.find(m => m.nickname === args[0]) ||
        message.guild.members.find(m => m.id === args[0]) ||
        message.guild.members.find(m => m.user.username === args[0]);

      let guy2 =
        message.guild.members.find(m => m.nickname === args[1]) ||
        message.guild.members.find(m => m.id === args[1]) ||
        message.guild.members.find(m => m.user.username === args[1]);

      let ownself = message.guild.members.find(
        m => m.nickname === message.member.nickname
      );

      if (
        !guy1 ||
        !guy2 ||
        guy1 == ownself ||
        guy2 == ownself ||
        !guy1.roles.has("584047417653985281") ||
        !guy2.roles.has("584047417653985281")
      )
        return message.channel.send("Target was not found!");

      if (guy1 == guy2)
        return message.channel.send("You can't select the same players!");

      let role1 = await db.fetch(`role_${guy1.id}`);
      let role2 = await db.fetch(`role_${guy2.id}`);

      let team1;
      let team2;

      if (
        role1 == "Villager" ||
        role1 == "Idiot" ||
        role1 == "Aura Seer" ||
        role1 == "Mason" ||
        role1 == "Grumpy Grandma" ||
        role1 == "Seer" ||
        role1 == "Seer Apprentice" ||
        role1 == "Detective" ||
        role1 == "Merchant"
      ) {
        team1 = "Village";
      } else if (
        role1 == "Cultist" ||
        role1 == "Noob Cultist" ||
        role1 == "Cursed Villager" ||
        role1 == "Minion" ||
        role1 == "Cult Leader" ||
        role1 == "Cult Shaman" ||
        role1 == "Cult Hypnotizer" ||
        role1 == "Cult Zombie"
      ) {
        team1 = "Cultist";
      } else {
        team1 = "Solo";
      }

      if (
        role2 == "Villager" ||
        role2 == "Idiot" ||
        role2 == "Aura Seer" ||
        role2 == "Mason" ||
        role2 == "Grumpy Grandma" ||
        role2 == "Seer" ||
        role2 == "Seer Apprentice" ||
        role2 == "Detective" ||
        role2 == "Merchant"
      ) {
        team2 = "Village";
      } else if (
        role2 == "Cultist" ||
        role2 == "Noob Cultist" ||
        role2 == "Cursed Villager" ||
        role2 == "Minion" ||
        role2 == "Cult Leader" ||
        role2 == "Cult Shaman" ||
        role2 == "Cult Hypnotizer" ||
        role2 == "Cult Zombie"
      ) {
        team2 = "Cultist";
      } else {
        team2 = "Solo";
      }

      if (!team1 == "Solo" && !team2 == "Solo") {
        if (team1 == team2) {
          message.channel.send(
            `Player **${guy1.nickname} ${guy1.user.username}** and **${guy2.nickname} ${guy2.user.username}** have the same team!`
          );
        } else if (team1 != team2) {
          message.channel.send(
            `Player **${guy1.nickname} ${guy1.user.username}** and **${guy2.nickname} ${guy2.user.username}** have different teams!`
          );
        }
      } else {
        message.channel.send(
          `Player **${guy1.nickname} ${guy1.user.username}** and **${guy2.nickname} ${guy2.user.username}** have different teams!`
        );
      }
      db.set(`did_${message.channel.id}`, "1");
    }
  }
};
