import { createChannel } from "./utils/utils"

describe("Greetings", () => {
  it("should greet new users", () => {
    const { greetNewUsers } = require("../functions/greet-new-users")
    const member = {
      guild: {
        channels: {
          cache: [
            createChannel("welcome"),
            createChannel("general"),
            createChannel("links"),
            createChannel("help"),
            createChannel("apresentações"),
            createChannel("off-topics"),
            createChannel("vagas"),
          ],
        },
      },
    }
    greetNewUsers(member)
    expect(member.guild.channels.cache[0].send).toHaveBeenCalledTimes(1)
    expect(member.guild.channels.cache[0].message).toBeTruthy
  })
})
