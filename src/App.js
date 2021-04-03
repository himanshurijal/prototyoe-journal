import "./App.css";
import Header from "./components/Header/Header";
import AddNote from "./components/Notes/AddNote";
import Notes from "./components/Notes/Notes";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Route from "./components/Route/Route";

function App() {
  const [showAddNote, setshowAddNote] = useState(false);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Note",
      description: "Hello, this is my first note",
      timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)"
    },
    {
      id: 2,
      title: "Second Note",
      description: "Hello, this is my second note",
      timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)"
    },
    {
      id: 3,
      title: "Third Note",
      description: "Hello, this is my third note",
      timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)"
    }
  ]);

  // Add a note
  const saveNote = note => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newNote = { id, ...note };
    setNotes([...notes, newNote]);
  };

  // Edit a note
  const editNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Delete a note
  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <Route pathname="/">
          <Header title="Home" />
        </Route>

        <Route pathname="/brewday">
          <Header title="Brew Day" />
        </Route>

        <Route pathname="/notes">
          <Header title="Notes" />
          <AddNote
            onSave={saveNote}
            showAddNote={showAddNote}
            onAdd={() => setshowAddNote(!showAddNote)}
          />
          {notes.length > 0 ? (
            <Notes onDelete={deleteNote} notes={notes} />
          ) : (
            <p>No notes to show!</p>
          )}
        </Route>

        <Route pathname="/contact">
          <Header title="Contact" />
        </Route>
      </div>
    </div>
  );
}

export default App;
