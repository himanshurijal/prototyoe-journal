import "./AddNote.css";
import Button from "../Button/Button";
import { useState } from "react";

const AddNote = ({ onSave, onAdd, showAddNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeStamp, setTimeStamp] = useState(new Date().toString());

  const submitTask = e => {
    e.preventDefault();

    if (!title) {
      alert("Title cannot be empty!");
      return;
    }

    setTimeStamp(new Date().toString());

    onSave({ title, description, timeStamp });

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Button
        color={!showAddNote ? "green" : "red"}
        onClick={onAdd}
        text={!showAddNote ? "Add" : "Close"}
      />
      {showAddNote ? (
        <form className="add-form" onSubmit={submitTask}>
          <div className="form-control">
            <label>Title: </label>
            <input
              type="text"
              placeholder="Add title"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="form-control">
            <label>Description: </label>
            <textarea
              rows="10"
              cols="40"
              placeholder="Add description here!"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="form-control">
            <input type="submit" value="Save Note" className="btn btn-block" />
          </div>
        </form>
      ) : null}
    </>
  );
};

export default AddNote;
