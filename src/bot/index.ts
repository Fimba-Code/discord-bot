import "dotenv/config";
import Members from "../controller/MembersHelper";
import Discord from "discord.js";
import Points from "../constants/points";
const { token, prefix, codeBlock } = require("./config.json");

// create a new Discord client
const client = new Discord.Client();

client.once("ready", () => {
  //console.log("Ready!", { channels: client.channels });
});

const fromMessageGetArgsAndCommand = (message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  return { args, command };
};

client.on("message", async (message) => {
  // GAMIFY
  // Code block validator
  if (message.content.startsWith(codeBlock)) {
    await Members.addPoints(
      `${message.author.username}#${message.author.discriminator}`,
      Points.codeBlock
    );
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const { args, command } = fromMessageGetArgsAndCommand(message, prefix);

  message.reply("Ola, sou o bot da Fimba");
  // other commands...
});

client.login(token);
