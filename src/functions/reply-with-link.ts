import { feed } from "feed-read"

const rssFeed = "https://blog.fimbacode.org/feed.xml"

let link = '';

const replyWithLink = (messageContent: string) => {

  if (messageContent.includes("!blog:last")) {

    feed(rssFeed, function(err, items) {

      if(err) return;

      [{link}] = items

      console.log(link)

      return link

    })

  }
}

export default replyWithLink
