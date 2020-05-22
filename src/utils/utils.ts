import {
  TextChannel,
  Channel,
  Collection,
  VoiceChannel,
  Message,
} from "discord.js"

export const fromMessageGetArgsAndCommand = (
  message: Message,
  prefix: string
) => {
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
  return channelNames.map((channelName): TextChannel | VoiceChannel =>
    findChannelByName(channelName, channels)
  )
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
