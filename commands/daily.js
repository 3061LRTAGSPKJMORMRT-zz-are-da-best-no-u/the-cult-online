const Discord = require("discord.js");
const ms = require("parse-ms");
const db = require('quick.db')

module.exports = {
  name: "daily",
  run: async (message, args, client) => {
    let lang = await db.fetch(`lang_${message.author.id}`) 
    if (lang == null) db.set(`lang_${message.author.id}`, `en`)
    lang = await db.fetch(`lang_${message.author.id}`) 
    let dailyD = await db.fetch(`${lang}.daily`)
    let dailyTooEarly = await db.fetch(`${lang}.daily_too_early`)
    let hour = await db.fetch(`${lang}.hour`)
    let minute = await db.fetch(`${lang}.minute`) 
    let second = await db.fetch(`${lang}.second`) 
    let amount = 10
    let cooldown = 86400000
    let streak = 1728000000
    let smessage = '' 
    let streakAmount = await db.fetch(`sA_${message.author.id}`) 
   	if (streakAmount > 7) db.set(`sA_${message.author.id}`, 0)
    let daily = await db.fetch(`daily_${message.author.id}`)
    
    if (daily !== null && cooldown - (Date.now() - daily) > 0) {
      let time = ms(cooldown - (Date.now() - daily)) 
      
      message.reply(`${dailyTooEarly}**${time.hours} ${hour}, ${time.minutes} ${minute} & ${time.seconds} ${second}**.`)
    } else {
      if (daily !== null && streak - (Date.now() - daily) > 0) {
       // smessage = '\n**Streak:** '+ (1 + streakAmount).toString() + '<:5coin:692293093205999677>' 
        //db.add(`money_${message.author.id}`, (streakAmount + 1))
        db.set(`sA_${message.author.id}`, 0)
      } else {
        smessage = '\n**Streak:** ' + (1 + streakAmount).toString() + '<:5coin:692293093205999677>' 
        db.add(`sA_${message.author.id}`, 1) 
        db.add(`money_${message.author.id}`, (streakAmount + 1))
      } 
      message.channel.send(
      	new Discord.RichEmbed()
        .setTitle("Cha Ching") 
        .setDescription(`${dailyD}${smessage}`) 
      
      ) 
    	db.add(`money_${message.author.id}`, amount)
      db.set(`daily_${message.author.id}`, Date.now())
    } 
  }
};
