import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

var daftar = 10;

function App() {
  return (
    <div>
      <div className="flex">
        <h1 className="bg-gray-300 text-3xl text-bold p-5 ">
          Nicholas Genta Setiawan Gunawan
          <br />
        </h1>
      </div>
      <br />
      <Tombol />
      {daftar}
      {/* {daftar.join(", ")} */}
    </div>
  );
}
export function Tombol() {
  function warn() {
    alert("Masuk");
  }
  const [i, hitung] = useState(0);

  return (
    <div className="border border-5 border-black rounded-[3px] w-fit mb-2">
      <button className="bg-red-200" onClick={() => hitung(i * 2 + 1)}>
        klik
      </button>
      <p>angka:{i}</p>
    </div>
  );
}
function Kotak() {
  return (
    <>
      <div className="grid grid-col">
        tes
      </div>
    </>
  );
}
export default App;
// pelajari grid di tailwinds
// peljari class components
