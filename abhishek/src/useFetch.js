import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const abortCont=new AbortController();
    const [data,setData]=useState(null);
    const [isPending, setIsPending]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url,{signal: abortCont.signal})

            .then(res=>{
                if(!res.ok){
                    throw Error('could not fetch data');
                }
                // console.log(res);
                return res.json();
            })
            .then(data=>{
                // console.log(data);
                setData(data);
                setIsPending(false);
            })
            .catch((e)=>{
                if(e.name==='AbortError'){
                    console.log('new err');
                }
                setIsPending(false);
                setError(e.message);
            })
        },100)
        // return ()=>abortCont.abort();
        // console.log('use effect');
        // console.log(name);
        // console.log(blogs);
    },[url]);
    return {data,isPending,error}
}
export default useFetch;