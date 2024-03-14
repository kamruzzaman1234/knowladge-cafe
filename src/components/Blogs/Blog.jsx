import PropTypes from 'prop-types';
const Blog = ({blog})=>{
    const {cover,title,author,author_img,reading_time,posted_date,hashtags} = blog
    return(
        <div className="">
            <div className="col-span-1 lg:col-span-2 border-2 space-y-4 border-green-300">
                <img src={cover} alt="Images" />
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                        <img src={author_img} alt={title} className="w-[60x] h-[60px] rounded-full"/>
                        <div className="ml-5">
                            <h3>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                        </div>
                        <div>
                            <span>{reading_time} read</span>
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

            </div>
           
        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;