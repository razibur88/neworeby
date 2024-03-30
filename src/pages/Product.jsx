import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Flex from "../components/Flex";
import { Apidata } from "../components/ContextApi";
import Post from "../components/pagination/Post";
import PaginationNum from "../components/pagination/PaginationNum";

const Product = () => {
  let data = useContext(Apidata);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(6);
  let [filtercat, setFilterCat] = useState([]);
  let [collection, setCollection] = useState([]);
  let pageNumber = [];
  for (
    let i = 0;
    i < Math.ceil(filtercat.length > 0 ? filtercat : data.length / perPage);
    i++
  ) {
    pageNumber.push(i);
  }


  

  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;

  let allPage = data.slice(firstPage, lastPage);

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };

  let prve = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };
  useEffect(() => {
    setCollection([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let handleFilter = (item) => {
    let categoryFilte = data.filter((citem) => citem.category == item);
    setFilterCat(categoryFilte);
  };

  return (
    <div>
      <Container>
        <span className="font-dm font-normal text-[18px]">
          <Link to="/">Home</Link> / Products
        </span>
        <Flex>
          <div className="w-[20%]">
            <h2 className="font-dm font-bold text-[18px] pt-3">
              Shop by Category
            </h2>
            <ul>
              {collection.map((item) => (
                <li onClick={() => handleFilter(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-[80%]">
            <div className="flex justify-between flex-wrap">
              <Post filterProduct={filtercat} post={allPage} />
            </div>
            <PaginationNum
              pageNumber={pageNumber}
              filterProduct={filtercat}
              paginate={paginate}
              next={next}
              prve={prve}
              currentPage={currentPage}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Product;
