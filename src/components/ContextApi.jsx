import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios';
let Apidata = createContext()

const ContextApi = ({children}) => {

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
    <>
    <Apidata.Provider value={info}>{children}</Apidata.Provider>
    </>
  )
}

export {ContextApi,Apidata}
