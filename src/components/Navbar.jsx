import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaBars, FaCartPlus, FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Apidata } from "./ContextApi";

const Navbar = () => {
  let data = useSelector((state) => state.single.cartItem);
  let [cartshow, setCartshow] = useState(false);
  let [cartacc, setCartacc] = useState(false);
  let [cartaddto, setCartaddto] = useState(false);
  let [search, setSearch] = useState([]);
  let categoryRef = useRef();
  let cartaccRef = useRef();
  let cartaddRef = useRef();
  let info = useContext(Apidata);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target) == true) {
        setCartshow(!cartshow);
      } else {
        setCartshow(false);
      }
      if (cartaccRef.current.contains(e.target) == true) {
        setCartacc(!cartacc);
      } else {
        setCartacc(false);
      }
      if (cartaddRef.current.contains(e.target) == true) {
        setCartaddto(!cartaddto);
      } else {
        setCartaddto(false);
      }
    });
  }, [cartshow, cartacc, cartaddto]);

  let handleSearch = (e) => {
    if (e.target.value == "") {
      setSearch([]);
    } else {
      let searchFilter = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearch(searchFilter);
    }
  };

  return (
    <nav className="py-4 bg-[#F5F5F3]">
      <Container>
        <Flex className="items-center">
          <div className="w-full lg:w-1/4 relative">
            <div className="flex items-center cursor-pointer" ref={categoryRef}>
              <FaBars />
              <p className="pl-3">Shop by Category</p>
            </div>
            {cartshow && (
              <div className="bg-[#262626] absolute top-[50px] left-0 w-full z-50">
                <ul>
                  <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                    Accesories
                  </li>
                  <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                    Furniture
                  </li>
                  <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                    Electronics
                  </li>
                  <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                    Clothes
                  </li>
                  <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                    Bags
                  </li>
                  <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <input
                type="search"
                placeholder="search..."
                onChange={handleSearch}
                className="w-full border-2 border-[#222] outline-0 py-3 px-2"
              />
              <div className="absolute top-[50%] right-[15px] translate-y-[-50%] ">
                <IoSearchSharp className="text-[20px]" />
              </div>
              {search.length > 0 && (
                <div className="w-[400px] h-[300px] overflow-y-scroll absolute top-[50px] left-0 z-50">
                  {search.map((seritem) => (
                    <div className="">
                      <div className="bg-[#F5F5F3] py-3 flex justify-between items-center px-3">
                        <div className="">
                          <img
                            className="h-[100px] w-[100px]"
                            src={seritem.thumbnail}
                            alt="cart"
                          />
                        </div>
                        <div className="">
                          <h3 className="font-dm font-normal text-[16px]">
                            {seritem.title}
                          </h3>
                          <h5 className="font-dm font-normal text-[16px]">
                            ${seritem.price}
                          </h5>
                        </div>
                        <div className="">
                          <RxCross2 />
                        </div>
                      </div>
                      <div className="bg-white">
                        <h2 className="pt-4 font-dm font-normal text-[16px] pl-4">
                          Subtotal: $44.00
                        </h2>
                        <div className="py-2 pl-2">
                          <a
                            className="w-[140px] h-[50px] border-2 border-[#262626] inline-block leading-[50px] text-center font-dm font-normal text-[16px] hover:bg-[#262626] hover:text-white mr-3"
                            href="#"
                          >
                            View Cart
                          </a>
                          <a
                            className="w-[140px] h-[50px] border-2 border-[#262626] inline-block leading-[50px] text-center font-dm font-normal text-[16px] hover:bg-[#262626] hover:text-white"
                            href="#"
                          >
                            View Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="flex lg:justify-end gap-x-4 relative">
              <div className="flex cursor-pointer" ref={cartaccRef}>
                <FaRegUser />
                <IoMdArrowDropdown />
              </div>
              {cartacc && (
                <div className="bg-[#262626] w-[200px] absolute top-[50px] right-0 z-50">
                  <ul>
                    <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                      <a href="#">My Account</a>
                    </li>
                    <li className="text-[rgba(255,255,255,0.71)] py-3 pl-3 hover:text-white hover:pl-6 duration-300 ease-in">
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </div>
              )}

              <div className="cursor-pointer" ref={cartaddRef}>
                <FaCartPlus />
              </div>
              {cartaddto && (
                <div className="absolute top-[50px] right-0 z-50">
                  {data.map((item) => (
                    <div className="w-[300px]">
                      <div className="bg-[#F5F5F3] py-3 flex justify-between items-center px-3">
                        <div className="">
                          <img
                            className="h-[100px] w-[100px]"
                            src={item.thumbnail}
                            alt="cart"
                          />
                        </div>
                        <div className="">
                          <h3 className="font-dm font-normal text-[16px]">
                            {item.title}
                          </h3>
                          <h5 className="font-dm font-normal text-[16px]">
                            ${item.price}
                          </h5>
                        </div>
                        <div className="">
                          <RxCross2 />
                        </div>
                      </div>
                      <div className="bg-white">
                        <h2 className="pt-4 font-dm font-normal text-[16px] pl-4">
                          Subtotal: $44.00
                        </h2>
                        <div className="py-2 pl-2">
                          <a
                            className="w-[140px] h-[50px] border-2 border-[#262626] inline-block leading-[50px] text-center font-dm font-normal text-[16px] hover:bg-[#262626] hover:text-white mr-3"
                            href="#"
                          >
                            View Cart
                          </a>
                          <a
                            className="w-[140px] h-[50px] border-2 border-[#262626] inline-block leading-[50px] text-center font-dm font-normal text-[16px] hover:bg-[#262626] hover:text-white"
                            href="#"
                          >
                            View Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
