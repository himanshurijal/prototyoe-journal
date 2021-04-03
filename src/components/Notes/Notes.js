import Note from "./Note";

const Notes = ({ notes, onDelete }) => {
  return (
    <>
      {notes.map(note => (
        <Note key={note.id} onDelete={onDelete} note={note} />
      ))}
    </>
  );
};

export default Notes;
