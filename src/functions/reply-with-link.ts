import feed from "feed-read"


const rssFeed = "https://blog.fimbacode.org/feed.xml"

const replyWithLink = () => {

    let link = '';

    try {

    feedRSS(rssFeed, function(err, items) {

      if(err) return;
      [{link}] = items
      console.log(link)

    })

    return link

    } catch(error) {}

}

replyWithLink()
