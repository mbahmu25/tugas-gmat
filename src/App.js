import "./App.css";
import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Map from "./Map";
import { io } from "socket.io-client";

var range = 20
function App() {
  const socket = io("https://gmat.haikalhilmi.my.id/");
  const [wkt, setwkt] = useState([]);
  const [omg, setomg] = useState([]);
  const [phi, setphi] = useState([]);
  const [kap, setkap] = useState([]);
  const [lat, setlat] = useState(0);
  const [lon, setlon] = useState(0);
  const [volt, setvolt] = useState([]);
  const [pres, setpres] = useState([]);
  const [alt, setalt] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => setwkt((old) => [...old, msg.split(",")[1]]));
    socket.on("message", (msg) => setomg((old) => [...old, msg.split(",")[2]]));
    socket.on("message", (msg) => setphi((old) => [...old, msg.split(",")[3]]));
    socket.on("message", (msg) => setkap((old) => [...old, msg.split(",")[4]]));
    socket.on("message", (msg) => setlat(msg.split(",")[5]));
    socket.on("message", (msg) => setlon(msg.split(",")[6]));
    socket.on("message", (msg) =>
      setvolt((old) => [...old, msg.split(",")[7]])
    );
    socket.on("message", (msg) =>
      setpres((old) => [...old, msg.split(",")[8]])
    );
    socket.on("message", (msg) =>
      setalt((old) => [...old, msg.split(",")[9].split(";")[0]])
    );
  }, []);
  if (wkt.length >0) {
    var fixed_lat = lat;
    var fixed_lon = lon;
    return (
      <div className="p-[20px] bg-red">
        <div className="App mb-[20px]">
          <h1 className="text-3xl font-bold">PENUGASAN GMAT</h1>
          <h1 className="text-xl">Nicholas Genta Setiawan Gunawan</h1>
          <h1 className="text-xl">22/504443/TK/55176</h1>
        </div>
        <div className="grid grid-cols-12 gap-[20px] grid-flow-col">
          <div className="grid bg-gray-100 rounded-md col-span-8 pr-5 pl-5 pt-5 pb-5  ">
            <Map lat={lat} lon={lon} pos={[fixed_lat, fixed_lon]} />
          </div>
          <div className="bg-gray-100 rounded-md col-span-4 h-fit ">
            <Grafik3 data1={omg} data2={phi} data3={kap} x={wkt} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px] grid-flow-col mt-[25px] ">
          <Grafik teks="Voltage" dataGraph={volt} x={wkt} />
          <Grafik teks="Pressure" dataGraph={pres} x={wkt} />
          <Grafik teks="Altitude" dataGraph={alt} x={wkt} />
        </div>
      </div>
    );
  }
}
function Grafik({ teks, dataGraph, x }) {
  return (
    <div className={"rounded-md h-fit bg-gray-100 pr-5 pl-5 pt-5 pb-3"}>
      <Line
        data={{
          labels: x.slice(-range),
          datasets: [
            {
              label: teks,
              data: dataGraph.slice(-range),
              tension: 0.4,
            },
          ]
        }}
      />
    </div>
  );
}
function Grafik3({ x, data1, data2, data3 }) {
  return (
    <div className={"mr-5 ml-5 mt-5 mb-2"}>
      <Line
        data={{
          labels: x.slice(-range),
          datasets: [
            {
              label: "yaw",
              data: data1.slice(-range),
              borderColor: "red",
              tension: 0.4,
            },
            {
              label: "pitch",
              data: data2.slice(-range),
              borderColor: "yellow",
              tension: 0.4,
            },
            {
              label: "roll",
              data: data3.slice(-range),
              borderColor: "blue",
              tension: 0.4,
            },
          ]
        }}
      />
    </div>
  );
}
export default App;
