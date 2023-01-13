
import { useState  } from "react";
const Home = () => {
    const [name, setName] = useState('hello');
    const handleClick = ()=>{
        name === "alish"?setName("hello"):setName("alish")
    }
    return (  
        <div className="home">
            <h2>Home Page</h2>
            <div> {name} </div>
            <button  onClick = {handleClick } >Click me</button>
        </div>
    );
}
 
export default Home;``