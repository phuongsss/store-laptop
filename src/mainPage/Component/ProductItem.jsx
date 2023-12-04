import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Slice";

export default function ProductItem({ data, brand }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center p-7 border-2 border-stone-400 min-w-0 max-w-[350px] rounded-xl">
      <div className="max-w-[20rem] max-h-[117px]">
        <img className=" max-w-full max-h-full" src={data.img} alt="Img" />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h1 className="text-stone-600 font-bold text-1xl">
          {data.name.length > 35
            ? data.name.substring(0, 34).concat("...")
            : data.name}
        </h1>
        <h2 className="text-xl font-bold text-red-700">{data.lastprice}$</h2>
        <div className="flex gap-5 items-end">
          {/* <button className="text-lg font-medium px-8 py-1 bg-red-500 rounded-lg hover:bg-red-700 text-stone-100 transition-all duration-500">
            Add
          </button> */}
          <Btn
            onClick={() => dispatch(addProduct({ ...data, quantity: 1 }))}
            type="main1"
          >
            Add
          </Btn>
          <span className="text-lg font-medium py-2">or</span>
          <Btn type="sub1">
            <Link to={`/product/${brand}/${data.id}`}>View</Link>
          </Btn>

          {/* <button className="text-lg font-medium px-5 py-1 bg-blue-500 hover:bg-blue-700  rounded-lg text-stone-200 transition-all duration-500">
            <Link to={`/product/${data.id}`}>View</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}
