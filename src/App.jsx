import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import BookMarks from './components/Blogs/BookMarks';
function App() {
  

  return (
    <>
    <Header></Header> 
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <Blogs className=""></Blogs>
      <BookMarks className=""></BookMarks>
      </div>
    </>
  )
}

export default App
