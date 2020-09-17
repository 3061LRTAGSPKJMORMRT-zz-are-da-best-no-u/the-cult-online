const db = require("quick.db");

module.exports = {
  name: "buy",
  run: async (message, args, client) => {
    return message.channel.send('<:denied:730345256914255902> You can\'t buy anything if there are no items left to buy!')
    let lang = await db.fetch(`lang_${message.author.id}`)
    if (lang == null) db.set(`lang_${message.author.id}`, `en`) 
    lang = await db.fetch(`lang_${message.author.id}`) 
    let noArgs = await db.fetch(`${lang}.buy_no_args`)
    let noMoney = await db.fetch(`${lang}.buy_less_money`)
    let specialCustomCommandBuy = await db.fetch(`${lang}.buy_special_custom_cmd`)
    let customCommandBuy = await db.fetch(`${lang}.buy_custom_cmd`)
    
    if (!args[0]) {
      return await message.reply(noArgs);
    } else {
      if (message.guild.id != "565880459788025876") {
        return;
      } else {
        let ashish = message.guild.members.find(m => m.id === "524188548815912999");
        let balance = await db.fetch(`money_${message.author.id}`);
        let item = args.join(" ");
        let buying = item.toLowerCase() 
        if (buying == "special command") {
          if (balance < 5000) {
            message.reply(noMoney);
          } else {
            db.add(`money_${message.author.id}`, -5000);
            message.channel.send(specialCustomCommandBuy);
            ashish.send(
              `${message.user.username} has bougth the special custom command!`
            );
          }
        } else if (buying == "custom command") {
          if (balance < 1000) {
            message.reply(noMoney);
          } else {
            db.add(`money_${message.author.id}`, -1000);
            message.channel.send(customCommandBuy);
            ashish.send(
              `${message.author.username} has bougth the special custom command!`
            );
          }
        }
      }
    }
  }
};
