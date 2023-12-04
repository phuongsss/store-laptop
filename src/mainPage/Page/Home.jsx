import { useDispatch, useSelector } from "react-redux";
import Button from "../Component/Button";
import { useEffect, useState } from "react";
import { addName, fetchData } from "../Redux/Slice";
import { useNavigate } from "react-router-dom";

function Home() {
  const [cur, setCur] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function NextName() {
    dispatch(addName(cur));
    navigate("/product");
  }

  return (
    <div className="flex justify-center flex-col items-center mt-5 gap-5">
      <input
        className="border-4 border-yellow-500 rounded-full p-3 text-2xl outline-offset-2 outline-yellow-300"
        type="text"
        value={cur}
        onChange={(e) => setCur(e.target.value)}
        placeholder="Please Enter Name"
      />
      {cur && <Button onClick={NextName}>Next</Button>}
    </div>
  );
}

export default Home;
