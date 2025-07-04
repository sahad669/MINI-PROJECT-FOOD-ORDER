
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const localData = JSON.parse(localStorage.getItem("products")) || [];

export const displayProducts = createAsyncThunk("products/fetch", async () => {
  const localData = JSON.parse(localStorage.getItem("products")) ||[]
  if (localData.length > 0) {
    return localData;
  } else {
    const res = await axios.get("./products.json");
    localStorage.setItem("products", JSON.stringify(res.data));
    return res.data;
  }
});

const initialState = {
  all: localData,
  filtered: localData,
  search: "",
  category: "All",
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      productSlice.caseReducers.filterProducts(state);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      productSlice.caseReducers.filterProducts(state);
    },
    filterProducts: (state) => {
      let result = [...state.all];
      if (state.search !== "") {
        result = result.filter((product) =>
          product.title?.toLowerCase().includes(state.search.toLowerCase())
        );
      }
      if (state.category !== "All") {
        result = result.filter((product) => product.category === state.category);
      }
      state.filtered = result;
    },
    addProduct: (state, action) => {
      state.all.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.all));
      productSlice.caseReducers.filterProducts(state);
    },
    deleteProduct: (state, action) => {
      state.all = state.all.filter((p) => p.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(state.all));
      productSlice.caseReducers.filterProducts(state);
    },
    editProduct: (state, action) => {
      const { id, editProduct } = action.payload;
      const index = state.all.findIndex((x) => x.id === id);
      if (index !== -1) {
        state.all[index] = { ...state.all[index], ...editProduct };
        localStorage.setItem("products", JSON.stringify(state.all));
        productSlice.caseReducers.filterProducts(state);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(displayProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(displayProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
        state.filtered = action.payload;
      })
      .addCase(displayProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSearch,
  setCategory,
  filterProducts,
  addProduct,
  deleteProduct,
  editProduct,
} = productSlice.actions;

export default productSlice.reducer;







































































































