import classes from "./ToDoForm.module.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { ListActions } from "../Store/toDoListSlice";
import { useNavigate } from "react-router-dom";
import { initializeArrayInLocalStorage } from "../data";

const ToDoForm = () => {
  useEffect(() => {
    initializeArrayInLocalStorage();
  }, []);

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();
  let inputValue;

  const handleInputChange = () => {
    inputValue = inputRef.current.value;
  };
  let descValue;
  const handleDescriptionChange = () => {
    descValue = textAreaRef.current.value;
  };
  const complete = false;
  const id = Math.random();

  const handleAdd = (event) => {
    event.preventDefault();

    dispatch(ListActions.addToDo({ inputValue, descValue, complete, id }));
    navigate("/");
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.Mainform}>
        <label htmlFor="title" className={classes.inputLabel}>
          Add title
        </label>
        <input
          ref={inputRef}
          type="text"
          id="title"
          name="title"
          onChange={handleInputChange}
        ></input>
        <label htmlFor="description">Add Description</label>
        <textarea
          ref={textAreaRef}
          name="description"
          rows="10"
          cols="30"
          onChange={handleDescriptionChange}
        ></textarea>
        <button
          className={classes.formButton}
          onClick={handleAdd}
          type="Submit"
        >
          Added
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
