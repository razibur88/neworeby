import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Im from "../assets/im1.png"

import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const Basic = () => {
  return (
    <div className='py-10'>

    <Container>
      <Flex className='lg:gap-x-2 xl:gap-x-4'> 
        <div className=" lg:w-[24%] xxs:w-full sm:w-[50%]">
          <div className=" py-3">
            <div className=" relative group">

            <img src={Im}  alt="im_1" />

            <div className=" absolute bottom-0 left-0 lg:w-full xxs:w-full  h-[0px] overflow-y-hidden opacity-0 bg-[#FFFFFF] group-hover:h-[200px] duration-300 ease-in group-hover:opacity-100 ">

              <div className="py-[60px] px-6 h-full">
            <div className=" flex items-center justify-end gap-x-3">
              <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'>Add to Wish List</h4>
              <i><FaHeart /></i>

            </div>
            <div className=" flex items-center justify-end  gap-x-3">
              <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'  >Compare</h4>
              <i><IoIosGitCompare /></i>

            </div>
            <div className=" flex items-center justify-end gap-x-3">
              <h4  className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'   >Add to Cart</h4>
              <i><FaShoppingCart /></i>

            </div>
            </div>

            </div>

            <a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 '> New</a>

            </div>

            <div className=" flex lg:justify-between justify-start gap-x-2 items-center pt-3">
              
              <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   >Basic Crew Neck Tee</h3>
              <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   >$44.00 </p>

            </div>
            <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'  >Black</p>





          </div>
        
       
        </div>
        <div className=" lg:w-[24%] xxs:w-full sm:w-[50%] ">

          <div className=" py-3">

            <div className=" relative group">

            <img src={Im} alt="im_2" />

            <div className=" absolute bottom-0 left-0 lg:w-full xxs:w-full  h-[0px] overflow-y-hidden opacity-0 bg-[#FFFFFF] group-hover:h-[200px] duration-300 ease-in group-hover:opacity-100 ">

              <div className="py-[60px] px-6 h-full">
            <div className=" flex items-center justify-end gap-x-3">
              <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'>Add to Wish List</h4>
              <i><FaHeart /></i>

            </div>
            <div className=" flex items-center justify-end gap-x-3">
              <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'  >Compare</h4>
              <i><IoIosGitCompare /></i>

            </div>
            <div className=" flex items-center justify-end gap-x-3">
              <h4  className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'   >Add to Cart</h4>
              <i><FaShoppingCart /></i>

            </div>
            </div>

            </div>

            <a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 '       > New</a>

            </div>

            <div className=" flex lg:justify-between justify-start gap-x-2 items-center pt-3">
              
              <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   >Basic Crew Neck Tee </h3>
              <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   >$44.00 </p>

            </div>

            <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'  >Black</p>




          </div>
        
       
        </div>
        <div className=" lg:w-[24%] xxs:w-full sm:w-[50%]">

<div className=" py-3">

<div className=" relative group">

<img src={Im} alt="im_3" />

<div className=" absolute bottom-0 left-0 lg:w-full xxs:w-full   h-[0px] overflow-y-hidden opacity-0 bg-[#FFFFFF] group-hover:h-[200px] duration-300 ease-in group-hover:opacity-100 ">

  <div className="py-[60px] px-6 h-full">
<div className=" flex items-center justify-end gap-x-3">
  <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'>Add to Wish List</h4>
  <i><FaHeart /></i>

</div>
<div className=" flex items-center justify-end gap-x-3">
  <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'  >Compare</h4>
  <i><IoIosGitCompare /></i>

</div>
<div className=" flex items-center justify-end gap-x-3">
  <h4  className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'   >Add to Cart</h4>
  <i><FaShoppingCart /></i>

</div>
</div>

</div>

<a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 '       > New</a>

</div>

<div className=" flex lg:justify-between justify-start gap-x-2 items-center pt-3">
  
  <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   >Basic Crew Neck Tee</h3>
  <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   >$44.00 </p>

</div>
<p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'  >Black</p>





</div>


        </div>
        <div className=" lg:w-[24%] xxs:w-full sm:w-[50%] ">

        <div className=" py-3">

        <div className=" relative group">

        <img src={Im} alt="im_4" />

        <div className=" absolute bottom-0 left-0 lg:w-full xxs:w-full  h-[0px] overflow-y-hidden opacity-0 bg-[#FFFFFF] group-hover:h-[200px] duration-300 ease-in group-hover:opacity-100 ">

        <div className="py-[60px] px-6 h-full">
        <div className=" flex items-center justify-end gap-x-3">
        <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'>Add to Wish List</h4>
        <i><FaHeart /></i>

        </div>
        <div className=" flex items-center justify-end gap-x-3">
        <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'  >Compare</h4>
        <i><IoIosGitCompare /></i>

        </div>
        <div className=" flex items-center justify-end gap-x-3">
        <h4  className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'   >Add to Cart</h4>
        <i><FaShoppingCart /></i>

        </div>
        </div>

        </div>

        <a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 '       > New</a>

        </div>

        <div className=" flex lg:justify-between justify-start gap-x-2 items-center pt-3">
        
        <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   >Basic Crew Neck Tee</h3>
        <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   >$44.00 </p>

        </div>
        <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'  >Black</p>





        </div>


        </div>





      </Flex>





    </Container>







  </div>
  )
}

export default Basic
