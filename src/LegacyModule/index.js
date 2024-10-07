function capitalizeTitles(posts) {
    return posts.map(post => post.title.toUpperCase());
  }
  
  module.exports = capitalizeTitles;