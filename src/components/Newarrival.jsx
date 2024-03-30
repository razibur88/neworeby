import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Slider from "react-slick";
import { FaCartPlus,FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import axios from 'axios';
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";


function SampleNextArrow(props) {
    const {  style, onClick } = props;
    return (
      <div className='next'
        onClick={onClick}
      ><IoIosArrowBack className='inline-block'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {style, onClick } = props;
    return (
      <div className='prve'
        onClick={onClick}
      ><IoIosArrowForward className='inline-block'/></div>
    );
  }



const Newarrival = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    let [info, setInfo] = useState([])

    useEffect(()=>{
        let getdata = () =>{
            axios.get("https://dummyjson.com/products").then((respone)=>{
                setInfo(respone.data.products);
            })
        }
        getdata()
    },[])


  return (
    <div className="">
        <Container>
            <h2 className='font-dm font-bold text-[40px]'>New Arrivals</h2>
           
                <Slider {...settings}>
                
                    {info.map((item)=>(
                    <div className='!w-[95%]'>
                            <div className="py-3">
                            <div className="relative group">
                                <img src={item.thumbnail} className='h-[300px] w-full' alt="" />
                                <div className="absolute bottom-0 overflow-y-hidden left-0 w-[100%] duration-300 ease-in bg-[#FFFFFF] h-[0px] opacity-0 group-hover:h-[200px] group-hover:opacity-100">
                                    <div className=" flex items-center h-full justify-end">
                                        <ul className='px-6 text-end'>
                                            <li className=''>Add to Wish List <FaHeart className='inline-block' /> </li>
                                            <li className=''>Compare <IoGitCompare className='inline-block'/></li>
                                            <li className=''>Add to Cart <FaCartPlus className='inline-block'/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between pt-3">
                                <h3 className='font-dm font-bold text-[16px]'>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    
                    </div>
                    ))}
                   
                </Slider>
                   
      
        </Container>
    </div>
  )
}

export default Newarrival