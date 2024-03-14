import Books from "./Books";
import PropTypes from 'prop-types';
const BookMarks = ({bookMarks, readingTime})=>{
    return(
        <>
            <div className="ml-8">
                <div>
                    {readingTime}
                    <h3>Reading Time {readingTime}</h3>
                </div>
                <h3 className="text-2xl font-bold">BooksMarks {bookMarks.length}</h3>
                {
                    bookMarks.map((book, idx)=> <Books key={idx} book={book}>

                    </Books>)
                }
            
            </div>
        </>

    )
}
BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;