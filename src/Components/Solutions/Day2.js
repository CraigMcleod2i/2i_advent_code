import "./Day2.css";
const Day2 = () => {
  return (
    <div className="advent-card">
      <div>
        <h1 className="text-3xl">Day 2</h1>
        <p>Pair of rollin' dice</p>
        <div className="flex">
          <CssCube show={Math.floor(Math.random() * 6 + 1)} />
          <CssCube show={Math.floor(Math.random() * 6 + 1)} />
        </div>
      </div>
    </div>
  );
};

const CssCube = ({ show }) => {
  return (
    <div className="scene mx-5">
      <div className={show ? "cube show-" + show : "cube"}>
        <div className="cube__face cube__face--1">*</div>
        <div className="cube__face cube__face--2">* *</div>
        <div className="cube__face cube__face--3">* * *</div>
        <div className="cube__face cube__face--4">
          * *<br />* *
        </div>
        <div className="cube__face cube__face--5">
          * *<br />*<br />* *
        </div>
        <div className="cube__face cube__face--6">
          ***
          <br />
          ***
        </div>
      </div>
    </div>
  );
};

export default Day2;
