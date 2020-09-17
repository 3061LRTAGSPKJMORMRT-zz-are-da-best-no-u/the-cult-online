module.exports = {
  name: "narrate",
  description: "Ping!",
  run: async (message, args, client) => {
    if (message.author.id == "552814709963751425") {
      //Ashish
      message.react("👍");
      message.member.addRole("584049421185056799");
    } else if (message.author.id == "325281667998810124") {
      //NightKnight
      message.react("👍");
      message.member.addRole("584049421185056799");
    } else if (message.author.id == "620964363729371137") {
      //Aquamarine
      message.react("👍");
      message.member.addRole("584049421185056799");
    } else if (message.author.id == "426216697574326293") {
      //Aylan
      message.member.addRole("715388763651440711");
      message.react("👍");
      message.member.addRole("584049421185056799");
    } else if (message.author.id == "682604556487491604") {
      //Essernneresses
      message.react("👍");
      message.member.addRole("584049421185056799");
    } else if (message.author.id == "544362293602025493") {
      message.member.addRole("584049421185056799");
    } else {
      message.reply("I said don't try this command! It's only for narrators!");
    }
  }
};
