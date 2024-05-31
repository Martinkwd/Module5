class logger {
  log(value) {
    console.log(`[Calculator: ${value.id}]: ${value.result}`);
  }
}
module.exports = logger;
