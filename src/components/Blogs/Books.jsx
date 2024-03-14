 import PropTypes from 'prop-types'
 const Books = ({book})=>{
    return(
        <div className="card shadow-lg">
            <h3 className="text-3xl font-semibold">{book.title}</h3>
        </div>
    )
}
Books.propTypes = {
    books: PropTypes.object
}
export default Books;