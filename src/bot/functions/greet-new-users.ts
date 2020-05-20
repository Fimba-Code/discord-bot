export const greetNewUsers = (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find((ch) => ch.name === "test")
  // Do nothing if the channel wasn't found on this server
  if (!channel) return
  // Send the message, mentioning the member
  channel.send(`
    Olá ${member}! 
    **Seja muito bem vinda(o) à nossa comunidade!** :rocket:

    > Esse é um espaço para você tirar suas dúvidas, compartilhar suas experiências, e principalmente, evoluir como programador.

    Algumas coisas importantes:
    - Use o canal #apresentações para fazer uma breve apresentação;
    - Cada categoria do servidor possui o canal #general , utilize-o para fazer networking (conversas genéricas);
    - Use o canal #help  (correspondendo à categoria) para ajudar e ser ajudado em tudo o que diz respeito à programação;
    - Compartilhe conteúdos interessantes (artigos, websites, tutoriais) no canal #links ;
    - Utilize o #vagas  para publicar ofertas de emprego;
    - As categorias são adicionadas consoante à sua movimentação na comunidade, então, caso não encontre um canal para a sua tecnologia, utilize o #off-topics .

    > Nós desejamos que todos colaborem com a visão desta comunidade. Caso vejas que alguém esteja apresentando alguma conduta que não encoraja o crescimento da comunidade, por favor, use @moderadores  para que possamos ajudar.

    **Happy Hacking**
  `)
}
