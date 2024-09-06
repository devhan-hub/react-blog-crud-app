import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [isPending , setPending] = useState(true);
    const [error , setError] = useState(null)

    useEffect(() => {
        const controler =new  AbortController()
        
        fetch(url , {signal:controler.signal})
        .then((res) => {
           if(!res.ok)  {
              throw Error("some thing wrong")
           }
           return res.json();
        })
        .then((data) => {
            setPending(false);
            setData(data);
            setError(null)
            
        })
        .catch((err) => {
            if(err.name === 'AbortError') {
                console.log("fech aborted")
            }
            else{
            setError(err.message);
            setPending(false);
            setData(null)
        }
        });

        return () => {
            controler.abort();
        };


    } , [url])

    return {data , isPending , error}
}
export default  useFetch;