import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import completedSlice from "./completed-slice";

export const store = configureStore({
  reducer: { task: tasksSlice, completed: completedSlice },
});
