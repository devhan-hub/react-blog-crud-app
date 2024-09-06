
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const {data  , isPending , error} = useFetch("http://localhost:8000/blogs")
  
    return (
        <div className="home">
            {error && <div>{ error} </div>}
            {isPending && <div> Loding...</div>}
            {data && <BlogList blogs={data} title="all blogs"/>
            }
        </div>
    )
}

export default Home
