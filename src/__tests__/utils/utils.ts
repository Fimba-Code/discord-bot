type Channel = {
  // Feel free to add more properties here
  name: string
  message: string
  id: string
  send: () => void
}
export const createChannel = (name: string): Channel => {
  return {
    name,
    message: "",
    id: Math.random().toString(36).substr(2, 9),
    send: jest.fn(),
  }
}
