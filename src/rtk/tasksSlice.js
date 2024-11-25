import { createSlice } from "@reduxjs/toolkit";
const localStorageItems = localStorage.getItem("toDOListItems");
const items =
localStorageItems !== null
    ? JSON.parse(localStorageItems)
    : [];
export const tasksSlice = createSlice({
  initialState: items,
  name: "tasksSlice",
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("toDOListItems", JSON.stringify(state));
    },

    removeTask: (state, action) => {
      const cloneState= state.filter((task) => task.id !== action.payload.id);
      localStorage.setItem("toDOListItems", JSON.stringify(cloneState));
      return cloneState;
    },
    clear:(state,action)=>{
      localStorage.removeItem("toDOListItems")
      return []
    }
  },
});
export const { addTask, removeTask,clear } = tasksSlice.actions;
export default tasksSlice.reducer;
