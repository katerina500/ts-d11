import { filter } from 'lodash';
import { IPost } from './Posts/posts.interface';
import { getPosts } from './Posts/posts.service';
import capitalizeTitles from './LegacyModule';
(async function filterPosts() {
 const userId: number = 1;
 const posts = await getPosts(); // каст типов
 console.log('posts?.data.length', posts?.data.length); // Выведем в консоли длину полученного массива - должна быть 100
 const filteredPosts: IPost[] = filter(posts?.data, (p: IPost) => { 
return p.userId === userId })
 // console.log('filteredPosts', filteredPosts)
 console.log('filteredPosts.length', filteredPosts.length) // выведем в консоли длину отфильтрованного массива, должна быть 10
 const test = capitalizeTitles(filteredPosts);
 console.log('test', test) // filteredPosts, где все заголовки заглавными буквами
})()
