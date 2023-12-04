import { useEffect, useRef, useState } from "react";
import Items from "../Component/Items";
import { useDispatch, useSelector } from "react-redux";
import { changebrand, fetchData } from "../Redux/Slice";

import ProductItem from "../Component/ProductItem";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((e) => e.statemain.loading);
  const data = useSelector((e) => e.statemain.product);
  const namepr = useSelector((e) => e.statemain.brand);

  useEffect(
    function () {
      dispatch(fetchData(namepr));
    },
    [namepr, dispatch],
  );

    if(data === null){
      navigate("*")
    }

  return (
    <div className="mt-5">
      <div className="text-center">
        <select
          className="border-4 border-stone-300 text-2xl rounded-lg outline-none uppercase font-bold p-3 text-green-700"
          value={namepr}
          onChange={(e) => dispatch(changebrand(e.target.value))}
        >
          <option value="asus">Asus</option>
          <option value="gigabyte">Gigabyte</option>
          <option value="Msi">Msi</option>x<option value="Hp">Hp</option>
          <option value="Ios">Ios</option>
        </select>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center mt-8 gap-5">
          {data && data.map((e) => (
            <ProductItem data={e} key={e.id} brand={namepr} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
