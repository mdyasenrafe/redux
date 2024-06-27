import React from "react";

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex w-full justify-center">
        <button className="px-3 py-3 bg-red-500 rounded-md text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className="text-3xl mx-3">0</h1>
        <button className="px-3 py-3 bg-green-500 rounded-md text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
