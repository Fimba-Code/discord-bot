const userReaction = async (reaction, user) => {
  //console.log(reaction.message.reactions)
  // When we receive a reaction we check if the reaction is partial or not
  if (reaction.partial) {
    // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
    try {
      await reaction.fetch()
    } catch (error) {
      //console.log("Something went wrong when fetching the message: ", error)
      // Return as `reaction.message.author` may be undefined/null
      return
    }
  }
  // Now the message has been cached and is fully available
  /*  console.log(
    `${reaction.message.author.username}'s message "${reaction.message.content}" gained a reaction!`
  ) */
  // The reaction is now also fully available and the properties will be reflected accurately:
  /* console.log(
    `${reaction.count} user(s) have given the same reaction to this message!`
  ) */
}

export default userReaction
