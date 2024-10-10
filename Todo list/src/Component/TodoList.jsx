import { NavLink } from "react-router-dom";
import classes from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import ToDoItem from "./TodoItem";
import { useEffect } from "react";
import { useState } from "react";
import { loadArrayFromLocalStorage } from "../data";

const TodoList = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const data = loadArrayFromLocalStorage();
    console.log(data);
    setListData(data);
  }, []);
  const isEmpty = listData.length === 0;
  const dispatch = useDispatch();

  console.log(listData);
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.childContainer}>
          <div className={classes.header}>Todos</div>
          <div className={classes.content}>
            <ul>
              {isEmpty ? (
                <p className={classes.emptyList}> No Todos Available.Please Add Some!</p>
              ) : (
                listData.map((item) => (
                  <ToDoItem
                    title={item.title}
                    id={item.id}
                    keyid={item.id}
                    status={item.complete}
                    setListData={setListData}
                  ></ToDoItem>
                ))
              )}
            </ul>
          </div>
          <NavLink className={classes.buttonlink} to="/addtodo">
            <button className={classes.toDoButton}>+ New Todo</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default TodoList;
