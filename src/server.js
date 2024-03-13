const app = require("./app.js");
const { port } = require("./config.js")();

const serve = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

process.on("SIGTERM", async () => { await exterminate("SIGTERM"); });
process.on("SIGINT", async () => { await exterminate("SIGINT"); });

async function exterminate(callee) {
  console.log(`${callee} signal received`);
  serve.close(() => {
    console.log("HTTP Server Closed.");
  });
}
