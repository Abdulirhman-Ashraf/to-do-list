import { createSlice } from "@reduxjs/toolkit";
const localStorageItems =localStorage.getItem("doneToDoListItems");
const items  =localStorageItems!==null ?JSON.parse(localStorageItems):[]
const completedSlice = createSlice({
  initialState: items,
  name: "completedSlice",
  reducers: {
    getTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("doneToDoListItems",JSON.stringify(state))
    },
    remove:(state,action)=>{
      const cloneState = state.filter((task)=>task.id!==action.payload.id)
      localStorage.setItem("doneToDoListItems",JSON.stringify(cloneState))
      return cloneState;
      
    }
  },
}
);
export default completedSlice.reducer;
export const { getTask ,remove } = completedSlice.actions;
