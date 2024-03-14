import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import BookMarks from './components/Blogs/BookMarks';
function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookMarks = blogs=>{
    const newBookMarks = [...bookMarks, blogs];
    setBookMarks(newBookMarks)
  }

  const handleReadingTime = time =>{
    const newTime = readingTime + time
      setReadingTime(newTime)
  }

  return (
    <>
    <Header></Header> 
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <Blogs className="" 
      handleReadingTime={handleReadingTime}
      handleBookMarks={handleBookMarks}></Blogs>
      
      <BookMarks className="" 
      readingTime={readingTime}
      bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  )
}

export default App
