import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <div className="">
        <h2 className="font-dm font-bold text-[49px] text-[#262626] pb-[15px]">
          Login
        </h2>
        <span className="font-dm font-bold text-[16px] line-height:[36px] text-[#222]">
          <Link to="/">Home</Link> / login
        </span>
      </div>
      <div className="w-[644px] pt-[120px]">
        <p className="font-dm font-normal text-[16px] text-[#767676] leading-8 pb-[62px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </div>{" "}
      <hr />
      <div className="w-[80%] pt-[57px]">
        <h2 className="font-dm font-bold text-[39px] text-[#262626] pb-[42px]">
          Returning Customer
        </h2>
        <form className="pb-[70px]" action="">
          <div className="flex justify-between">
            <div className="w-[45%]">
              <label
                className="font-dm font-bold text-[16px] line-height:[23px] text-[#262626]"
                htmlFor=""
              >
                Email address
              </label>{" "}
              <br /> <br />
              <input
                className="w-[80%] py-2 px-2 font-dm font-normal text-[14px] placeholder:text-[#767676]"
                type="email"
                placeholder="company@domain.com"
              />{" "}
              <hr />
            </div>
            <div className="w-[45%]">
              <label
                className="font-dm font-bold text-[16px] line-height:[23px] text-[#262626]"
                htmlFor=""
              >
                Password
              </label>{" "}
              <br /> <br />
              <input
                className="w-[70%] py-2 px-2 font-dm font-normal text-[14px] placeholder:text-[#767676] outline-0"
                type="password"
                placeholder="Enter Your Password"
              />{" "}
              <hr />
            </div>
          </div>
          <div className="pt-[40px]">
            <a
              className="py-2 px-14 font-dm font-bold text-[14px] text-[#262626] border-[#2B2B2B] border-2 rounded-md hover:bg-[#262626] hover:text-[#ffff] duration-300"
              href="#"
            >
              Log in
            </a>
          </div>
        </form>
      </div>{" "}
      <hr />
    </Container>
  );
};

export default Login;
