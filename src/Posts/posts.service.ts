  import axios from "axios";
  import { IPost } from './posts.interface';
  
  async function getPosts(): Promise<{ data: IPost[] }> {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response; // Возвращаем результат
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error; // Бросаем ошибку, чтобы её можно было обработать в вызывающем коде
    }
  }
  
  export { getPosts };
  
