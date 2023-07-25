import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Message from "./Message";
import Button from "./Button";
import Input from "./Input";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { add, remove } from "../redux/list-slice";

const ShowCard = () => {
  const dispatch = useDispatch();
  const [totalCount, settotalCount] = useState(0);
  const [completedCount, setcompletedCount] = useState(0);
  const listsSelector = (state) => state.listItems;
  const lists = useSelector(listsSelector);
  console.log(lists);
  const inpTxt = useRef();
  //function to add a list
  const getList = () => {
    const listValue = inpTxt.current.value;
    const trimmedListVlaue = listValue.trim();
    if (trimmedListVlaue === "") {
      alert("list can't be empty");
    } else {
      dispatch(add(listValue));
      inpTxt.current.value = "";
      settotalCount(totalCount + 1);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getList();
    }
  };
  const checkDone = (event) => {
    const listname = event.target.nextElementSibling;
    if (event.target.checked) {
      listname.style.textDecoration = "line-through";
      setcompletedCount(completedCount + 1);
    } else {
      listname.style.textDecoration = "auto";
      setcompletedCount(completedCount - 1);
    }
  };
  const removeItem = (index, event) => {
    // Dispatch the remove action with the index of the item to remove
    dispatch(remove(index));
    settotalCount(totalCount - 1);
    const liElement = event.target.closest("li");
    if (liElement.childNodes[0].childNodes[1].style.textDecoration === 'line-through') {
      setcompletedCount(completedCount - 1);
    }
  };
  // const msg = "completed :" + completedCount + "/" + totalCount;
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent className="cardContainer">
        <div className="row space-btn">
          <Message message="ToDo App" />
          {/* <Message message={msg} /> */}
          <span>
            completed: {completedCount}/{totalCount}
          </span>
        </div>
        <div className="row gap">
          <Button value={<AddIcon />} className="add-btn" operation={getList} />
          <Input
            ref={inpTxt}
            type="text"
            className="inp-txt"
            placeholder="add a todo..."
            keyOperation={handleKeyPress}
          />
        </div>
        {lists?.lists.length > 0 ? (
          <ul className="listsContainer">
            {lists.lists.map((value, index) => (
              <>
                <li key={index} className="lists row gap">
                  <div className="left-col">
                    <Input type="checkbox" operation={checkDone} />
                    <span>{value}</span>
                  </div>
                  <Button
                    value={<DeleteForeverIcon />}
                    className="right-col"
                    operation={(event) => removeItem(index, event)}
                  />
                </li>
              </>
            ))}
          </ul>
        ) : (
          <Message message="Add your first todo :)" className="text-center" />
        )}
      </CardContent>
    </Card>
  );
};

export default ShowCard;
