import useWorker from "./useWorker";
import FiboWorker from "./fibo.worker";

import "./styles.css";

const App = () => {
  const [postMessage, result, status] = useWorker(FiboWorker);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple Web Worker React Hook</h2>
        <p>Result: {result}</p>
        <p>Status: {status}</p>
        <button onClick={() => postMessage(55)}>Send Message</button>
      </header>
    </div>
  );
};

export default App;
