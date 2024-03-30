import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SaleOne from "../assets/saleone.png"
import Saletwo from "../assets/saletwo.png"
import Salethree from "../assets/salethree.png"

const Sales = () => {
  return (
    <div className="py-10">
        <Container>
        <Flex className="justify-between">
            <div className="w-[48%]">
                <img src={SaleOne} alt="" />
            </div>
            <div className="w-[48%]">
                <div className="">
                    <img src={Saletwo} alt="" />
                </div>
                <div className="mt-8">
                    <img src={Salethree} alt="" />
                </div>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Sales