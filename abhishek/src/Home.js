import { useState, useEffect } from "react";
import BlogList from './BlogList'
import useFetch from "./useFetch";
const Home = () => {
    // let name='amn';
    const [name,setName]=useState('aman')
    const [num,setNum]=useState(5);
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
   
    // const DeleteBlog=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlog(newBlogs);
    //     // blogs=newBlogs;
    // }

    const clickAction=(e)=>{
        console.log("Hello abhi",e);
        setName('daman');
        setNum(10);
    }
    const clickAction2=(name,e)=>{
        console.log("Hello"+name,e.target);
    }


    return (  
        <div className="home">
            {/* <h2>Home Page</h2> */}
            <button className="btn" style={{width:"200px",marginRight:'10px'}} onClick={clickAction}>Click to check for other person</button>
            <button className="btn" onClick={(e)=>clickAction2(' dmn',e)}>Click</button>
            <p>{name+" has "+num+' chocolates '}</p>

            {error && <div>{error}</div> }
            {isPending && <div>loading</div> }

            {blogs && <BlogList blogs={blogs} title1='all blogs' />}
            
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='At1')} title1='all blogs' DeleteBlog={DeleteBlog}/> */}
        </div>
    );
}
 
export default Home;