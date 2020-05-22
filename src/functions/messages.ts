import { Message } from "discord.js"
import replyToUsers from "../helpers/reply-to-users"
import { prefix, checkUrl } from "../config.json"
import Members from "../helpers/MembersHelper"
import Points from "../constants/points"

const isCodeBlock = "(`{3})([a-zA-Z0-9_ ])*(`{3})"

const messages = async (message: Message) => {
  {
    // ===== GAMIFY ======
    // URL
    if (new RegExp(checkUrl).test(message.content)) {
      await Members.addPoints(
        `${message.author.username}#${message.author.discriminator}`,
        Points.linkShare,
        `${message.author.avatarURL()}`
      )
    }

    // Code block validator
    if (new RegExp(isCodeBlock).test(message.content)) {
      await Members.addPoints(
        `${message.author.username}#${message.author.discriminator}`,
        Points.codeBlock,
        `${message.author.avatarURL()}`
      )
    }
    // ===== END GAMIFY ======

    // ===== BOT REPLIES =====
    if (!message.content.startsWith(prefix) || message.author.bot) return
    message.reply(replyToUsers(message.content.slice(prefix.length).trim()))
  }
}

export default messages
