import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="w-full h-screen text-white flex justify-center items-center"
      >
        <div className="border flex flex-wrap p-5 text-4xl space-x-4">
          <button onClick={() => setColor("red")}>Red</button>
          <button onClick={() => setColor("green")}>Green</button>
          <button onClick={() => setColor("blue")}>Blue</button>
          <button onClick={() => setColor("olive")}>Olive</button>
          <button onClick={() => setColor("gray")}>Gray</button>
          <button onClick={() => setColor("yellow")}>Yellow</button>
          <button onClick={() => setColor("pink")}>Pink</button>
          <button onClick={() => setColor("purple")}>Purple</button>
          <button onClick={() => setColor("lavender")}>Lavender</button>
          <button onClick={() => setColor("white")}>White</button>
          <button onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </>
  );
}

export default App;
