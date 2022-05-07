import useWorker from "./useWorker";
import FiboWorker from "./fibo.worker";

import "./styles.css";

const App = () => {
  const [postMessage, result, status] = useWorker(FiboWorker);

  return (
    <div className="App">
      <header className="App-header">
        <p>Web worker in React</p>
        <p>Result: {result}</p>
        <p>Status: {status}</p>
        <button onClick={() => postMessage(55)}>Send Message</button>
      </header>
    </div>
  );
};

export default App;
