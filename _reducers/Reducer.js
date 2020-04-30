


const Reducer = (state, action) => {
  console.log('Reducer state !',state)
  console.log('Reducer action !',action)
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Initialize":
      return initialState;

    default:
      return state;
  }
};

export default Reducer;
