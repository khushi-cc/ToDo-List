import { configureStore } from "@reduxjs/toolkit";
import toDoListSLice from "./toDoListSlice";

const store=configureStore({
    reducer:{list:toDoListSLice.reducer}
})

export default store