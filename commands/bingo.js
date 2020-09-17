const shuffle = require("shuffle-array")

module.exports = {
  name: "bingo",
  run: async (message, args, client) => {
    let array = []
    for (let i = 1; i < 91;i++) {
      array.push(i)
    }
      shuffle(array)
    console.log(array)
  }
}