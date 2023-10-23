import "./App.css";
import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
var daftar = 10;

function App() {
  return (
    <div className="p-[20px]">
      <Judul />
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
      <div className="grid grid-cols-3 gap-[20px] mt-[25px]">
        <Gridbox T="1" />
        <Gridbox T="2" />
        <Gridbox T="3" />
      </div>
    </>
  );
}
function Gridbox({ T }) {
  return (
    <>
      <div className="border border-black rounded-md">
        <Grafik teks={T} />
      </div>
    </>
  );
}
function Grafik({ teks }) {
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
    <div>
      <Line
        data={{
          labels: y.slice(-10),
          datasets: [
            {
              label: teks,
              data: datas.slice(-10),
            },
          ],
        }}
      />
    </div>
  );
}
export default App;
// pelajari grid di tailwinds
// peljari class components
