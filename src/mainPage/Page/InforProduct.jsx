import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Btn from "../Component/Btn";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/Slice";

function InforProduct() {
  const [stt, setStt] = useState(1);
  const [loadData, setLoadData] = useState("");
  const navigate = useNavigate();

  const params = useParams();

  const dispatch = useDispatch();
  console.log(loadData);
  useEffect(() => {
    async function GetData() {
      const data = await fetch(`https://lap-k4e9.onrender.com/${params.name}`);
      const accesdata = await data.json();
      accesdata.forEach((data) => {
        if (data.id === Number(params.id)) {
          setLoadData((e) => (e = data));
        }
      });
    }
    GetData();
  }, [params]);

  function HandleSmooth(index) {
    setStt((e) => index);
  }
  return (
    <div className="flex justify-center mt-5">
      {/*  */}
      {loadData && (
        <div className="flex items-center gap-9">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden w-96">
              <div
                style={{ transform: `translateX(${stt}%)` }}
                className="flex transition-all duration-500"
              >
                <img className="w-96" src={loadData.img} alt="" />
                <img className="w-96" src={loadData.img1} alt="" />
                <img className="w-96" src={loadData.img2} alt="" />
                <img className="w-96" src={loadData.img3} alt="" />
                <img className="w-96" src={loadData.img4} alt="" />
              </div>
            </div>

            <div className="flex w-96 gap-2">
              <img
                onClick={() => HandleSmooth(0)}
                className="block max-w-full min-w-0 cursor-pointer"
                src={loadData.img}
                alt=""
              />
              <img
                onClick={() => HandleSmooth(-100)}
                className="block max-w-full min-w-0 cursor-pointer"
                src={loadData.img1}
                alt=""
              />
              <img
                onClick={() => HandleSmooth(-200)}
                className="block max-w-full min-w-0 cursor-pointer"
                src={loadData.img2}
                alt=""
              />
              <img
                onClick={() => HandleSmooth(-300)}
                className="block max-w-full min-w-0 cursor-pointer"
                src={loadData.img3}
                alt=""
              />
              <img
                onClick={() => HandleSmooth(-400)}
                className="block max-w-full min-w-0 cursor-pointer"
                src={loadData.img4}
                alt=""
              />
            </div>
          </div>
          {/* cpu, ds, gpu, os, rs, str */}
          <div className="flex flex-col mt-7">
            <h1 className="mb-5 text-3xl font-bold">{loadData.name}</h1>
            <ul className="flex flex-col gap-5 w-96">
              <li className="text-xl font-medium list-none">
                {loadData.info.cpu}
              </li>
              <li className="text-xl font-medium list-none">
                {loadData.info.gpu}
              </li>
              <li className="text-xl font-medium list-none">
                {loadData.info.ds}
              </li>
              <li className="text-xl font-medium list-none">
                {loadData.info.rs.substring(0, 70).concat("...")}
              </li>
              <li className="text-xl font-medium list-none">
                {loadData.info.str}
              </li>
              <li className="text-xl font-medium list-none">
                {loadData.info.os}
              </li>
              <li className="text-2xl  list-none text-red-500 font-bold">
                {loadData.lastprice} $
              </li>
            </ul>

            <div className="flex gap-7 mt-8">
              <Btn
                onClick={() =>
                  dispatch(addProduct({ ...loadData, quantity: 1 }))
                }
                type="main"
                
              >
                Add
              </Btn>
              <Btn onClick={() => navigate(-1)} type="sub">
                Back
              </Btn>
            </div>
          </div>
        </div>
      )}

      {/*  */}
    </div>
  );
}

export default InforProduct;

// function InforProduct() {
//   return (
//     <div>InforProduct</div>
//   )
// }

// export default InforProduct
