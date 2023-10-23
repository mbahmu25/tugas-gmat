import "./App.css";
import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Map from "./Map";
var daftar = 10;

function App() {
  const pos = [51.2, 51];
  return (
    <div className="p-[20px] bg-red">
      <div className="App mb-[20px]">
        <h1 className="text-3xl font-bold">PENUGASAN GMAT</h1>
        <h1 className="text-xl"> Nicholas Genta Setiawan Gunawan</h1>
      </div>
      <div className="grid grid-cols-12 gap-[20px] grid-flow-col">
        <div className="grid bg-gray-100 rounded-md col-span-8 pr-5 pl-5 pt-5 pb-5  ">
          <Map />
        </div>
        <div className="bg-gray-100 rounded-md col-span-4 h-fit ">
          <Grafik3 teks="4" cs="5" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[20px] grid-flow-col mt-[25px] ">
        <Grafik teks="1" cs="4  " />
        <Grafik teks="3" cs="4" />
        <Grafik teks="2" cs="4" />
      </div>
    </div>
  );
}
function Grafik({ teks, cs }) {
  const [datas, tambah] = useState([]);
  const [y, Yval] = useState([]);
  var data = [4, 1, 5, 1, 5, 3, 6, 7, 12, 6, 1, 5, 15, 2, 3];
  var angka = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      var ran = Math.floor(Math.random() * 100);

      tambah((old) => [...old, ran]);
      Yval((oldY) => [...oldY, angka++]);
    }, 1000);

    return () => {
      // clear up
      clearInterval(interval);
    };
  }, []);
  console.log(data[0], y);
  return (
    <div className={"rounded-md h-fit bg-gray-100 pr-5 pl-5 pt-5 pb-3"}>
      <Line
        data={{
          labels: y.slice(-10),
          datasets: [
            {
              label: teks,
              data: datas.slice(-10),
              tension: 0.4,
            },
          ],
        }}
      />
    </div>
  );
}
function Grafik3({ teks, cs }) {
  const [datas, tambah] = useState([]);
  const [datas2, tambah2] = useState([]);
  const [datas3, tambah3] = useState([]);
  const [y, Yval] = useState([]);
  var data = [4, 1, 5, 1, 5, 3, 6, 7, 12, 6, 1, 5, 15, 2, 3];
  var angka = 0;
  var tensi = 0.2;
  useEffect(() => {
    const interval = setInterval(() => {
      var ran = Math.floor(Math.random() * 100);

      tambah((old) => [...old, Math.floor(Math.random() * 100)]);
      tambah2((old) => [...old, Math.floor(Math.random() * 100)]);
      tambah3((old) => [...old, Math.floor(Math.random() * 100)]);
      Yval((oldY) => [...oldY, angka++]);
    }, 1000);

    return () => {
      // clear up
      clearInterval(interval);
    };
  }, []);
  console.log(data[0], y);
  return (
    <div className={"mr-5 ml-5 mt-5 mb-2"}>
      <Line
        data={{
          labels: y.slice(-10),
          datasets: [
            {
              label: teks,
              data: datas.slice(-10),
              borderColor: "red",
              tension: tensi,
            },
            {
              label: teks,
              data: datas2.slice(-10),
              borderColor: "yellow",
              tension: tensi,
            },
            {
              label: teks,
              data: datas3.slice(-10),
              borderColor: "blue",
              tension: tensi,
            },
          ],
          tension: 0.2,
        }}
      />
    </div>
  );
}
export default App;
// pelajari grid di tailwinds
// peljari class components
