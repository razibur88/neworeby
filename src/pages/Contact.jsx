import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <section className='py-[110px]'>
    <Container>
        <h2 className='font-dm font-bold text-[49px] text-[#262626]'>Contacts</h2>
        <span className='font-dm font-bold text-[16px] line-height:[36px] text-[#767676]'><Link to="/">Home</Link> / Contact</span>
         <div className='py-[80px]'>
             <h2 className='font-dm font-bold text-[49px] text-[#262626] pb-[42px]'>Fill up a Form</h2>
             <form>
               <div className='w-[40%]'>
               <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Name</label> <br />
               <input className='w-full py-4 px-4 font-dm font-normal text-[14px] text-[#767676] ring-2 ring-[#F0F0F0] outline-gray-500  outline-offset-6' type="text" placeholder='Your name here'/>
               </div>
               <div className='w-[40%] pt-[23px]'>
               <label className='font-dm font-bold text-[16px] text-[#262626] pb-[10px]' htmlFor="">Email</label><br />
               <input className='w-full py-4 px-4 font-dm font-normal text-[14px] text-[#767676] ring-2 ring-[#F0F0F0] outline-gray-500  outline-offset-6' type="email" placeholder='Your email here'/>
               </div>
               <div className='w-[40%] pt-[23px]'>
               <label className='font-dm font-bold text-[16px] text-[#262626] pb-[10px]' htmlFor="">Message</label><br />
               <textarea className='w-full px-4 font-dm font-normal text-[14px] text-[#767676] ring-2 ring-[#F0F0F0] outline-gray-500  outline-offset-6' placeholder='Your message here' name="" id="" cols="81" rows="5"></textarea>
               </div>
               <div className='mt-[30px] w-[120px]'>
                <Link className='py-2 px-10 font-dm font-bold rounded-md ring-2 ring-[#f0f0f0] bg-[#ffff] hover:bg-[black] text-[14px] text-[black] hover:text-[#ffff] duration-500'>Post</Link>
               </div>
             </form>
         </div>
    </Container>
</section>
 <section className='pb-[120px] w-full'>
 <Container>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.372330416168!2d90.3671795917661!3d23.740739864707628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4a5de53a75%3A0xf27ef22645e193c6!2sJigatola%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1707942154646!5m2!1sen!2sbd" width="100%" height="500" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </Container>
</section>
    </>
  )
}

export default Contact