module.exports = {
  name: "math",
  run: async (message, args, client) => {
    let q1 = Math.floor(Math.random() * 100) + 1;
    let q2 = Math.floor(Math.random() * 100) + 1;
    let operations = ["+", "-", "×", "÷", "×", "÷"];
    if (q1 > 20 || q2 > 20) {
      operations = ["+", "-"];
    }
    let operator = operations[Math.floor(Math.random() * operations.length)];
    let answer;
    if (operator == "+") answer = q1 + q2;
    if (operator == "-") answer = q1 - q2;
    if (operator == "×") answer = q1 * q2;
    if (operator == "÷") answer = q1 / q2;
    message.channel.send(
      `Question: What is ${q1} ${operator} ${q2}? You have 10 seconds to answer!`
    );
    setTimeout(function() {
      message.channel.send(`Answer: ${answer}`);
    }, 10000);
  }
};
