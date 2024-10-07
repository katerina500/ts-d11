import axios from "axios";

async function getPosts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }
  
  
  getPosts();