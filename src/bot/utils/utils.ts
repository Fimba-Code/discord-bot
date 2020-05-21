import { TextChannel, Channel, Collection, VoiceChannel } from "discord.js"

export const fromMessageGetArgsAndCommand = (message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  return { args, command }
}

export const findChannelByName = (
  channelName: string,
  channels: Collection<string, TextChannel | VoiceChannel>
): TextChannel | VoiceChannel => {
  return channels.find((ch) => ch.name === channelName)
}

export const findChannelsByName = (
  channelNames: string[],
  channels: Collection<string, TextChannel | VoiceChannel>
) => {
  return channelNames.reduce((acc, channelName): Array<
    TextChannel | VoiceChannel
  > => {
    const channel = findChannelByName(channelName, channels)
    acc.push(channel)
    return acc
  }, [])
}

export const mapToChannelIds = (
  channels: Array<TextChannel | VoiceChannel>
): string[] => {
  return channels.reduce(
    (acc, channel: TextChannel | VoiceChannel): string[] => {
      return [...acc, `<#${channel.id}>`]
    },
    []
  )
}
