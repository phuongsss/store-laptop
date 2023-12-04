import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const store = configureStore({
  reducer: {
    statemain: Slice,
  },
});

export default store