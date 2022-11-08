const { Timer } = require("./src/library");

const timer = new Timer("2mins");

timer.on("setTime", async (timeObject, remainingTime) => {
  console.log(remainingTime);
});

timer.on("timeEnd", async (timeObject, setOn) => {
  console.log(`The timer was set on: ${setOn}`);
});
