import PropTypes from 'prop-types';
const TimeAdd = ({handleReadingTime})=>{
    return(
        <>
            <h3>BookMark : {handleReadingTime.length}</h3>
        </>
    )
}
TimeAdd.propTypes = {
    handleReadingTime: PropTypes.func
}

export default TimeAdd;