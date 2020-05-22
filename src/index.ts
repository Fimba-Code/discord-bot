import "dotenv/config"
import Discord from "discord.js"
import { greetNewUsers, messages, userReactions } from "./functions"

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
})

client.once("ready", () => {
  console.log(`Hello world, I'm up and running 🤖!`)
})

client.on("guildMemberAdd", greetNewUsers)
client.on("message", messages)
client.on("messageReactionAdd", userReactions)

client.login(process.env.BOT_TOKEN)
