const shuffle = require("shuffle-array");
const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "srole",
  run: async (message, args, client) => {
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
      return;
    } else {
      let playing = message.guild.roles.find(r => r.name === "Playing");
      if (playing.members.size < 4) {
        message.reply(`You need at least 4 players to start a classic game!`);
      } else if (playing.members.size > 20) {
        message.reply(
          `You cannot host a classic game with more than 20 players!`
        );
      } else {
        let lobby = message.guild.channels.find(c => c.name === "game-lobby");
        let discussion = message.guild.channels.find(
          c => c.name === "discussion-chat"
        );
        let villager = message.guild.channels.find(
          c => c.id === "584376999284310037"
        );
        let cultChat = message.guild.channels.find(
          c => c.name === "the-cult-chat"
        );
        let cultist = message.guild.channels.find(
          c => c.id === "584435149349847189"
        );
        let seer = message.guild.channels.find(
          c => c.id === "584436359029325835"
        );
        let cursed = message.guild.channels.find(
          c => c.id === "584437059217915908"
        );
        let seerapprentice = message.guild.channels.find(
          c => c.id === "584436863679594506"
        );
        let cultshaman = message.guild.channels.find(
          c => c.id === "584438117537415189"
        );
        let auraseer1 = message.guild.channels.find(
          c => c.id === "584436800076906515"
        );
        let fool = message.guild.channels.find(
          c => c.id === "584437697553236094"
        );
        let masonChat = message.guild.channels.find(
          c => c.name === "mason-chat"
        );
        let mason1 = message.guild.channels.find(
          c => c.id === "584437758244945941"
        );
        let mason2 = message.guild.channels.find(
          c => c.id === "692015192342528080"
        );
        let minion1 = message.guild.channels.find(
          c => c.id === "584438169001525249"
        );
        let detective = message.guild.channels.find(
          c => c.id === "584436967199080451"
        );
        let grumpygrandma = message.guild.channels.find(
          c => c.id === "584437333194178615"
        );
        let prince = message.guild.channels.find(
          c => c.id === "584437470012244130"
        );
        let minion2 = message.guild.channels.find(
          c => c.id === "584775291751104514"
        );
        let merchant = message.guild.channels.find(
          c => c.id === "584437619048579102"
        );
        let cultleader = message.guild.channels.find(
          c => c.id === "584437987014737935"
        );
        let mason3 = message.guild.channels.find(
          c => c.id === "584775098741817480"
        );
        let auraseer2 = message.guild.channels.find(
          c => c.id === "584439279191851022"
        );
        let noobcultist = message.guild.channels.find(
          c => c.id === "584438262794289156"
        );
        let guy1 = message.guild.members.find(m => m.nickname === "1");
        let guy2 = message.guild.members.find(m => m.nickname === "2");
        let guy3 = message.guild.members.find(m => m.nickname === "3");
        let guy4 = message.guild.members.find(m => m.nickname === "4");
        let guy5 = message.guild.members.find(m => m.nickname === "5");
        let guy6 = message.guild.members.find(m => m.nickname === "6");
        let guy7 = message.guild.members.find(m => m.nickname === "7");
        let guy8 = message.guild.members.find(m => m.nickname === "8");
        let guy9 = message.guild.members.find(m => m.nickname === "9");
        let guy10 = message.guild.members.find(m => m.nickname === "10");
        let guy11 = message.guild.members.find(m => m.nickname === "11");
        let guy12 = message.guild.members.find(m => m.nickname === "12");
        let guy13 = message.guild.members.find(m => m.nickname === "13");
        let guy14 = message.guild.members.find(m => m.nickname === "14");
        let guy15 = message.guild.members.find(m => m.nickname === "15");
        let guy16 = message.guild.members.find(m => m.nickname === "16");

        if (args[0] == "classic") {
          let seerCheck = ["0"];
          let seerAppCheck = ["0"];
          if (playing.members.size == "4") {
            let roles = ["Villager", "Cultist", "Seer", "Cursed Villager"];
            shuffle(roles);

            if (roles[0] == "Villager") {
              villager.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cultist") {
              seerCheck.push("1");
              cultChat.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Seer") {
              seer.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cursed Villager") {
              cursed.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              seerCheck.push("1");
            }
            if (roles[1] == "Villager") {
              villager.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cultist") {
              cultChat.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              seerCheck.push("2");
              cultist.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Seer") {
              seer.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cursed Villager") {
              cursed.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              seerCheck.push("2");
            }
            if (roles[2] == "Villager") {
              villager.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cultist") {
              cultChat.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              seerCheck.push("3");
              cultist.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Seer") {
              seer.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cursed Villager") {
              cursed.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              seerCheck.push("3");
            }
            if (roles[3] == "Villager") {
              villager.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cultist") {
              cultChat.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              seerCheck.push("4");
              cultist.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Seer") {
              seer.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cursed Villager") {
              cursed.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              seerCheck.push("4");
            }
            message.channel.send(
              new Discord.RichEmbed()
                .setTitle(`Roles for 4 players`)
                .addField("1 is", roles[0])
                .addField("2 is", roles[1])
                .addField("3 is", roles[2])
                .addField("4 is", roles[3])
            );
            db.set(`role_${guy1.id}`, roles[0]);
            db.set(`role_${guy2.id}`, roles[1]);
            db.set(`role_${guy3.id}`, roles[2]);
            db.set(`role_${guy4.id}`, roles[3]);

            lobby.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false,
              READ_MESSAGE_HISTORY: false
            });
            discussion.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              READ_MESSAGE_HISTORY: true,
              VIEW_CHANNEL: true
            });
            discussion.send(
              `<@&${playing.id}> Chatting with teammates has started!`
            );
            seer.send(
              `${playing} ${seerCheck[1]} & ${
                seerCheck[2]
              } are cultist<:cult_member:579012003675504645>!\n\n Beware! One of the players are a Cursed Villager<:cursed_villager:704024944333422662>!`
            );
            client.channels.get("567789735670448138").send(`Game has started!`);
          } else if (playing.members.size == "5") {
            let roles = [
              "Villager",
              "Cultist",
              "Seer",
              "Cursed Villager",
              "Seer Apprentice"
            ];
            shuffle(roles);
            if (roles[0] == "Villager") {
              villager.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cultist") {
              seerCheck.push("1");
              cultChat.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Seer") {
              seerAppCheck.push("1");
              seer.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cursed Villager") {
              seerCheck.push("1");
              cursed.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[1] == "Villager") {
              villager.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cultist") {
              seerCheck.push("2");
              cultChat.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Seer") {
              seerAppCheck.push("2");
              seer.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cursed Villager") {
              seerCheck.push("2");
              cursed.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[2] == "Villager") {
              villager.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cultist") {
              seerCheck.push("3");
              cultChat.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Seer") {
              seerAppCheck.push("3");
              seer.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cursed Villager") {
              seerCheck.push("3");
              cursed.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[3] == "Villager") {
              villager.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cultist") {
              seerCheck.push("4");
              cultChat.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Seer") {
              seerAppCheck.push("4");
              seer.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cursed Villager") {
              seerCheck.push("4");
              cursed.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[4] == "Villager") {
              villager.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cultist") {
              seerCheck.push("5");
              cultChat.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Seer") {
              seerAppCheck.push("5");
              seer.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cursed Villager") {
              seerCheck.push("5");
              cursed.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            message.channel.send(
              new Discord.RichEmbed()
                .setTitle(`Roles for 5 players`)
                .addField("1 is", roles[0])
                .addField("2 is", roles[1])
                .addField("3 is", roles[2])
                .addField("4 is", roles[3])
                .addField("5 is", roles[4])
            );
            db.set(`role_${guy1.id}`, roles[0]);
            db.set(`role_${guy2.id}`, roles[1]);
            db.set(`role_${guy3.id}`, roles[2]);
            db.set(`role_${guy4.id}`, roles[3]);
            db.set(`role_${guy5.id}`, roles[4]);

            lobby.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false,
              READ_MESSAGE_HISTORY: false
            });
            discussion.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              READ_MESSAGE_HISTORY: true,
              VIEW_CHANNEL: true
            });
            discussion.send(
              `<@&${playing.id}> Chatting with teammates has started!`
            );
            seer.send(
              `${playing} ${seerCheck[1]} & ${
                seerCheck[2]
              } are cultist<:cult_member:579012003675504645>!\n\n Beware! One of the players are a Cursed Villager<:cursed_villager:704024944333422662>!`
            );
            seerapprentice.send(
              `${playing} ${
                seerAppCheck[1]
              } is the Seer<:seer:579031275503878144>`
            );
            client.channels.get("567789735670448138").send(`Game has started!`);
          } else if (playing.members.size == 6) {
            let roles = [
              "Villager",
              "Cultist",
              "Seer",
              "Cursed Villager",
              "Seer Apprentice",
              "Cult Shaman"
            ];
            shuffle(roles);
            if (roles[0] == "Villager") {
              villager.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cultist") {
              seerCheck.push("1");
              cultChat.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Seer") {
              seerAppCheck.push("1");
              seer.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cursed Villager") {
              seerCheck.push("1");
              cursed.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cult Shaman") {
              seerCheck.push("1");
              seerAppCheck.push("1");
              cultChat.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[1] == "Villager") {
              villager.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cultist") {
              seerCheck.push("2");
              cultChat.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Seer") {
              seerAppCheck.push("2");
              seer.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cursed Villager") {
              seerCheck.push("2");
              cursed.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cult Shaman") {
              seerCheck.push("2");
              seerAppCheck.push("2");
              cultChat.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[2] == "Villager") {
              villager.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cultist") {
              seerCheck.push("3");
              cultChat.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Seer") {
              seerAppCheck.push("3");
              seer.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cursed Villager") {
              seerCheck.push("3");
              cursed.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cult Shaman") {
              seerCheck.push("3");
              seerAppCheck.push("3");
              cultChat.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[3] == "Villager") {
              villager.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cultist") {
              seerCheck.push("4");
              cultChat.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Seer") {
              seerAppCheck.push("4");
              seer.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cursed Villager") {
              seerCheck.push("4");
              cursed.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cult Shaman") {
              seerCheck.push("4");
              seerAppCheck.push("4");
              cultChat.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[4] == "Villager") {
              villager.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cultist") {
              seerCheck.push("5");
              cultChat.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Seer") {
              seerAppCheck.push("5");
              seer.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cursed Villager") {
              seerCheck.push("5");
              cursed.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cult Shaman") {
              seerCheck.push("5");
              seerAppCheck.push("5");
              cultChat.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[5] == "Villager") {
              villager.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Cultist") {
              seerCheck.push("6");
              cultChat.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Seer") {
              seerAppCheck.push("6");
              seer.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Cursed Villager") {
              seerCheck.push("6");
              cursed.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Seer Apprentice") {
              seerapprentice.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Cult Shaman") {
              seerCheck.push("6");
              seerAppCheck.push("6");
              cultChat.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            message.channel.send(
              new Discord.RichEmbed()
                .setTitle(`Roles for 5 players`)
                .addField("1 is", roles[0])
                .addField("2 is", roles[1])
                .addField("3 is", roles[2])
                .addField("4 is", roles[3])
                .addField("5 is", roles[4])
                .addField("6 is", roles[5])
            );
            db.set(`role_${guy1.id}`, roles[0]);
            db.set(`role_${guy2.id}`, roles[1]);
            db.set(`role_${guy3.id}`, roles[2]);
            db.set(`role_${guy4.id}`, roles[3]);
            db.set(`role_${guy5.id}`, roles[4]);
            db.set(`role_${guy6.id}`, roles[5]);

            lobby.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false,
              READ_MESSAGE_HISTORY: false
            });
            discussion.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              READ_MESSAGE_HISTORY: true,
              VIEW_CHANNEL: true
            });
            discussion.send(
              `<@&${playing.id}> Chatting with teammates has started!`
            );
            seer.send(
              `${playing} ${seerCheck[1]}, ${seerCheck[2]} & ${
                seerCheck[3]
              } are cultist<:cult_member:579012003675504645>!\n\n Beware! One of the players are a Cursed Villager<:cursed_villager:704024944333422662>!`
            );
            seerapprentice.send(
              `${playing} ${seerAppCheck[1]} & ${
                seerAppCheck[2]
              } are the Seers<:seer:579031275503878144>\n\nBeware! One of them is a Cult Shaman<:cult_shaman:586187742719770624>`
            );
            client.channels.get("567789735670448138").send(`Game has started!`);
          } else if (playing.members.size == 7) {
            let roles = [
              "Villager",
              "Cultist",
              "Seer",
              "Cursed Villager",
              "Seer Apprentice",
              "Cult Shaman",
              "Aura Seer"
            ];
            shuffle(roles);
            if (roles[0] == "Villager") {
              db.set(`aura_${guy1.id}`, "Good");
              villager.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cultist") {
              db.set(`aura_${guy1.id}`, "Cultist");
              seerCheck.push("1");
              cultChat.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Seer") {
              db.set(`aura_${guy1.id}`, "Good");
              seerAppCheck.push("1");
              seer.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cursed Villager") {
              db.set(`aura_${guy1.id}`, "Cultist");
              seerCheck.push("1");
              cursed.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Seer Apprentice") {
              db.set(`aura_${guy1.id}`, "Good");
              seerapprentice.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Cult Shaman") {
              db.set(`aura_${guy1.id}`, "Cultist");
              seerCheck.push("1");
              seerAppCheck.push("1");
              cultChat.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[0] == "Aura Seer") {
              auraseer1.overwritePermission(guy1.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[1] == "Villager") {
              db.set(`aura_${guy2.id}`, "Gold");

              villager.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cultist") {
              seerCheck.push("2");
              db.set(`aura_${guy2.id}`, "Cultist");

              cultChat.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Seer") {
              seerAppCheck.push("2");
              db.set(`aura_${guy2.id}`, "Good");

              seer.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cursed Villager") {
              seerCheck.push("2");
              db.set(`aura_${guy2.id}`, "Cultist");

              cursed.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Seer Apprentice") {
              db.set(`aura_${guy2.id}`, "Good");

              seerapprentice.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Cult Shaman") {
              db.set(`aura_${guy2.id}`, "Cultist");

              seerCheck.push("2");
              seerAppCheck.push("2");
              cultChat.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });

              cultshaman.overwritePermissions(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[1] == "Aura Seer") {
              auraseer1.overwritePermission(guy2.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[2] == "Villager") {
              db.set(`aura_${guy3.id}`, "Good");

              villager.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cultist") {
              seerCheck.push("3");
              db.set(`aura_${guy3.id}`, "Cultist");

              cultChat.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Seer") {
              seerAppCheck.push("3");
              db.set(`aura_${guy3.id}`, "Good");

              seer.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cursed Villager") {
              seerCheck.push("3");
              db.set(`aura_${guy3.id}`, "Cultist");

              cursed.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Seer Apprentice") {
              db.set(`aura_${guy3.id}`, "Good");

              seerapprentice.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Cult Shaman") {
              seerCheck.push("3");
              db.set(`aura_${guy3.id}`, "Cultist");

              seerAppCheck.push("3");
              cultChat.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[2] == "Aura Seer") {
              auraseer1.overwritePermissions(guy3.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[3] == "Villager") {
              db.set(`aura_${guy4.id}`, "Good");

              villager.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cultist") {
              db.set(`aura_${guy4.id}`, "Cultist");

              seerCheck.push("4");
              cultChat.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Seer") {
              db.set(`aura_${guy4.id}`, "Good");

              seerAppCheck.push("4");
              seer.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cursed Villager") {
              db.set(`aura_${guy4.id}`, "Cultist");

              seerCheck.push("4");
              cursed.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Seer Apprentice") {
              db.set(`aura_${guy4.id}`, "Good");

              seerapprentice.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Cult Shaman") {
              db.set(`aura_${guy4.id}`, "Cultist");

              seerCheck.push("4");
              seerAppCheck.push("4");
              cultChat.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[3] == "Aura Seer") {
              auraseer1.overwritePermissions(guy4.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[4] == "Villager") {
              db.set(`aura_${guy5.id}`, "Good");

              villager.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cultist") {
              db.set(`aura_${guy5.id}`, "Cultist");

              seerCheck.push("5");
              cultChat.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Seer") {
              db.set(`aura_${guy5.id}`, "Good");

              seerAppCheck.push("5");
              seer.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cursed Villager") {
              db.set(`aura_${guy5.id}`, "Cultist");

              seerCheck.push("5");
              cursed.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Seer Apprentice") {
              db.set(`aura_${guy5.id}`, "Good");

              seerapprentice.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Cult Shaman") {
              db.set(`aura_${guy5.id}`, "Cultist");

              seerCheck.push("5");
              seerAppCheck.push("5");
              cultChat.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[4] == "Aura Seer") {
              auraseer1.overwritePermissions(guy5.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[5] == "Villager") {
              db.set(`aura_${guy6.id}`, "Good");

              villager.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Cultist") {
              db.set(`aura_${guy6.id}`, "Cultist");

              seerCheck.push("6");
              cultChat.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultist.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Seer") {
              db.set(`aura_${guy6.id}`, "Good");

              seerAppCheck.push("6");
              seer.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Cursed Villager") {
              db.set(`aura_${guy6.id}`, "Cultist");

              seerCheck.push("6");
              cursed.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Seer Apprentice") {
              db.set(`aura_${guy6.id}`, "Good");

              seerapprentice.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Cult Shaman") {
              db.set(`aura_${guy6.id}`, "Cultist");

              seerCheck.push("6");
              seerAppCheck.push("6");
              cultChat.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultshaman.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[5] == "Aura Seer") {
              auraseer1.overwritePermissions(guy6.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            if (roles[6] == "Villager") {
              db.set(`aura_${guy2.id}`, "Good");

              villager.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[6] == "Cultist") {
              db.set(`aura_${guy1.id}`, "Cultist");
              seerCheck.push("7");
              cultist.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultChat.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[6] == "Seer") {
              db.set(`aura_${guy2.id}`, "Good");
              seerAppCheck.push("7");
              seer.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[6] == "Cursed Villager") {
              db.set(`aura_${guy1.id}`, "Cultist");
              seerCheck.push("7");
              cursed.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[6] == "Seer Apprentice") {
              db.set(`aura_${guy2.id}`, "Good");
              seerapprentice.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[6] == "Cult Shaman") {
              db.set(`aura_${guy1.id}`, "Cultist");
              seerCheck.push("7");
              seerAppCheck.push("7");
              cultshaman.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
              cultChat.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            } else if (roles[6] == "Aura Seer") {
              auraseer1.overwritePermissions(guy7.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
              });
            }
            message.channel.send(
              new Discord.RichEmbed()
                .setTitle(`Roles For 7 Players`)
                .addField("1 is", roles[0])
                .addField("2 is", roles[1])
                .addField("3 is", roles[2])
                .addField("4 is", roles[3])
                .addField("5 is", roles[4])
                .addField("6 is", roles[5])
                .addField("7 is", roles[6])
            );
            db.set(`role_${guy1.id}`, roles[0]);
            db.set(`role_${guy2.id}`, roles[1]);
            db.set(`role_${guy3.id}`, roles[2]);
            db.set(`role_${guy4.id}`, roles[3]);
            db.set(`role_${guy5.id}`, roles[4]);
            db.set(`role_${guy6.id}`, roles[5]);
            db.set(`role_${guy7.id}`, roles[6]);

            lobby.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false,
              READ_MESSAGE_HISTORY: false
            });
            discussion.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: true,
              READ_MESSAGE_HISTORY: true
            });
            discussion.send(`${playing} Preparation phase has started!`);
            seer.send(
              `${playing} ${seerCheck[1]}, ${seerCheck[2]} & ${
                seerCheck[3]
              } are Cultists!<:cultist:584411510038724617>`
            );
            seerapprentice.send(
              `${playing} ${seerAppCheck[1]} & ${
                seerAppCheck[2]
              } are Seers!<:seer:584409923975118854>`
            );
            client.channels.get("567789735670448138").send(`Game has started!`);
          } else if (playing.members.size == 8) {
            let roles = [
              "Villager",
              "Cultist",
              "Seer",
              "Cursed Villager",
              "Seer Apprentice",
              "Cult Shaman",
              "Aura Seer",
              "Fool"
            ];
            shuffle(roles);

            for (let i = 1; i < 9; i++) {
              let current = message.guild.members.find(
                m => m.nickname === i.toString()
              );
              db.set(`role_${current.id}`, roles[i - 1]);
              if (roles[i - 1] == "Villager") {
                db.set(`auraRole_${current.id}`, "Good");
                villager.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true
                });
              } else if (roles[i - 1] == "Cultist") {
                db.set(`auraRole_${current.id}`, "Cultist");
                seerCheck.push(i.toString());
                cultist.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true
                });
              } else if (roles[i - 1] == "Seer") {
                db.set(`auraRole_${current.id}`, "Good");
                seerAppCheck.push(i.toString());
                seer.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true
                });
              } else if (roles[i - 1] == "Cursed Villager") {
                db.set(`auraRole_${current.id}`, "Cultist");
                seerCheck.push(i.toString());

                cursed.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true
                });
              } else if (roles[i - 1] == "Seer Apprentice") {
                db.set(`auraRole_${current.id}`, "Good");

                seerapprentice.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  READ_MESSAGE_HISTORY: true,
                  VIEW_CHANNEL: true
                });
              } else if (roles[i - 1] == "Cult Shaman") {
                db.set(`auraRole_${current.id}`, "Cultist");
                seerCheck.push(i.toString());
                seerAppCheck.push(i.toString());
                cultshaman.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true
                });
              } else if (roles[i - 1] == "Aura Seer") {
                db.set(`auraRole_${current.id}`, "Good");

                auraseer1.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true
                });
              } else if (roles[i - 1] == "Fool") {
                db.set(`auraRole_${current.id}`, "Good");
                fool.overwritePermissions(current.id, {
                  SEND_MESSAGES: true,
                  READ_MESSAGE_HISTORY: true,
                  VIEW_CHANNEL: true
                });
              }
            }
            lobby.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false,
              READ_MESSAGE_HISTORY: false
            });
            discussion.overwritePermissions(playing.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: true,
              READ_MESSAGE_HISTORY: true
            });
            discussion.send(`${playing} Preparation Phase has started!`);
            seer.send(
              `${seerCheck[1]}, ${seerCheck[2]} & ${
                seerCheck[3]
              } are Cultists! <:cultist:584411510038724617>`
            );
            seerapprentice.send(
              `${seerAppCheck[1]} & ${
                seerAppCheck[2]
              } are Seers! <:seer:584409923975118854>`
            );
            client.channels.get("567789735670448138").send(`Game has started!`);
          } else if (playing.members.size == 9) {
            let roles = [
              "Villager",
              "Cultist",
              "Seer",
              "Cursed Villager",
              "Seer Apprentice",
              "Cult Shaman",
              "Aura Seer",
              "Fool",
              "Mason"
            ];
            shuffle(roles);
            let masons = [mason1, mason2] 
            for (let i = 1; i < 10; i++) {
              let guy = message.guild.members.find(
                m => m.nickname === i.toString()
              );
              db.set(`role_${guy.id}`, roles[i - 1]);
              if (roles[i - 1] == "Villager") {
                db.set(`aura_${guy.id}`, "Good");
                villager.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Cultist") {
                db.set(`aura_${guy.id}`, "Cultist");
                seerCheck.push(i.toString());
                cultist.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
                cultChat.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Seer") {
                db.set(`aura_${guy.id}`, "Good");
                seerAppCheck.push(i.toString());
                seer.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Seer Apprentice") {
                db.set(`aura_${guy.id}`, "Good");
                seerapprentice.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Cursed Villager") {
                db.set(`aura_${guy.id}`, "Good");
                seerCheck.push(i.toString());
                cursed.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Cult Shaman") {
                db.set(`aura_${guy.id}`, "Cultist");
                seerCheck.push(i.toString());
                seerAppCheck.push(i.toString());
                cultshaman.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
                cultChat.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Aura Seer") {
                db.set(`aura_${guy.id}`, "Good");
                auraseer1.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Fool") {
                db.set(`aura_${guy.id}`, "Good");
                fool.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              } else if (roles[i - 1] == "Mason") {
                db.set(`aura_${guy.id}`, "Good");
                mason1.overwritePermissions(guy.id, {
                  VIEW_CHANNEL: true,
                  READ_MESSAGE_HISTORY: true,
                  SEND_MESSAGES: true
                });
              }
              lobby.overwritePermissions(playing.id, {
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false,
                SEND_MESSAGES: false
              });
              discussion.overwritePermissions(playing.id, {
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true,
                SEND_MESSAGES: false
              });
              seer.send(
                `${seerCheck[1]}, ${seerCheck[2]} & ${
                  seerCheck[3]
                } are Cultists! <:cultist:584411510038724617>`
              );
              seerapprentice.send(
                `${seerAppCheck[1]} & ${
                  seerAppCheck[2]
                } are Seers! <:seer:584409923975118854>`
              );
              discussion.send(`${playing} Preparation Phase has started!`);
              client.channels
                .get("567789735670448138")
                .send("Game has started!");
            }
          } else if (playing.members.size == 10) {
            let roles = [
              "Villager",
              "Cultist",
              "Seer",
              "Cursed Villager",
              "Seer Apprentice",
              "Cult Shaman",
              "Aura Seer",
              "Fool",
              "Mason",
              "Mason"
            ];
            shuffle(roles);
            let masons = [mason1, mason2] 
            for (let i = 1; i < 11; i++) {
              let guy = message.guild.members.find(
                m => m.nickname === i.toString()
              )
              db.set(`role_${guy.id}`, roles[i-1])
              if (roles[i-1] == 'Villager') {
                db.set(`aura_${guy.id}`, 'Good')
                villager.overwritePermissions(guy.id, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true}) 
              } else if (roles[i-1] == 'Cultist') {
                seerCheck.push(i.toString())
                db.set(`aura_${guy.id}`, 'Cultist')
                cultist.overwritePermissions(guy.id, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true}) 
                cultChat.overwritePermissions(guy.id, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true}) 
              } else if (roles[i-1] == 'Seer') {
                seerAppCheck.push(i.toString())
                db.set(`aura_${guy.id}`, 'Good')
                seer.overwritePermissions(guy.id, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true})
              } else if (roles[i-1] == 'Cursed Villager') {
                db.set(`aura_${guy.id}`, 'Cultist')
                seerCheck.push(i.toString())
                cursed.overwritePermissions(guy.id, {SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, VIEW_CHANNEL: true}) 
              } else if (roles[i - 1] == 'Seer Apprentice') {
                db.set(`aura_${guy.id}`,'Good')
                seerapprentice.overwritePermissions(guy.id, {SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, VIEW_CHANNEL: true})
              } else if (roles[i-1] == 'Cult Shaman') {
                seerCheck.push(i.toString())
                seerAppCheck.push(i.toString())
                db.set(`aura_${guy.id}`, 'Cultist') 
                cultshaman.overwritePermissions(guy.id, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true}) 
              } else if (roles[i-1] == 'Aura Seer') {
                db.set(`aura_${guy.id}`, 'Good') 
                auraseer1.overwritePermissions(guy.id, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true})
              } else if (roles[i-1] == 'Fool') {
                db.set(`aura_${guy.id}`, 'Good')
                fool.overwritePermissions(guy.id, {SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, VIEW_CHANNEL: true}) 
              } else if (roles[i-1] == 'Mason') {
                db.set(`aura_${guy.id}`, 'Good')
                masons[0].overwritePermissions(guy.id, {SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, VIEW_CHANNEL: true}) 
                masonChat.overwritePermissions(guy.id, {SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, VIEW_CHANNEL: true}) 
                masons.pop(masons[0])
              } 
              lobby.overwritePermissions(playing.id, {SEND_MESSAGES: false, READ_MESSAGE_HISTORY: false, VIEW_CHANNEL: false})
              discussion.overwritePermissions(playing.id, {SEND_MESSAGES: false, READ_MESSAGE_HISTORY: true, VIEW_CHANNEL: true})
              seer.send(`${seerCheck[1]}, ${seerCheck[2]} & ${seerCheck[3]} are Cultists! <:cultist:584411510038724617>`)
              seerapprentice.send(`${seerAppCheck[1]} and ${seerAppCheck[2]} are Seers! <:seer:584409923975118854>`)
              masonChat.send(`${playing} Hello Masons! Have you finished your work? <:mason:725807444390838282>`)
              cultChat.send(`${playing} So cults, who are we fooling this game? <:cult_member:579012003675504645>`)
              discussion.send(`${playing} Preparation Phase has started!`)
              client.channels.get("567789735670448138").send("Game has started!") 
            }
          }
        }
      }
    }
  }
};
