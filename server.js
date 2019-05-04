const fastify = require("fastify")({ logger: true });
const path = require("path");
const PORT = process.env.PORT || 8080;

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "view"),
});

fastify.get("/", async (req, res) => {
  res.sendFile("game_page.html");
});

const start = async () => {
  try {
    await fastify.listen(PORT);
    fastify.log.info(`server is running on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
