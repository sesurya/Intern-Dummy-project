import { useState, useEffect } from "react";
import BlogList from './BlogList'
const Home = () => {
    // let name='amn';
    const [name,setName]=useState('aman')
    const [num,setNum]=useState(5);
    const [blogs,setBlog]=useState([
        {title:'A1', body:'B1',author:'At1',id:1},
        {title:'A2', body:'B2',author:'At2',id:2},
        {title:'A3', body:'B3',author:'At1',id:3}
    ]);

    const DeleteBlog=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlog(newBlogs);
        // blogs=newBlogs;
    }

    const clickAction=(e)=>{
        console.log("Hello abhi",e);
        setName('daman');
        setNum(10);
    }
    const clickAction2=(name,e)=>{
        console.log("Hello"+name,e.target);
    }

    // const [name1,setName1]=
    useEffect(()=>{
        console.log('use effect');
        console.log(name);
        // console.log(blogs);
    },[name]);

    return (  
        <div className="home">
            {/* <h2>Home Page</h2> */}
            <button className="btn" style={{width:"200px",marginRight:'10px'}} onClick={clickAction}>Click to check for other person</button>
            <button className="btn" onClick={(e)=>clickAction2(' dmn',e)}>Click</button>
            <p>{name+" has "+num+' chocolates '}</p>

            <BlogList blogs={blogs} title1='all blogs' DeleteBlog={DeleteBlog}/>
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='At1')} title1='all blogs' DeleteBlog={DeleteBlog}/> */}
        </div>
    );
}
 
export default Home;