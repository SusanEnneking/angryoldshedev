
import { useEffect, useState } from 'react';
import { BlogPost } from '../blog/blog.types';
const useBlogPosts = () => { 
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); 
    const [intro, setIntro] = useState<BlogPost>({} as BlogPost);
    useEffect(() => {
        const fetchData = async () => {
            const response  = await fetch("http://localhost:8080/blogs", {
                method: 'GET',
                headers: {'Content-Type': 'application/json'} 
            })
            const blogs = await response.json()
            const introBlogs = blogs.data.filter((item: BlogPost) => {return item.category === "Introduction"})
            setIntro(introBlogs[0]);
            const normalBlogs = blogs.data.filter((item: BlogPost) => {return item.category !== "Introduction"})
            setBlogPosts(normalBlogs);
        }
        fetchData();
    }, [])

    return {blogPosts, intro};
  }
  export default useBlogPosts;

