import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIFJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="w-3/5 h-3/6" style={{ backgroundColor: "gray" }}>
          <h1 className="text-center text-4xl m-5 text-white">
            Password Generator
          </h1>
          <div className="flex mx-12 my-14 justify-between">
            <input
              type="text"
              className="w-4/5 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-2xl"
              value={password}
              readOnly
              placeholder="password"
              ref={passwordRef}
            />
            <button
              className="bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
              onClick={copyPasswordToClipboard}
            >
              copy
            </button>
          </div>
          <div className="flex items-center space-x-4 justify-center text-2xl">
            <input
              type="range"
              className="w-36"
              min={6}
              max={18}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-black-600">Length : {length}</label>
          </div>
          <div className="mt-4 flex items-center space-x-4 justify-center text-2xl">
            <label htmlFor="charCheckBox" className="text-black-600">
              characters
            </label>
            <input
              type="checkbox"
              id="charCheckBox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="numCheckBox" className="text-black-600">
              numbers
            </label>
            <input
              type="checkbox"
              id="numCheckBox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
