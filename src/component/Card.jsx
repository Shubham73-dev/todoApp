import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Message from "./Message";
import Button from "./Button";
import Input from "./Input";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { add } from "../redux/list-slice";

const ShowCard = () => {
  const dispatch = useDispatch();
  const listsSelector = (state) => state.listItems;
  const lists = useSelector(listsSelector);
  console.log(lists);
  const inpTxt = useRef();
  const getList = () => {
    const listValue = inpTxt.current.value;
    dispatch(add(listValue));
    inpTxt.current.value = "";
  };
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent className="cardContainer">
        <div className="row space-btn">
          <Message message="ToDo App" />
          <Message message="completed:0/0" />
        </div>
        <div className="row gap">
          <Button value={<AddIcon />} className="add-btn" operation={getList} />
          <Input
            ref={inpTxt}
            type="text"
            className="inp-txt"
            placeholder="add a todo..."
          />
        </div>
        {lists?.lists.length > 0 ? (
          <ul className="listsContainer">
            {lists.lists.map((value, index) => (
              <>
                <li key={index} className="lists row gap">
                  <div className="left-col">
                    <Input
                      type="checkbox"
                      className="inp-txt"
                      placeholder="add a todo..."
                    />
                    <span>{value}</span>
                  </div>
                  <div className="right-col">
                    {<DeleteForeverIcon />}
                  </div>
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
