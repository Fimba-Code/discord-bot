import { findChannelsByName, mapToChannelIds } from "../utils/utils"

export const greetNewUsers = (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "welcome"
  )
  // Do nothing if the channel wasn't found on this server
  if (!channel) return
  const MODERADORES_ID = "<@&703604014704754708>"
  const [
    general,
    links,
    help,
    apresentacoes,
    offTopics,
    vagas,
  ] = mapToChannelIds(
    findChannelsByName(
      ["general", "links", "help", "apresentações", "off-topics", "vagas"],
      member.guild.channels.cache
    )
  )
  // Send the message, mentioning the member
  channel.send(`
    Olá ${member}! 
    **Seja muito bem vinda(o) à nossa comunidade!** :rocket:
    > Esse é um espaço para você tirar suas dúvidas, compartilhar suas experiências, e principalmente, evoluir como programador.

    Algumas coisas importantes:
    - Use o canal ${apresentacoes} para fazer uma breve apresentação;
    - Cada categoria do servidor possui o canal ${general}, utilize-o para fazer networking (conversas genéricas);
    - Use o canal ${help} (correspondendo à categoria) para ajudar e ser ajudado em tudo o que diz respeito à programação;
    - Compartilhe conteúdos interessantes (artigos, websites, tutoriais) no canal ${links};
    - Utilize o ${vagas} para publicar ofertas de emprego;
    - As categorias são adicionadas consoante à sua movimentação na comunidade, então, caso não encontre um canal para a sua tecnologia, utilize o ${offTopics}.
    > Nós desejamos que todos colaborem com a visão desta comunidade. Caso vejas que alguém esteja apresentando alguma conduta que não encoraja o crescimento da comunidade, por favor, use ${MODERADORES_ID} para que possamos ajudar.

    **Happy Hacking**
  `)
}
