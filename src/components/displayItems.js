import React from "react";
import Link from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const DisplayItems = () => {
  const items = useSelector((state) => state.allItems.items);
  console.log(items);
  const print = items.map((e) => {
    const { item } = e;
    return (
      // <Link to={item.images.icon} >
      <div>{item.name}</div>
      // </Link>
    );
    // console.log(item.name);
  });
  return (
    <div>
      {/* {items?.map((e) => {
        <li>{i}</li>
      })} */}
      {print}
    </div>
  );
};

export default DisplayItems;
