import useWorker from "./useWorker";
// import FiboWorker from "./fibo.worker";

import "./styles.css";

const myFunc = (e) => {
  setTimeout(() => {
    const nbr = e.data;
    var n1 = 0;
    var n2 = 1;
    var somme = 0;

    for (let i = 2; i <= nbr; i++) {
      somme = n1 + n2;

      n1 = n2;

      n2 = somme;
    }

    const result = nbr ? n2 : n1;

    return postMessage(result);
  }, 2000);
  // return result; // find return value name & set in postMessage using regex (commented out for now)!!!
};

const App = () => {
  const [postMessage, result, status] = useWorker(myFunc);

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
