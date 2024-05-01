import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const userSession = createSlice({
  name: "userSession",
  initialState: null,
  reducers: {},
});

export default configureStore({
  reducer: {
    user: userSession.reducer,
  },
});
