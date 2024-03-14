import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleBookMarks, handleReadingTime})=>{
    const {cover,title,author,author_img,reading_time,posted_date,hashtags} = blog
    return(
        <div className="">
            {/* <TimeAdd></TimeAdd> */}
            <div className="col-span-1 lg:col-span-2 mb-5 px-16 
             border-2 space-y-4 shadow-lg py-7">
                <img src={cover} alt="Images" />
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                        <img src={author_img} alt={title} 
                        className="w-[60x] h-[60px] rounded-full text-center"/>
                        <div className="ml-5">
                            <h3>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>{reading_time} read</span>
                            <button onClick={()=>handleBookMarks(blog)}><CiBookmark /></button>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <div>
                            <p>
                                {
                                    hashtags.map((hash, idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                                }
                            </p>
                 </div>
                 <button onClick={()=>handleReadingTime(reading_time)}>
                        Mark as Read
                 </button>

            </div>
           
        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func,
    handleReadingTime: PropTypes.func
    // handleReadingTime: PropTypes.func
    
}
export default Blog;