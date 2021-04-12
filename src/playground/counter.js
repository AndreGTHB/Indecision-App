let count = 0;
const minusOne = () => {
  count--;
  renderCounterApp();
};

const addOne = () => {
  count++;
  renderCounterApp();
};

const resetF = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const buttonTest = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetF}>Reset</button>
    </div>
  );
  ReactDOM.render(buttonTest, appRoot);
};

renderCounterApp();
