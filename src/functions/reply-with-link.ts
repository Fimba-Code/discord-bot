import feed from "feed-read"

const rssFeed = "https://blog.fimbacode.org/feed.xml"

const replyWithLink = (cb: (arg: string) => void) => {
  feed(rssFeed, function (err, items) {
    if (err) return
    const [{ link }] = items
    cb(link)
  })
}

export default replyWithLink
