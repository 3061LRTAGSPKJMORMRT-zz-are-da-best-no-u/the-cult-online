module.exports = {
  name: "flip",
  run: async (message, args, client) => {
    let flip = ["heads", "tails"];
    flip = flip[Math.floor(Math.random() * 2)] 
    message.reply(flip)
  }
};
