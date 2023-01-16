import { useState, useEffect } from "react";
import BlogList from './BlogList'
import useFetch from "./useFetch";
const Home = () => {
    // let name='amn';
    const [name,setName]=useState('Aman')
    const [num,setNum]=useState(5);
    const [blog,setBlog]=useState();
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
   
    // const DeleteBlog=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlog(newBlogs);
    //     // blogs=newBlogs;
    // }
    
    const clickAction=(e)=>{
        console.log("Hello abhi",e);
        setName('Daman');
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
            <div style={{color:"red",fontSize:'20px',border:'2px solid black',padding:'10px',marginTop:'10px'}}>
            <p style={{fontSize:'20px',padding:'5px',marginLeft:'20px'}}>{name+" has "+num+' chocolates '}</p>
            </div>
            {error && <div>{error}</div> }
            {isPending && <div>loading</div> }

            {blogs && <BlogList blogs={blogs} title1='All blogs' />}
            
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='At1')} title1='all blogs' DeleteBlog={DeleteBlog}/> */}
        </div>
    );
}
 
export default Home;