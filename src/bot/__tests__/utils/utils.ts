import { __TEST__ } from "../../env"

type EventHandler = (arg: FakeMember | void) => void
type EventName = "guildMemberAdd" | string
type Event = Record<EventName, EventHandler>

interface Channel {
  name: string
  message: string
  // send: (message: string) => string;
}

type JEST_FN_CB = (
  firstArg: EventName | Channel,
  secondArg: EventHandler
) => any
const jestFn = (cb: JEST_FN_CB) => {
  if (__TEST__) {
    return jest.fn(cb)
  }
  return () => {
    console.log("Hi")
  }
}

export class FakeDiscordClient {
  events: Event
  private channels: FakeChannel[]
  private guild: FakeGuildMember
  private member: FakeMember
  // on: (eventName: EventName, cb: EventHandler) => void;
  // remove: (eventName: EventName, cb: EventHandler) => void;
  // fireEvent: (eventName: EventName) => void;

  constructor(
    channel?: FakeChannel,
    guild?: FakeGuildMember,
    member?: FakeMember
  ) {
    this.events = {}
    this.channels = [new FakeChannel("test")]
    this.guild = new FakeGuildMember(new FakeChannels(new FakeChannel("test")))
    this.member = new FakeMember(this.guild)
    this.events = {}

    if (channel) this.channels.push(channel)
    if (guild) this.guild = guild
    if (member) this.member = member
  }

  on = jestFn((eventName: string, cb: EventHandler) => {
    this.events[eventName] = cb
  })
  remove = jestFn((eventName: string, cb: EventHandler) => {
    if (eventName in this.events && this.events[eventName] === cb) {
      delete this.events[eventName]
    }
  })
  fireEvent = jestFn((eventName: string) => {
    if (this.events[eventName]) {
      const handler = this.events[eventName]
      switch (eventName) {
        case "guildMemberAdd":
          handler(this.member)
          return this
        default:
          return handler()
      }
    }
  })
}

export default class FakeChannel implements Channel {
  name: string
  message: string
  constructor(name: string) {
    this.name = name
    this.message = ""
  }
  send = jestFn((message: string): string => {
    this.message = message
    return this.message
  })
}

export class FakeChannels {
  cache: Channel[]
  constructor(channel?: Channel) {
    this.cache = []
    if (channel) {
      this.cache.push(channel)
    } else {
      this.cache.push(new FakeChannel("general"))
    }
  }
  addChannel = jestFn((channel: Channel): void => {
    this.cache.push(channel)
  })
}

export class FakeGuildMember {
  channels: FakeChannels
  constructor(channels: FakeChannels) {
    this.channels = channels
  }
}

export class FakeMember {
  guild: FakeGuildMember
  constructor(guild: FakeGuildMember) {
    this.guild = guild
  }
}
