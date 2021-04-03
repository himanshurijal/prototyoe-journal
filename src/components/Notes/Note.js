import "./Note.css";
import { FaTimes } from "react-icons/fa";

const Note = ({ note, onDelete }) => {
  return (
    <div className="note" style={{ border: "2px solid grey" }}>
      <h3>
        {note.title}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(note.id)}
        />
      </h3>
      <p>{note.description}</p>
      <p>{note.timeStamp}</p>
    </div>
  );
};

export default Note;
