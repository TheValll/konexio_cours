import axios from "axios";
import React, { useState } from "react";

const Articles = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");

  const handleEdit = () => {
    const editData = {
      author: data.author,
      content: editContent ? editContent : data.content,
      date: data.date,
      updateDate: Date.now(),
    };
    axios
      .put("http://localhost:3004/articles/" + data.id, editData)
      .then(() => setIsEditing(false));
  };

  const handleDelete = () => {
    axios.delete("http://localhost:3004/articles/" + data.id);
    window.location.reload();
  };

  const dateFormat = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };
  return (
    <div
      className="article"
      style={{
        background: isEditing ? "rgba(0, 205, 255, 0.2)" : "white",
      }}
    >
      <div className="card-header">
        <h3>{data.author}</h3>
        <em>Poste le {dateFormat(data.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          onChange={(e) => setEditContent(e.target.value)}
          autoFocus
          defaultValue={editContent ? editContent : data.content}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : data.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => {
            if (window.confirm("Voulez-vous supprimer cet article ?")) {
              handleDelete();
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Articles;
