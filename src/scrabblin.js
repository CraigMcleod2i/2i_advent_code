const points = { DG: 2, BCMP: 3, FHVWY: 4, K: 5, JX: 8, QZ: 10 };

const scrabblin = (str) => {
  const score = str
    .toLowerCase()
    .split("")
    .reduce((current, next) => {
      let point;
      !!next.trim() &&
        (point =
          points[
            Object.keys(points).filter((x) =>
              x.toLowerCase().includes(next.toLowerCase())
            )[0]
          ] ?? 1);
      return current + (point ?? 0);
    }, 0);
  return score;
};

console.log("Your score is: \n",scrabblin("the dog ran up the hill"));
