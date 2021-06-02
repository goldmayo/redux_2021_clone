import { createStore } from "redux";

const ADD_COUNT = "ADD_COUNT";
const MINUS_COUNT = "MINUS_COUNT";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  // console.log(state,action.type);
  switch (action.type) {
    case ADD_COUNT:
      return state + 1;
    case MINUS_COUNT:
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD_COUNT });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS_COUNT });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
