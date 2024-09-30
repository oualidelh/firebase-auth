import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/Auth";
import M from "materialize-css/dist/js/materialize.min.js";

const CreateGuide = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const guide = { title, content };

    try {
      // Add the new guide to the Firestore collection
      const docRef = await addDoc(collection(db, "guides"), guide);
      console.log("dovref", docRef);

      // Clear form inputs
      setTitle("");
      setContent("");
      setError(null);

      // Close the modal after successful creation
      const modalInstance = M.Modal.getInstance(
        document.getElementById("modal-create")
      );
      modalInstance.close();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="modal-create" className="modal">
      <div className="modal-content">
        <h4>Create Guide</h4>
        <br />
        <form id="create-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="title" className={title ? "active" : ""}>
              Guide Title
            </label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <label htmlFor="content" className={content ? "active" : ""}>
              Guide Content
            </label>
          </div>
          <button className="btn yellow darken-2 z-depth-0">Create</button>
          {error && (
            <div className="card-panel red lighten-2 white-text">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateGuide;
