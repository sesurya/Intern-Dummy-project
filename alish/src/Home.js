
import { useState  } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new Websites' , body: 'body lorem ipsum...', author: 'mario', id:1},
        {title: 'Welcome Party'   , body: 'body lorem ipsum...', author: 'yoshi', id:2},
        {title: 'Web dev top tips', body: 'body lorem ipsum...', author: 'mario', id:3}
    ]);
    return (  
        <div className="home">
            {blogs.map((blog)=> (
                <div className="blog-preview" key = {blog.id}>
                    <h2> {blog.title} </h2>
                    <p> Written by {blog.author}. </p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;