import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Message from "./Message";
import Button from "./Button";
import Input from "./Input";
import AddIcon from "@mui/icons-material/Add";

const ShowCard = () => {
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent className="cardContainer">
        <div className="row space-btn">
          <Message message="ToDo App" />
          <Message message="completed:0/0" />
        </div>
        <div className="row gap">
          <Button value={<AddIcon />} className="add-btn"/>
          <Input type="text" className="inp-txt" placeholder="add a todo..."/>
        </div>
        <Message message="Add your first todo :)" className="text-center"/>
      </CardContent>
    </Card>
  );
};

export default ShowCard;
