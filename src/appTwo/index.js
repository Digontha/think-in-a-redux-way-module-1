// get elements

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const valueDisplay = document.getElementById("count");


// initial a sate
const initialState = {
  value: 0,
};

// create reducer

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReducer);

// render function
const render = ()=>{
    const sate = store.getState();
    console.log(sate);
    valueDisplay.innerText = sate.value;
}
render();
store.subscribe(render);

incrementButton.addEventListener("click", () => {
    store.dispatch({ type: "increment" });
});

decrementButton.addEventListener("click", () => {
    store.dispatch({ type: "decrement" });
});
