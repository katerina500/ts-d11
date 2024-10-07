"use strict";
function capitalizeTitles(IPost) {
    return IPost.map(test => {
        const filteredPosts = test.title.toUpperCase();
        return filteredPosts;
    });
}
module.exports = capitalizeTitles();
