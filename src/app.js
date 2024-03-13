const express = require("express");
const {
  InteractionType,
  InteractionResponseType
} = require("discord-interactions");

const app = express();

app.post("/interactions", async (req, res) => {
  // Interaction type and data
  const { type, id, data } = req.body;

  // Handle verification requests
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  // Handle slash command request
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    // check command names
    if (name == "test") {
      // send a message into the channel where command was triggered from
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          // fetches a random emoji to send from a helper function
          contnet: 'hello world ' + getRandomEmoji()
        }
      });
    }
  }
});

module.exports = app;
