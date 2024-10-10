import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToLocalStorageArray,
  loadArrayFromLocalStorage,
  removeItemFromLocalStorageArray,
} from "../data";

const toDoListSLice = createSlice({
  name: "toDoList",
  initialState: {
    list: [],
  },
  reducers: {
    addToDo(state, action) {
      state.list.push({
        id: action.payload.id,
        title: action.payload.inputValue,
        description: action.payload.descValue,
        complete: action.payload.complete,
      });
      addItemToLocalStorageArray(state.list[state.list.length - 1]);
    },
  },
});

export const ListActions = toDoListSLice.actions;
export default toDoListSLice;
