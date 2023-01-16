import {useState} from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        // console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog added');
            // history.go(-1);
            history.push('/')
        });
    }
    return (  
        <div className="create">
            <h2>Adding new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" 
                value={title} onChange={(e)=>setTitle(e.target.value)} /><br /><br />
                <label>Blog Body</label><br />
                <textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea><br /><br />
                <label>Blog Author</label><br />
                <select className='btn' style={{marginLeft:'10px',width:'100px',backgroundColor:'white'}}>
                <option value="mario" >mario</option>
                <option value="mario" >yoshi</option>
                </select><br /><br /><br />
                <button className='btn' style={{marginLeft:'100px',width:'200px'}}>Add Blog</button>
                <p>{title}</p>
            </form>
        </div>
    );
}
 
export default Create;
