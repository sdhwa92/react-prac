import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center gap-10 py-10">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-40" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-40" alt="React logo" />
        </a>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-blue-500">
          React with Vite Project Boilerplate
        </h1>
      </div>

      <div className="flex justify-center items-center py-10">
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
