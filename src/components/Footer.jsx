import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='py-10 bg-[#F5F5F3]'   >

 <Container>
        <Flex  className="justify-around">

         <div className=" lg:w-[40%] w-full flex lg:justify-around  gap-y-2">


      <div className=" lg:w-[20%] w-1/2">
         <ul className=''>
                      <li className='font-dm  font-bold text-[16px] leading-[23px] text-bl  '   >MENU</li>

                      <div className=" mt-6">
           <li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  '   >Home</li>
             <li className='font-dm   font-normal text-[14px] leading-[23px] text-grr  '  >Shop</li>
             <li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  '  >About</li>
            <li className='font-dm   font-normal text-[14px] leading-[23px] text-grr  ' >Contact</li>
            <li className='font-dm   font-normal text-[14px] leading-[23px] text-grr  '  >Journal</li>

            </div>
          </ul>

          <div className="mt-[37px] flex justify-between items-center w-full">

<div className="flex gap-x-3  mt-4 ">

<i><TiSocialFacebook /></i>
<i><FaLinkedinIn /></i>
<i> <BsInstagram />   </i>



</div>






</div>

        



         </div>
           <div className=" lg:w-[20%] w-1/2 xxs:ml-6  ">

             <ul>
            <li  className='font-dm  font-bold text-[16px] leading-[23px] text-bl  '    >SHOP</li>
            <div className=" mt-6">
               <li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  '     >Category 1</li>
               <li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  '  >Category 2</li>
              <li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  '  >Category 3</li>
               <li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  ' >Category 4</li>
              <li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  '   >Category 5</li>
                
              </div>



            </ul>





          </div>
        







           </div>
      <div className="lg:w-[40%] w-full flex justify-around xxs:mt-7 lg:mt-0 ">

      <div className=" lg:w-[20%] w-[40%]   ">

<ul  className=''>
<li className='font-dm  font-bold text-[16px] leading-[23px] text-bl  '   >HELP</li>
<div className=" mt-6">
<li  className='font-dm  font-normal text-[14px] leading-[23px] text-grr  ' >Privacy Policy</li>
<li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  ' >Terms & Conditions</li>
<li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  ' >Special E-shop</li>
<li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  ' >Shipping</li>
<li className='font-dm  font-normal text-[14px] leading-[23px] text-grr  ' >Secure Payments</li>
</div>



</ul>



</div>

<div className="lg:w-[25%] w-[60%]      ">
 
 <p className='font-dm  font-bold text-[16px] leading-[27px] text-bl  '    >(052) 611-5711
company@domain.com</p>
<div className=" mt-4">
<p className='font-dm  font-normal text-[14px] leading-[23px] text-grr  '  >575 Crescent Ave. Quakertown, PA 18951</p>

</div>





</div>







      </div>
       
        

 
 <div className=" lg:w-[20%] w-full xxs:mt-[67px]  ml-9 lg:mt-0 mx-auto lg:mx-0 gap-y-2">
         
         <div className=" ml-[20px]">

        <img src={logo} alt="logo" />



        </div>
      







      




      
          



      




          </div>

          <div className=" w-[100%] mt-4 ">
          <p className='font-dm   font-normal text-[14px] leading-[23px] text-grr text-right  ' >       2020 Orebi Minimal eCommerce Figma Template by Adveits</p>


        </div>
        </Flex>
      </Container> 
    </div>
  )
}

export default Footer
