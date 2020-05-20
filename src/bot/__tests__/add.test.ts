import { greetNewUsers } from "../functions/greet-new-users"

// describe('Greetings', () => {
it("should greet new users", () => {
  const { FakeDiscordClient } = require("./utils/utils")
  const client = new FakeDiscordClient()
  client.on("guildMemberAdd", greetNewUsers)
  client.fireEvent("guildMemberAdd")
  expect(client.guild.channels.cache[0].send).toHaveBeenCalledTimes(1)
  expect(client.guild.channels.cache[0].message).toBeTruthy
})
// })
