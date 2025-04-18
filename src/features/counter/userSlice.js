import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: 0,
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",     // "user" is the piece of state.
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // CREATING TWO ACTIONS IN GLOBAL STORE OF REDUX THAT AFFECTS "user" section.
    login: (state, action) => {
      state.user = action.payload;  // 
    },
    logout: (state) => {
      state.user = null;            // Setting user back to NULL.
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

// Exporting these two Actions Globally. so that we can access it from anywhere
export const { login, logout } = userSlice.actions;

// These are selectors exported globally, which are used to access these actions
// out of numerous actions stored in Global Store of Redux.
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
