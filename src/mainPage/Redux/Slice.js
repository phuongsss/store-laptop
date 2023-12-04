import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { json, useNavigate } from "react-router-dom";

const nameStr = JSON.parse(localStorage.getItem("name"));
const nameBrand = JSON.parse(localStorage.getItem("brand"));
const nameCart = JSON.parse(localStorage.getItem("cart"));

export const fetchData = createAsyncThunk(
  "slice/fetchdata",
  async function (name, { rejectWithValue }) {
    try {
      const data = await fetch(`https://lap-k4e9.onrender.com/${name}`);
      if (!data.ok) return rejectWithValue(data.status);
      return await data.json();
    } catch (err) {
      console.log(1);
      return rejectWithValue(err.response.data);
    }
    // name = asus,msi,gigabyte,hp,ios
  },
);

const initialState = {
  name: nameStr || "",
  brand: nameBrand || "asus",
  product: [],
  cart: nameCart || null,
  loading: false,
};

const Slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addName(state, action) {
      state.name = action.payload;
      localStorage.setItem("name", JSON.stringify(action.payload));
    },
    changebrand(state, action) {
      state.brand = action.payload;
      localStorage.setItem("brand", JSON.stringify(action.payload));
    },

    addProduct(state, action) {
      const { id } = action.payload;

      if (state.cart === null) {
        state.cart = [];
        state.cart.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));

        return;
      }

      if (state.cart.some((e) => e.id === id)) {
        state.cart.forEach((e) => {
          if (e.id === id) {
            e.quantity++;
          }
        });
      } else {
        state.cart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    deleteProduct(state, action) {
      console.log(action.payload);
      state.cart.filter((e) => e.id !== action.payload);
      state.cart = state.cart.filter((e) => e.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incre(state, action) {
      const id = action.payload;
      state.cart.forEach((e) => {
        if (e.id === id) {
          e.quantity++;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    minus(state, action) {
      const id = action.payload;
      state.cart.forEach((e) => {
        if (e.id === id) {
          if (e.quantity < 2) return;
          e.quantity--;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clear(state, action) {
      state.cart = null;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.product = null;
      state.loading = false;
    });
  },
});

export const {
  addName,
  changebrand,
  addProduct,
  deleteProduct,
  incre,
  minus,
  clear,
} = Slice.actions;

export default Slice.reducer;
