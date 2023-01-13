
import { useState  } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new Websites' , body: 'body lorem ipsum...', author: 'mario', id:1},
        {title: 'Welcome Party'   , body: 'body lorem ipsum...', author: 'yoshi', id:2},
        {title: 'Web dev top tips', body: 'body lorem ipsum...', author: 'mario', id:3}
    ]);
    return (  
        <div className="home">
           <BlogList Blogs = {blogs} />
        </div>
    );
}
 
export default Home;