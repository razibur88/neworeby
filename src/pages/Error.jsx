import React from 'react'
import Container from '../components/Container'
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <Container>
      <h2 className='font-dm font-bold text-[200px] pt-3'> 404</h2>
      <p className='font-dm font-normal text-[18px] text-[#767676] w-[644px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
      <div className="w-[644px] relative py-16">
        <input type="text" className='w-full border-2 border-[#222] h-[70px] px-3 placeholder:text-[#767676]' placeholder='Type to Search' />
        <div className=" absolute top-[50%] right-5 translate-y-[-50%]">
            <FaSearch/>
        </div>
      </div>
      <div className="pb-14">
        <Link to="/">
        <span className='py-[16px] px-[50px] bg-[#262626] text-white font-dm font-bold text-[16px]'>Back to Home</span>
        </Link>
      </div>
    </Container>
  )
}

export default Error
