import { feed } from "feed-read"

const rssFeed = "https://blog.fimbacode.org/feed.xml"

const replyWithLink = (messageContent: string) => {

  if (messageContent.includes("!blog:last")) {

  const list = []

    try {

      feed(rssFeed, function(err, items) {

        //console.log(items);

        items.forEach(item => {

          const links = item;

          list.push(links.link)

          const link = list[0]

          return link

        })

      })

    } catch (error) {
      //console.log("Something went wrong when fetching the message: ", error)
      // Return as `reaction.message.author` may be undefined/null
      return
    }

  }
}

export default replyWithLink
