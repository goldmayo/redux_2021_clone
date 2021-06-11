import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
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
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  //store.getState()와 같은 효과
  return { toDos: state }; // 가져온 state에 추가할 요소 설정 가능
}
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
