import classes from "./ToDoItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ListActions } from "../Store/toDoListSlice";
import {
  loadArrayFromLocalStorage,
  removeItemFromLocalStorageArray,
  saveArrayToLocalStorage,
} from "../data";
import { useEffect, useState } from "react";
const ToDoItem = ({
  title,
  id,
  keyid,
  setListData,
  // data
}) => {
  const [data, setData] = useState([]);
  const [toDoStatus, setToDoStatus] = useState(false);

  useEffect(() => {
    const currData = loadArrayFromLocalStorage();
    console.log(currData);
    setData(currData);
  }, []);
  const isUser = data?.find((item) => item.id === id);
  useEffect(() => {
    if (isUser) {
      setToDoStatus(isUser.complete);
    }
  }, [isUser]);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    removeItemFromLocalStorageArray(id);
    const updatedArray = loadArrayFromLocalStorage();
    setListData(updatedArray);
  };

  const handleChangeButton = (id) => {
    setToDoStatus((prevState) => !prevState);
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, complete: !toDoStatus } : item
    );
    setListData(updatedData);
    saveArrayToLocalStorage(updatedData);
  };

  return (
    <div className={classes.listItemContainer}>
      <div className={classes.contentContain}>
        {toDoStatus ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          </svg>
        )}
        <li className={classes.title} key={keyid}>
          {title}
        </li>
      </div>
      <div className={classes.buttons}>
        <button
          onClick={() => handleChangeButton(id)}
          className={
            toDoStatus ? classes.statusButtonComplete : classes.statusButton
          }
        >
          {toDoStatus ? "Complete" : "Incomplete"}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
          onClick={() => handleDelete(id)}
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </div>
    </div>
  );
};
export default ToDoItem;
