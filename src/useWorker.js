import { useState } from "react";

import WorkerBuilder from "./worker-builder";

const fn = ({ func, resultName }) => {
  const entire = func.toString();
  const body = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));

  if (!resultName) return `() => {self.onmessage = (e) => {${body};}}`;

  return `() => {self.onmessage = (e) => {${body};postMessage(${resultName});}}`;
};

const useWorker = (func) => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("OK");

  const instance = new WorkerBuilder(fn({ func }));

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
