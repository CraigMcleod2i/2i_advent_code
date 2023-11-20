import "./App.css";
import { useEffect, useState } from "react";
import * as Papa from "papaparse";
import ornament from "./Card/CardAssets/ornament.jpg";
import pokemon from "./Card/CardAssets/poke.jpg";
import code from "./Card/CardAssets/code.jpg";
import amongus from "./Card/CardAssets/amongus.jpg";
import chewy from "./Card/CardAssets/chewy.jpg";
import diehard from "./Card/CardAssets/diehard.jpg";
import santa from "./Card/CardAssets/santa.jpeg";
import overcooked from "./Card/CardAssets/overcooked.jpg";
import halo from "./Card/CardAssets/halo.jpg";
import mario from "./Card/CardAssets/mario.jpg";
import lights from "./fairy-lights.jpg";
import snow from "./snow.jpg";
import Card from "./Card/card";
import Doctor from "./Card/CardAssets/doctor.jpg";
import csv from "./Book.csv";
const shuffle = "WzUsIDYsIDcsIDE1LCAxMSwgMTMsIDEsIDQsIDE0LCAxMiwgOF0=";
const days = [5, 6, 7, 15, 11, 13, 1, 4, 14, 12, 8];

const pic = [
  ornament,
  pokemon,
  code,
  amongus,
  chewy,
  diehard,
  santa,
  overcooked,
  halo,
  mario,
  Doctor,
];

function App() {
  const [days1, setDays] = useState();

  useEffect(() => {
    fetch(csv)
      .then((csv) => csv.text())
      .then((resText) => {
        const parsed = Papa.parse(resText);
        const newObj = [];
        for (let i = 1; i < parsed.data.length; i++) {
          newObj.push({ challenge: parsed.data[i][0], by: parsed.data[i][1] });
        }
        setDays(newObj);
      });
  }, []);

  if (!days1) {
    return "loading";
  }
  if (days1)
    return (
      <div className="App">
        <div
          id="advent-calendar"
          style={{
            backgroundImage: `url("${lights}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {days1
            .filter((el, i) => {
              return [...JSON.parse(atob(shuffle))].includes(i + 1);
            })
            .map((x, i) => {
              return (
                <Card
                  key={i}
                  days={days}
                  pic={pic}
                  i={i}
                  currentCard={btoa(JSON.stringify(x))}
                />
              );
            })}
        </div>
        <a
          id="submit-link"
          href="https://github.com/CraigMcleod2i/2i_advent_code"
          target="_blank"
          rel="noreferrer"
        >
          Submit by adding a branch to this repo
        </a>
      </div>
    );
}

export default App;
