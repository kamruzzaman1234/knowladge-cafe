import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMarks, handleReadingTime})=>{
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
                <Blog 
                key={blog.id} 
                blog={blog}
                handleBookMarks={handleBookMarks}
                handleReadingTime={handleReadingTime}
                
                ></Blog>)
            }
            </div>
        </div>
    )
}
Blogs.propTypes = {
    handleBookMarks : PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;