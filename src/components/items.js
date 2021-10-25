import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/actions/itemsAction";
import DisplayItems from "./displayItems";

const Items = () => {
  const item = useSelector((state) => state.allItems.items);
  //console.log(item);
  const dispatch = useDispatch();
  const fetchItems = async () => {
    const response = await axios
      .get("https://fortnite-api.theapinetwork.com/store/get")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setItems(response.data.data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // item?.map((e) => {
  //   console.log(e.item.name);
  // });
  //console.log(item);
  return (
    <div>
      {/* {item?.map((e) => {
        <div>{e.item.name}</div>;
      })} */}

      <DisplayItems />
    </div>
  );
};

export default Items;
