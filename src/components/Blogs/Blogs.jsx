import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ()=>{
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return(
        <div>
            <h3 className="text-2xl font-bold mt-5">Blogs Length {blogs.length}</h3>
            <div className="">
            {
                blogs.map(blog=> 
                <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    )
}
export default Blogs;