const Discord = require("discord.js"),
  db = require("quick.db");

module.exports = {
  name: "end",
  run: async (message, args, client) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      message.reply("You do not have permissions to use this!");
    } else {
      let playing = message.guild.roles.find(r => r.name === "Playing");
      let villager1 = message.guild.channels.get("584376999284310037");
      let cultist1 = message.guild.channels.get("584435149349847189");
      let seer = message.guild.channels.get("584436359029325835");
      let cursedVill1 = message.guild.channels.get("584437059217915908");
      let seerApp1 = message.guild.channels.get("584436863679594506");
      let cultSham = message.guild.channels.get("584438117537415189");
      let enterGame = message.guild.channels.get("584044607910969388");
      let gameLobby = message.guild.channels.get("584047758764146693");
      let playerCommands = message.guild.channels.get("584049078724198401");
      let cultChat = message.guild.channels.get("584374656677445642");
      let discussion = message.guild.channels.get("689865753960120339");
      let voting = message.guild.channels.get("584374713627705344");
      let questStatus = message.guild.channels.get("584434664035450925");
      let masonChat = message.guild.channels.get("585067498160783371");
      let music = message.guild.channels.get("584376713580904479");
      let auraSeer1 = message.guild.channels.get("584436800076906515");
      let fool = message.guild.channels.get("584437697553236094");
      let mason1 = message.guild.channels.get("584437758244945941");
      let mason2 = message.guild.channels.get("692015192342528080");
      let minion1 = message.guild.channels.get("584438169001525249");
      let detective1 = message.guild.channels.get("584436967199080451");
      let grumpyGrandma = message.guild.channels.get("584437333194178615");
      let prince = message.guild.channels.get("584437470012244130");
      let minion2 = message.guild.channels.get("584775291751104514");
      let merchant1 = message.guild.channels.get("584437619048579102");
      let cultLeader = message.guild.channels.get("584437987014737935");
      let mason3 = message.guild.channels.get("584775098741817480");
      let auraSeer2 = message.guild.channels.get("584439279191851022");
      let noobCultist = message.guild.channels.get("584438262794289156");
      //resetting the database
      let auraroles = message.guild.channels.filter(c => c.name === "priv-aura-seer")
      let aurarole = auraroles.keyArray("id")
      for (let a = 0; a < aurarole.length; a++) {
        db.set(`did_${aurarole[a]}`, null)
      }
      
      let detroles = message.guild.channels.filter(c => c.name === "priv-detective")
      let detrole = auraroles.keyArray("id")
      for (let a = 0; a < detrole.length; a++) {
        db.set(`did_${aurarole[a]}`, null)
      }
      
      // random channels
      let seer1 = message.guild.channels.get("692011607873552425");
      let asr1 = message.guild.channels.get("692011851436785685"); //aura seer
      let princer1 = message.guild.channels.get("692013791822479472");
      let vr1 = message.guild.channels.get("692011493813780531");
      let vr2 = message.guild.channels.get("692011493893603450");
      let vr3 = message.guild.channels.get("692011494795247668");
      let vr4 = message.guild.channels.get("692011497542516746");
      let cultistr1 = message.guild.channels.get("692011553351925890");
      let cultistr2 = message.guild.channels.get("692011553645527071");
      let cultistr3 = message.guild.channels.get("692011555239493652");
      let cultistr4 = message.guild.channels.get("692011555755130930");
      let cvr1 = message.guild.channels.get("692012683079319573");
      let cvr2 = message.guild.channels.get("692012681208529007");
      let cvr3 = message.guild.channels.get("692011665746559016");
      let cvr4 = message.guild.channels.get("692012682013966447");
      let seerappr1 = message.guild.channels.get("692011718099992627");
      let seerappr2 = message.guild.channels.get("692011717818843137");
      let seerappr3 = message.guild.channels.get("692011718271828029");
      let seerappr4 = message.guild.channels.get("692011718284673054");
      let cultshr = message.guild.channels.get("692011773384982598");
      let foolr = message.guild.channels.get("692011907582001213");
      let asr2 = message.guild.channels.get("692011848983248947");
      let asr3 = message.guild.channels.get("692011850627285033");
      let asr4 = message.guild.channels.get("692011851260887151");
      let merchr1 = message.guild.channels.get("692013835648892938");
      let merchr2 = message.guild.channels.get("692013835334451210");
      let merchr3 = message.guild.channels.get("692013836206735390");
      let merchr4 = message.guild.channels.get("692013836529565797");
      let masonr1 = message.guild.channels.get("692011949453738074");
      let masonr2 = message.guild.channels.get("692011949550075976");
      let masonr3 = message.guild.channels.get("692011950862893087");
      let masonr4 = message.guild.channels.get("692011951487713311");
      let minionr1 = message.guild.channels.get("692012052377763875");
      let minionr2 = message.guild.channels.get("692012053417951273");
      let minionr3 = message.guild.channels.get("692012054051029052");
      let minionr4 = message.guild.channels.get("692012054873112666");
      let detr1 = message.guild.channels.get("692012174331084881");
      let detr2 = message.guild.channels.get("692012175048310834");
      let detr3 = message.guild.channels.get("692012176629694474");
      let detr4 = message.guild.channels.get("692012198205194281");
      let ggr = message.guild.channels.get("692012280421941330"); // grumpy grandma
      let ncr = message.guild.channels.get("692013985276624906"); //noob cultist
      let clr = message.guild.channels.get("692014027097899039"); //cult leader
      
      
			//I will make the deleting part 
      // Aqua: ok, which one?
      // all of them. at the bottam?yes ok start xD I will join after I do this k:)k
      if (playing.members.size > 0) {
        for (let i = 1; i <= playing.members.size; i++) {
          let toKick = message.guild.members.find(
            m => m.nickname === i.toString()
          );
          if (toKick) {
            toKick.kick();
          }
        }
      }
      discussion.overwritePermissions(playing.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false,
        READ_MESSAGE_HISTORY: false
      });
      gameLobby.overwritePermissions(playing.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true
      });
      if (playing.members.size > 0) {
        let i;
        for (i = 1; i <= playing.members.size; i++) {
          let kicker = message.guild.members.find(
            m => m.nickname === i.toString()
          );
        }
      }
      villager1.bulkDelete(100);
      villager1.bulkDelete(100);
      cultist1.bulkDelete(100);
      cultist1.bulkDelete(100);
      seer.bulkDelete(100);
      seer.bulkDelete(100);
      cursedVill1.bulkDelete(100);
      cursedVill1.bulkDelete(100);
      seerApp1.bulkDelete(100);
      seerApp1.bulkDelete(100);
      cultSham.bulkDelete(100);
      cultSham.bulkDelete(100);
      enterGame.bulkDelete(100);
      enterGame.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      gameLobby.bulkDelete(100);
      playerCommands.bulkDelete(100);
      playerCommands.bulkDelete(100);
      playerCommands.bulkDelete(100);
      playerCommands.bulkDelete(100);
      playerCommands.bulkDelete(100);
      playerCommands.bulkDelete(100);
      playerCommands.bulkDelete(100);
      playerCommands.bulkDelete(100);
      cultChat.bulkDelete(100);
      cultChat.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      discussion.bulkDelete(100);
      voting.bulkDelete(100);
      voting.bulkDelete(100);
      questStatus.bulkDelete(100);
      questStatus.bulkDelete(100);
      masonChat.bulkDelete(100);
      masonChat.bulkDelete(100);
      music.bulkDelete(100);
      music.bulkDelete(100);
      auraSeer1.bulkDelete(100);
      auraSeer1.bulkDelete(100);
      fool.bulkDelete(100);
      fool.bulkDelete(100);
      mason1.bulkDelete(100);
      mason1.bulkDelete(100);
      mason2.bulkDelete(100);
      mason2.bulkDelete(100);
      minion1.bulkDelete(100);
      detective1.bulkDelete(100);
      detective1.bulkDelete(100);
      prince.bulkDelete(100);
      prince.bulkDelete(100);
      grumpyGrandma.bulkDelete(100);
      grumpyGrandma.bulkDelete(100);
      minion2.bulkDelete(100);
      minion2.bulkDelete(100);
      merchant1.bulkDelete(100);
      merchant1.bulkDelete(100);
      cultLeader.bulkDelete(100);
      cultLeader.bulkDelete(100);
      auraSeer2.bulkDelete(100);
      auraSeer2.bulkDelete(100);
      mason3.bulkDelete(100);
      mason3.bulkDelete(100);
      noobCultist.bulkDelete(100);
      noobCultist.bulkDelete(100);
      vr1.bulkDelete(100)
      vr2.bulkDelete(100)
      vr3.bulkDelete(100)
      vr4.bulkDelete(100)
			seer1.bulkDelete(100)
      asr1.bulkDelete(100)
      princer1.bulkDelete(100)
      princer1.bulkDelete(100)
      cultistr1.bulkDelete(100)
      cultistr2.bulkDelete(100)
      cultistr3.bulkDelete(100)
      cultistr4.bulkDelete(100)
      cvr1.bulkDelete(100)
      cvr2.bulkDelete(100)
      cvr3.bulkDelete(100)
      cvr4.bulkDelete(100)
      seerappr1.bulkDelete(100)
      seerappr2.bulkDelete(100)
      seerappr3.bulkDelete(100)
      seerappr4.bulkDelete(100)
      cultshr.bulkDelete(100)
      foolr.bulkDelete(100)
      asr2.bulkDelete(100)
      asr3.bulkDelete(100)
      asr4.bulkDelete(100)
      merchr1.bulkDelete(100)
      merchr2.bulkDelete(100)
      merchr3.bulkDelete(100)
      merchr4.bulkDelete(100)
			masonr1.bulkDelete(100)
      masonr2.bulkDelete(100)
      masonr3.bulkDelete(100)
      masonr4.bulkDelete(100)
      detr1.bulkDelete(100)
      detr2.bulkDelete(100)
      detr3.bulkDelete(100)
      detr4.bulkDelete(100)
      ggr.bulkDelete(100)
      ncr.bulkDelete(100)
      clr.bulkDelete(100)
 // LETS Add the embeds right below the revious ones, I added nc, gg and cl, for rest lets add below previous xD
      db.set(`did_584436800076906515`, null);
      villager1.send(
        new Discord.RichEmbed()
          .setTitle("Villager")
          .addField(
            "Description",
            "You are a regular villager without any special abilties."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")

          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579012137364619264.png?v=1"
          )
      );
      vr1.send(
        new Discord.RichEmbed()
          .setTitle("Villager")
          .addField(
            "Description",
            "You are a regular villager without any special abilties."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")

          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579012137364619264.png?v=1"
          )
      );
      vr2.send(
        new Discord.RichEmbed()
          .setTitle("Villager")
          .addField(
            "Description",
            "You are a regular villager without any special abilties."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")

          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579012137364619264.png?v=1"
          )
      );
      vr3.send(
        new Discord.RichEmbed()
          .setTitle("Villager")
          .addField(
            "Description",
            "You are a regular villager without any special abilties."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")

          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579012137364619264.png?v=1"
          )
      );
      vr4.send(
        new Discord.RichEmbed()
          .setTitle("Villager")
          .addField(
            "Description",
            "You are a regular villager without any special abilties."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")

          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579012137364619264.png?v=1"
          )
      );
      cultist1.send(
        new Discord.RichEmbed()
          .setTitle("Cultist")
          .addField(
            "Description",
            "You are a regular Cultist without any special abilties."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987367354957904/icon_sect_leader_filled-1.png"
          )
      );
      cultistr1.send(
        new Discord.RichEmbed()
          .setTitle("Cultist")
          .addField(
            "Description",
            "You are a regular Cultist without any special abilties."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987367354957904/icon_sect_leader_filled-1.png"
          )
      );
      cultistr2.send(
        new Discord.RichEmbed()
          .setTitle("Cultist")
          .addField(
            "Description",
            "You are a regular Cultist without any special abilties."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987367354957904/icon_sect_leader_filled-1.png"
          )
      );
      cultistr3.send(
        new Discord.RichEmbed()
          .setTitle("Cultist")
          .addField(
            "Description",
            "You are a regular Cultist without any special abilties."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987367354957904/icon_sect_leader_filled-1.png"
          )
      );
      cultistr4.send(
        new Discord.RichEmbed()
          .setTitle("Cultist")
          .addField(
            "Description",
            "You are a regular Cultist without any special abilties."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987367354957904/icon_sect_leader_filled-1.png"
          )
      );
      seer.send(
        new Discord.RichEmbed()
          .setTitle("Seer")
          .addField(
            "Description",
            "At the beginning of the game you will be able to see all members of the cult. Be careful to not reveal yourself to the cult. At the end of the game the cult may vote on who they think the seer is. If they find you, the village loses!"
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031275503878144.png?v=1"
          )
      );
      seer1.send(
        new Discord.RichEmbed()
          .setTitle("Seer")
          .addField(
            "Description",
            "At the beginning of the game you will be able to see all members of the cult. Be careful to not reveal yourself to the cult. At the end of the game the cult may vote on who they think the seer is. If they find you, the village loses!"
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031275503878144.png?v=1"
          )
      );
      cursedVill1.send(
        new Discord.RichEmbed()
          .setTitle("Cursed Villager")
          .setColor("#008800")
          .addField("Description", "You appear to be a cultist to the seers.")
          .addField("Team", "Villagers")
          .addField("Aura", "Cultist")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/692005750347923496/Photo_1585057097619.png"
          )
      );
      cvr1.send(
        new Discord.RichEmbed()
          .setTitle("Cursed Villager")
          .setColor("#008800")
          .addField("Description", "You appear to be a cultist to the seers.")
          .addField("Team", "Villagers")
          .addField("Aura", "Cultist")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/692005750347923496/Photo_1585057097619.png"
          )
      );
      cvr2.send(
        new Discord.RichEmbed()
          .setTitle("Cursed Villager")
          .setColor("#008800")
          .addField("Description", "You appear to be a cultist to the seers.")
          .addField("Team", "Villagers")
          .addField("Aura", "Cultist")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/692005750347923496/Photo_1585057097619.png"
          )
      );
      cvr3.send(
        new Discord.RichEmbed()
          .setTitle("Cursed Villager")
          .setColor("#008800")
          .addField("Description", "You appear to be a cultist to the seers.")
          .addField("Team", "Villagers")
          .addField("Aura", "Cultist")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/692005750347923496/Photo_1585057097619.png"
          )
      );
      cvr4.send(
        new Discord.RichEmbed()
          .setTitle("Cursed Villager")
          .setColor("#008800")
          .addField("Description", "You appear to be a cultist to the seers.")
          .addField("Team", "Villagers")
          .addField("Aura", "Cultist")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/692005750347923496/Photo_1585057097619.png"
          )
      );

      seerappr1.send(
        new Discord.RichEmbed()
          .setTitle("Seer Apprentice")
          .setColor("#008800")
          .addField(
            "Description",
            "At the beginning of the game, you will see who the seer is."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031104577732638.png?v=1"
          )
      );
      seerappr2.send(
        new Discord.RichEmbed()
          .setTitle("Seer Apprentice")
          .setColor("#008800")
          .addField(
            "Description",
            "At the beginning of the game, you will see who the seer is."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031104577732638.png?v=1"
          )
      );
      seerappr3.send(
        new Discord.RichEmbed()
          .setTitle("Seer Apprentice")
          .setColor("#008800")
          .addField(
            "Description",
            "At the beginning of the game, you will see who the seer is."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031104577732638.png?v=1"
          )
      );
      seerappr4.send(
        new Discord.RichEmbed()
          .setTitle("Seer Apprentice")
          .setColor("#008800")
          .addField(
            "Description",
            "At the beginning of the game, you will see who the seer is."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031104577732638.png?v=1"
          )
      );
      seerApp1.send(
        new Discord.RichEmbed()
          .setTitle("Seer Apprentice")
          .setColor("#008800")
          .addField(
            "Description",
            "At the beginning of the game, you will see who the seer is."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031104577732638.png?v=1"
          )
      );

      cultSham.send(
        new Discord.RichEmbed()
          .setTitle("Cult Shaman")
          .setColor("#008800")
          .addField(
            "Description",
            "You appear to be a seer to the Seer Apprentice."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987558535659530/136.png"
          )
      );

      enterGame.send(
        new Discord.RichEmbed()
          .setColor("00CC00")
          .setTitle("Welcome to The Cult Simulation in Discord!")
          .setDescription(
            "Hey there! Nice to meet you. Anyways, I'm the bot that will be handling the games. Although I can do it without narrators, I still want the good ol' humans. Anyways, to start, follow the commands below!\n\n`+joingame` - You can join a game! If there are 20 players or the game has started, this command will be disabled!\n`+spectate` - You can spectate the game if you want to see how it works!\n`+narrate` - Just don't try this command, it's only for narrators!"
          )
      );

      gameLobby.send(
        new Discord.RichEmbed()
          .setTitle("Hello there!")
          .setDescription(
            "We are still waiting for players.\nYou can talk with other players"
          )
          .setColor("#111111")
      );

      playerCommands.send(
        new Discord.RichEmbed()
          .setTitle("Rules")
          .setDescription(
            "1) Don't talk about the game here!\n2) This channel is for bot command only.\n3) All other rule is apply to this channel.\n 4) Have Fun!\n5) Don't said to Yologuy009 i steal his rules for the same channel in werewolf online simulation server!"
          )
          .setColor("#757387")
      );

      cultChat.send(
        new Discord.RichEmbed()
          .setTitle("Cultists")
          .setDescription(
            "Talk to other cultists here! You can't see the minion though."
          )
          .setColor("#864864")
      );

      discussion.send(
        new Discord.RichEmbed()
          .setTitle("Discussion Here")
          .setDescription("Discuss with other players here!")
          .setColor("#374538")
      );

      voting.send(
        new Discord.RichEmbed()
          .setTitle("Voting Here")
          .setDescription("When the narrator pings, you can react to vote!")
          .setColor("#294289")
      );

      questStatus.send(
        new Discord.RichEmbed()
          .setTitle("Quest Status")
          .setDescription("See if the quest was approved or failed!")
          .setColor("#762174")
      );

      masonChat.send(
        new Discord.RichEmbed()
          .setTitle("Masons Here")
          .setDescription("Chat with other masons here!")
          .setColor("#974823")
      );

      music.send(
        new Discord.RichEmbed()
          .setTitle("Music")
          .setDescription("Play the music commands here!")
          .setColor("#900137")
      );

      auraSeer1.send(
        new Discord.RichEmbed()
          .setTitle("Aura Seer")
          .addField(
            "Description",
            "At the beginning of the game you can select another player to see if they belong to the village or the cult."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031359205670913.png?v=1"
          )
      );
      asr1.send(
        new Discord.RichEmbed()
          .setTitle("Aura Seer")
          .addField(
            "Description",
            "At the beginning of the game you can select another player to see if they belong to the village or the cult."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031359205670913.png?v=1"
          )
      );
      asr2.send(
        new Discord.RichEmbed()
          .setTitle("Aura Seer")
          .addField(
            "Description",
            "At the beginning of the game you can select another player to see if they belong to the village or the cult."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031359205670913.png?v=1"
          )
      );
      asr3.send(
        new Discord.RichEmbed()
          .setTitle("Aura Seer")
          .addField(
            "Description",
            "At the beginning of the game you can select another player to see if they belong to the village or the cult."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031359205670913.png?v=1"
          )
      );
      asr4.send(
        new Discord.RichEmbed()
          .setTitle("Aura Seer")
          .addField(
            "Description",
            "At the beginning of the game you can select another player to see if they belong to the village or the cult."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579031359205670913.png?v=1"
          )
      );


      fool.send(
        new Discord.RichEmbed()
          .setTitle("Fool")
          .addField(
            "Description",
            "You win alone if at the end of the game the cult decides that you are the seer."
          )
          .addField("Aura", "Good")
          .addField("Team", "Villagers")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579029775197405204.png?v=1"
          )
      );
      foolr.send(
        new Discord.RichEmbed()
          .setTitle("Fool")
          .addField(
            "Description",
            "You win alone if at the end of the game the cult decides that you are the seer."
          )
          .addField("Aura", "Good")
          .addField("Team", "Villagers")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/579029775197405204.png?v=1"
          )
      );

      mason1.send(
        new Discord.RichEmbed()
          .setTitle("Mason")
          .addField("Description", "You will see who other masons are.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/603269607134068737.png?v=1"
          )
      );

      mason2.send(
        new Discord.RichEmbed()
          .setTitle("Mason")
          .addField("Description", "You will see who other masons are.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/603269607134068737.png?v=1"
          )
      );
      masonr1.send(
        new Discord.RichEmbed()
          .setTitle("Mason")
          .addField("Description", "You will see who other masons are.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/603269607134068737.png?v=1"
          )
      );

      masonr2.send(
        new Discord.RichEmbed()
          .setTitle("Mason")
          .addField("Description", "You will see who other masons are.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/603269607134068737.png?v=1"
          )
      );
      masonr3.send(
        new Discord.RichEmbed()
          .setTitle("Mason")
          .addField("Description", "You will see who other masons are.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/603269607134068737.png?v=1"
          )
      );

      masonr4.send(
        new Discord.RichEmbed()
          .setTitle("Mason")
          .addField("Description", "You will see who other masons are.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/603269607134068737.png?v=1"
          )
      );


      minion1.send(
        new Discord.RichEmbed()
          .setTitle("Minion")
          .addField(
            "Description",
            "At the beginning of the game you will not see the other members of the cult and they won't see you."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/586187598783971338.png?v=1"
          )
      );
      minionr1.send(
        new Discord.RichEmbed()
          .setTitle("Minion")
          .addField(
            "Description",
            "At the beginning of the game you will not see the other members of the cult and they won't see you."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/586187598783971338.png?v=1"
          )
      );
      minionr2.send(
        new Discord.RichEmbed()
          .setTitle("Minion")
          .addField(
            "Description",
            "At the beginning of the game you will not see the other members of the cult and they won't see you."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/586187598783971338.png?v=1"
          )
      );
      minionr3.send(
        new Discord.RichEmbed()
          .setTitle("Minion")
          .addField(
            "Description",
            "At the beginning of the game you will not see the other members of the cult and they won't see you."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/586187598783971338.png?v=1"
          )
      );
      minionr4.send(
        new Discord.RichEmbed()
          .setTitle("Minion")
          .addField(
            "Description",
            "At the beginning of the game you will not see the other members of the cult and they won't see you."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/586187598783971338.png?v=1"
          )
      );

      detr1.send(
        new Discord.RichEmbed()
          .setTitle("Detective")
          .addField(
            "Description",
            "At the beginning of the game you can select two players to see if they belong to the same team."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/584414354795921428.png?v=1"
          )
      );
      detr2.send(
        new Discord.RichEmbed()
          .setTitle("Detective")
          .addField(
            "Description",
            "At the beginning of the game you can select two players to see if they belong to the same team."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/584414354795921428.png?v=1"
          )
      );
      detective1.send(
        new Discord.RichEmbed()
          .setTitle("Detective")
          .addField(
            "Description",
            "At the beginning of the game you can select two players to see if they belong to the same team."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/584414354795921428.png?v=1"
          )
      );
      detr3.send(
        new Discord.RichEmbed()
          .setTitle("Detective")
          .addField(
            "Description",
            "At the beginning of the game you can select two players to see if they belong to the same team."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/584414354795921428.png?v=1"
          )
      );
      detr4.send(
        new Discord.RichEmbed()
          .setTitle("Detective")
          .addField(
            "Description",
            "At the beginning of the game you can select two players to see if they belong to the same team."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/584414354795921428.png?v=1"
          )
      );

      grumpyGrandma.send(
        new Discord.RichEmbed()
          .setTitle("Grumpy Grandma")
          .addField("Description", "You must always vote to fail a quest.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/584411378715197484.png?v=1"
          )
      );

      prince.send(
        new Discord.RichEmbed()
          .setTitle("Prince")
          .addField(
            "Description",
            "At the beginning of the game your role will be revealed to everybody."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/707020521904013322.png"
          )
      );
      princer1.send(
        new Discord.RichEmbed()
          .setTitle("Prince")
          .addField(
            "Description",
            "At the beginning of the game your role will be revealed to everybody."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/707020521904013322.png"
          )
      );


      minion2.send(
        new Discord.RichEmbed()
          .setTitle("Minion")
          .addField(
            "Description",
            "At the beginning of the game you will not see the other members of the cult and they won't see you."
          )
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/586187598783971338.png?v=1"
          )
      );

      merchant1.send(
        new Discord.RichEmbed()
          .setTitle("Merchant")
          .addField(
            "Description",
            "You only win with the village if the 5th quest is succesful. If the game ends before that you do not win with the village."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/707017469885415475.png?v=1"
          )
      );
      merchr4.send(
        new Discord.RichEmbed()
          .setTitle("Merchant")
          .addField(
            "Description",
            "You only win with the village if the 5th quest is succesful. If the game ends before that you do not win with the village."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/707017469885415475.png?v=1"
          )
      );

      merchr3.send(
        new Discord.RichEmbed()
          .setTitle("Merchant")
          .addField(
            "Description",
            "You only win with the village if the 5th quest is succesful. If the game ends before that you do not win with the village."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/707017469885415475.png?v=1"
          )
      );

      merchr2.send(
        new Discord.RichEmbed()
          .setTitle("Merchant")
          .addField(
            "Description",
            "You only win with the village if the 5th quest is succesful. If the game ends before that you do not win with the village."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/707017469885415475.png?v=1"
          )
      );

      merchr1.send(
        new Discord.RichEmbed()
          .setTitle("Merchant")
          .addField(
            "Description",
            "You only win with the village if the 5th quest is succesful. If the game ends before that you do not win with the village."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/707017469885415475.png?v=1"
          )
      );


      cultLeader.send(
        new Discord.RichEmbed()
          .setTitle("Cult Leader")
          .addField("Description", "The seer will not know your role.")
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987423256641546/29.png"
          )
      );
      mason3.send(
        new Discord.RichEmbed()
          .setTitle("Mason")
          .addField("Description", "Your will see who other masons are.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/603269607134068737.png?v=1"
          )
      );
      auraSeer2.send(
        new Discord.RichEmbed()
          .setTitle("Aura Seer")
          .addField(
            "Description",
            "At the beginning of the game you can select another player to see if they belong to the village or the cult."
          )
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/581504153453592577/658663629444349952/icon_aura_seer_filled.png"
          )
      );
      noobCultist.send(
        new Discord.RichEmbed()
          .setTitle("Noob Cultist")
          .addField("Description", "You must always vote to fail a quest.")
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987510976446484/136-1.png"
          )
      );
      
      ncr.send(
        new Discord.RichEmbed()
          .setTitle("Noob Cultist")
          .addField("Description", "You must always vote to fail a quest.")
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987510976446484/136-1.png"
          )
      );
      
      clr.send(
        new Discord.RichEmbed()
          .setTitle("Cult Leader")
          .addField("Description", "The seer will not know your role.")
          .addField("Team", "Cultist")
          .addField("Aura", "Cultist")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/579006776297521193/691987423256641546/29.png"
          )
      );
      
      ggr.send(
        new Discord.RichEmbed()
          .setTitle("Grumpy Grandma")
          .addField("Description", "You must always vote to fail a quest.")
          .addField("Team", "Villagers")
          .addField("Aura", "Good")
          .setColor("#008800")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/584411378715197484.png?v=1"
          )
      );
    }
  }
};
