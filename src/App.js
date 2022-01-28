import './App.css';
import { NOTESNIPPETCollection, NavBar, MarketingFooter } from './ui-components'
// import MinimalTextEditor from './components/MinimalNote';
import { API } from 'aws-amplify';

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useState, useEffect } from 'react';

import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const saveFunction = () => {
  console.log("timer func");
}

const initialFormState = { name: '', description: '' }

function App() {

  // --------------------------Source: https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-four/
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
  }
  //----------------------------------------------------------------------


  const [value, setValue] = useState(""); // keep track of edits in quill.js
  console.log(value);

  useEffect(() => {
    clearTimeout();
    setTimeout(saveFunction, 20000); // use this timeout to group edits into one larger save
  })


  return (
    <div className="App">
      <NavBar width={"100vw"} />
      {/* <CardECollection isPaginated itemsPerPage={3} /> */}
      {/* <MinimalTextEditor /> */}
      <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." />;
      {/* Example direct insertion of amplify react UI components: */}
      <NOTESNIPPETCollection isPaginated itemsPerPage={3} />
      {/* Form from https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-four/ */}
      <input
        onChange={e => setFormData({ ...formData, 'title': e.target.value })}
        placeholder="Note title"
        value={formData.title}
      />
      <input
        onChange={e => setFormData({ ...formData, 'summary': e.target.value })}
        placeholder="Note summmary"
        value={formData.summary}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {
          notes.map(note => (
            <div key={note.id || note.title}>
              <h2>{note.title}</h2>
              <p>{note.summary}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      {/* end form -------------------------------------------------------------------------------- */}
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
