import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const Blogdetail = () => {
    const {id} = useParams()
    const {data  , isPending , error} = useFetch("http://localhost:8000/blogs/" + id)
     const navigate = useNavigate();
  const handelDelet = () => {
     fetch("http://localhost:8000/blogs/" + id ,{
      method:'DELETE'
     }).then(() => {
         navigate('/')
     })
  } 
  return (
    <div className='blog-details'>
     {error && <div>{ error} </div>}
     {isPending && <div> Loding...</div>}
      {data && (
        <article>
            <h2>{data.title}</h2>
            <p>writen by {data.author}</p>
            <div>{data.body}</div>
            <button onClick={handelDelet}>Delete</button>
        </article>
      )}
    </div>
  )

}

export default Blogdetail
