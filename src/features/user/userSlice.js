import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuserLoginDetails: (state, action) => {
      const { name, email, photo } = state;
      state.name = name;
      state.email = email;
      state.photo = photo;
    },
  },
});
