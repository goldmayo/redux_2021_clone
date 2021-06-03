import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  const onChange = (e) => {
    setText(e.target.value);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
