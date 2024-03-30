import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
const Checkout = () => {
  let [data, setData] = useState();
  let info = useSelector((state) => state.single.cartItem);
  const db = getDatabase();
  const { totalPrice, totalQuantity } = info.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.qun;
      acc.totalQuantity += item.qun;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        setData(item.val().username);
      });
    });
  }, []);
  return (
    <>
      <h2>{totalPrice}</h2>
      <h2>{totalQuantity}</h2>
      {data}
    </>
  );
};

export default Checkout;
