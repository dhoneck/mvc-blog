module.exports = {
  // Return substring if over the defined character limit
  shortenText: (post) => {
    const charLimit = 300;
    if (post.length > charLimit) {
      return post.slice(0, charLimit) + ' ...';
    } else {
      return post;
    }
  }
};
