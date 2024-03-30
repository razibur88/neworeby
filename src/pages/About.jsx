import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import About1 from "../assets/about1.png"
import { Link } from 'react-router-dom'

const Aboutbrand = () => {
  return (
    <section className='py-[80px]'>
        <Container>
         <div className='pb-[30px]'>
         <span className='font-dm font-bold text-[16px] line-height:[36px] text-[#222]'><Link to='/'>Home</Link> / About </span>
         </div>
            <h2 className='font-dm font-bold text-[39px] text-[#262626] leading-10 mb-12'>About</h2>
            <Flex className='justify-between'>
                <div className='w-[48%]'>
                    <div className='relative'>
                        <img src={About1} className='w-[100%]' alt="About1" />
                        <div className='absolute left-[270px] bottom-14'>
                            <a className='font-dm font-bold text-[16px] text-[#ffff] py-4 px-[50px] bg-[#262626] border-2 border-[#262626]' href="#">Our Brands</a>
                        </div>
                    </div>
                </div>
                <div className='w-[48%]'>
                    <div className='relative'>
                        <img src={About1} className='w-[100%]' alt="About2" />
                        <div className='absolute left-[270px] bottom-14'>
                            <a className='font-dm font-bold text-[16px] text-[#ffff] py-4 px-[50px] bg-[#262626] border-2 border-[#262626]' href="#">Our Brands</a>
                        </div>
                    </div>
                </div>
            </Flex>
            <div className="pt-10">
            <h2 className='font-dm font-normal text-[38px] text-[#262626] line-height:52px mr-[140px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
            <div className='py-[60px]'>
            <Flex className='justify-between'>
                <div className="w-[30%]">
                    <div className='py-[60px]'>
                        <h2 className='font-dm font-bold text-[25px] text-[#262626] line-height:36px pb-[11px]'>Our Vision</h2>
                        <p className='font-dm font-normal text-[16px] text-[#767676] line-height:36px pb-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className='py-[60px]'>
                        <h2 className='font-dm font-bold text-[25px] text-[#262626] line-height:36px pb-[11px]'>Our Story</h2>
                        <p className='font-dm font-normal text-[16px] text-[#767676] line-height:36px pb-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className='py-[60px]'>
                        <h2 className='font-dm font-bold text-[25px] text-[#262626] line-height:36px pb-[11px]'>Our Brands</h2>
                        <p className='font-dm font-normal text-[16px] text-[#767676] line-height:36px pb-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </div>
            </Flex>
            </div>
            </div>
        </Container>
    </section>
  )
}

export default Aboutbrand