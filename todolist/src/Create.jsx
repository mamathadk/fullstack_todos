import React, { useState } from "react";
import axios from "axios";
function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="home">
      <input
        className="create-form"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button className="create-form" onClick={handleAdd} type="button">
        Add
      </button>
    </div>
  );
}

export default Create;
