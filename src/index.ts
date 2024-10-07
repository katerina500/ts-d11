import { filter } from 'lodash';
import { IPost } from './Posts/posts.interface';
import { getPosts } from './Posts/posts.service';
import capitalizeTitles from './LegacyModule';

(async function filterPosts() {
  const userId: number = 1;
  const posts: { data: IPost[] } | undefined = await getPosts();
 
  if (posts && posts.data) {
    console.log('posts?.data.length', posts.data.length);
    
    const filteredPosts: IPost[] = filter(posts.data, (p: IPost) => p.userId === userId);
    
    console.log('filteredPosts.length', filteredPosts.length);
    const test = capitalizeTitles(filteredPosts);
    console.log('test', test);
  }
})();