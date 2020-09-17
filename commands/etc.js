module.exports = {
  name: "etc",
  run: async (message, args, client) => {
    message.guild.createRole({ 
      name: "Commander", 
      color: "Orange", 
      
    });
  }
};
