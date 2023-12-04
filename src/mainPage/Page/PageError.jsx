import React from "react";
import Btn from "../Component/Btn";
import { useNavigate } from "react-router-dom";

function PageError() {
  const navigate = useNavigate();

  return (
    <div className=" gap-5 text-center p-5 font-medium text-2xl flex justify-center flex-col items-center">
      Im sory Please Enter Name Again 😢😢😢😢😢😢😢😢
      <Btn onClick={() => navigate("/")} type="main1">
        Back
      </Btn>
    </div>
  );
}

export default PageError;
