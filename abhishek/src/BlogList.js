// const BlogList = (props) => {
    const BlogList = ({blogs,title1,DeleteBlog}) => {

    // const blogs=props.blogs;
    // const title1=props.title1;
    
    return (  
        <div className="blog-list">
            <h2>{title1}</h2>
            {blogs.map((blog)=>(
            <div className="blog-prev" key={blog.id}>
                <h2>{blog.title}  author is {blog.author}</h2>
                <button className="btn" onClick={()=>DeleteBlog(blog.id)}>Delete</button>
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;