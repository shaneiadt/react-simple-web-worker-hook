import { useState } from "react";

import WorkerBuilder from "./worker-builder";

const useWorker = (worker) => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("OK");

  const instance = new WorkerBuilder(worker);

  instance.onmessage = ({ data }) => {
    setStatus("OK");
    if (data) {
      setResult(data);
    }
  };

  instance.onerror = (e) => {
    console.error(e);
    setStatus("ERROR");
  };

  const postMessage = (arg) => {
    setStatus("SENT");
    instance.postMessage(arg);
  };

  return [postMessage, result, status];
};

export default useWorker;
