import {Link} from 'react-router-dom'; 
// const BlogList = (props) => {
    const BlogList = ({blogs,title1,DeleteBlog}) => {

    // const blogs=props.blogs;
    // const title1=props.title1;
    // const DeleteBlog=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlog(newBlogs);
    //     // blogs=newBlogs;
    // }
    return (  
        <div className="blog-list">
            <h2>{title1}</h2>
            
            {blogs.map((blog)=>(
            
            <div className="blog-prev" key={blog.id}>
                {/* <Link to={'/blogs/${blog.id}'}> */}
                
                {/* <Link to={'/blogs/1'}> */}
                <h2>{blog.title}  author is {blog.author}</h2>
                {/* </Link> */}
                
                {/* <button className="btn" onClick={()=>DeleteBlog(blog.id)}>Delete</button> */}
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;