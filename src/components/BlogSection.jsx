import React from 'react'
import Ai from '../assets/ai.png'
import Tech from '../assets/tech.png'
import '../css/blog.css'
import Ai2 from '../assets/ai2.png'

const BlogSection = () => {
  return (
    <>
       <div className="myskils" >
          <div className="about"data-aos="fade-down">
            <h1 className="me">LATEST NEWS</h1>
            <h2 className="ee">BLOG</h2>
          </div>
        </div> 
        

<div className='blog'>
  <div className='bloga'>
    <img src={Ai} alt="" />
    <span>
    <a href="https://www.artificialintelligence-news.com/">AI NEWS
    Hello! It looks like you simply typed "ai." Is there something specific News ?</a>
    </span>
  </div>
  <div className='bloga'>
   <span>
   <img src={Tech} alt="" />
    <a href="https://indianexpress.com/section/technology/">Information Technology (IT): Encompasses computer systems, software development ?</a>
   </span>
  </div>
  <div className='bloga'>
    <span>
    <img src={Ai2} alt="" />
    <a href="https://www.intelegain.com/blogs/">AI NEWS</a>
    </span>
  </div>
  
</div>
     
    
    </>
  )
}

export default BlogSection
