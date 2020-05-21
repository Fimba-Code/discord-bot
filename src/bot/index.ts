import "dotenv/config"
import Members from "../controller/MembersHelper"
import Discord from "discord.js"
import Points from "../constants/points"
import { greetNewUsers } from "./functions/greet-new-users"
import { prefix, codeBlock } from "./config.json"

// create a new Discord client
const client = new Discord.Client()

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log(`Hello world, I'm up and running 🤖!`)
})

client.on("message", async (message) => {
  // GAMIFY
  // Code block validator
  if (message.content.startsWith(codeBlock)) {
    await Members.addPoints(
      `${message.author.username}#${message.author.discriminator}`,
      Points.codeBlock
    )
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return
  client.on("guildMemberAdd", greetNewUsers)
  message.reply("Ola, sou o bot da Fimba :)")
})

client.login(process.env.BOT_TOKEN)
