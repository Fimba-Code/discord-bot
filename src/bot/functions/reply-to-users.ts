export const replyToUsers = (messageContent: string) => {
  const greetings = [
    "ola",
    "olá",
    "tudo bem?",
    "tudo bem ?",
    "tudo bem",
    "na paz",
    "na paz?",
    "na paz ?",
    "fixe",
    "fixe?",
    "fixe ?",
    "como está",
    "como estás",
    "nas calmas",
    "nas calmas?",
    "nas calmas ?",
    "estás bem",
    "estás bem?",
    "estás bem ?",
    "?",
    "ta bater",
    "ta a bater",
    "ta a bater?",
    "ta a bater ?",
    "hey",
    "mekie",
  ]
  const phrases = [
    "Olá, como está?",
    "Tudo bem?",
    "Estou meio cansado hoje",
    "Eu estou bem, obrigado por perguntares :)",
  ]

  const count = greetings.reduce((acc, greet) => {
    if (messageContent.includes(greet)) ++acc
    return acc
  }, 0)
  if (count) {
    return phrases[Math.floor(Math.random() * phrases.length)]
  }
  return "Sup buddy 😎"
}
