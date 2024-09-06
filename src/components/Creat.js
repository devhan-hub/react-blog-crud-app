
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
const Creat = () => {


    const [title, setTitel] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending , setIspending] = useState(false)
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIspending(true);
        fetch('http://localhost:8000/blogs',
            {
                method: 'POST',
                headers: { "Content-Type": 'appliction/json' },
                body: JSON.stringify(blog)
            }
        ).then(()=> {
            setIspending(false)
            navigate('/')
        })
       
    }

    return (
        <div className='create'>
            <h2>Add New Blog</h2>
            <form onSubmit={handelSubmit}>
                <label htmlFor="">Blog-title:</label>
                <input type="text"
                    value={title}
                    onChange={(e) => {
                        setTitel(e.target.value)
                    }} />
                <label htmlFor="">Blog-body:</label>
                <textarea name="" id=""
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <label htmlFor="">Blog-author</label>
                <select
                    value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Addding Blog...</button>}

            </form>
        </div>
    )
}

export default Creat
