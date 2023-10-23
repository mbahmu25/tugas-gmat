import "./App.css";
import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MapContainer, TileLayer } from "react-leaflet";
import Map from "./Map";
var daftar = 10;

function App() {
  const pos = [51.2, 51];
  return (
    <div className="p-[20px]">
      <Judul />
      <div className="h-fit">
        <div className="grid grid-col-2 gap-[20px] grid-flow-col">
          <Map />
          <Grafik teks="4" cs="4" />
        </div>
      </div>
      <Kotak />
    </div>
  );
}
function Judul() {
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold">PENUGASAN GMAT</h1>
        <h1 className="text-xl"> Nicholas Genta Setiawan Gunawan</h1>
      </div>
    </>
  );
}
function Kotak() {
  return (
    <>
      <div className="grid grid-cols-3 gap-[20px] grid-flow-col mt-[25px] ">
        <Grafik teks="1" cs="4  " />
        <Grafik teks="3" cs="4" />
        <Grafik teks="2" cs="4" />
      </div>
    </>
  );
}
function Grafik({ teks, cs }) {
  const [datas, tambah] = useState([]);
  const [y, Yval] = useState([]);
  const [i, hit] = useState(0);
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
    <div className={"border border-black rounded-md h-fit "}>
      <Line
        data={{
          labels: y.slice(-10),
          datasets: [
            {
              label: teks,
              data: datas.slice(-10),
            },
          ],
          options: {
            bezierCurve: true,
          },
        }}
      />
    </div>
  );
}
export default App;
// pelajari grid di tailwinds
// peljari class components
