import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { IoIosStar,IoIosStarHalf } from "react-icons/io";
import { useContext } from 'react';
import { FaRegStar } from "react-icons/fa";
import { Apidata } from '../components/ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/singleSlice';

const ProductDetails = () => {
    let dispatch = useDispatch()
    let [data, setData] = useState([])
    let productId = useParams()

    let dataId = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        dataId()
    },[])

    let handleproduct = (item) =>{
        dispatch(addToCart({...item, qun:1}))
    }

    let clientRating = Array.from({length: 5},(elm, index)=>{
        let number = index + 0.5;
        return(
            data.rating >= index + 1 ? <IoIosStar/> : data.rating >= number ? <IoIosStarHalf /> : <FaRegStar /> 
        ) 
    })



  return (
    <>
       <Container>
        <Flex className="justify-between">
            {data?.images?.map((item)=>(
                <div className="w-[32%] h-[400px]">
                <img src={item} alt="" className='w-full h-full' />
                </div>
        ))}
       
        </Flex>


        

        <div className="pt-6">
            <h2 className='font-dm font-bold text-[40px]'>Product</h2>
           <div className="">
           <div className="flex">
            {clientRating}
                
            </div>
           
           </div>
           <h4 className='font-dm font-bold text-[20px] py-10'>${data.price}</h4>
           
           <div className="py-10">
            <ul>
                <li className='py-[16px] px-[50px] bg-[#262626] text-white font-dm font-bold text-[16px] inline-block mr-8'>Add to Wish List</li>
                <Link to="/cart">
                <li onClick={()=>handleproduct(data)} className='py-[16px] px-[50px] bg-[#262626] text-white font-dm font-bold text-[16px] inline-block'>Add to Cart</li>
                </Link>
            </ul>
           </div>
        </div>

       </Container>
    </>
  )
}

export default ProductDetails