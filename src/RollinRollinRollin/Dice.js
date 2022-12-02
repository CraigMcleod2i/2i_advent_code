import React, { useState, useEffect, useMemo } from "react";
const Dice = ({ diceNum }) => {
  return (
    <div className="dice" id={'dice'+diceNum}>
      {[...Array(6)].map((dice, i) => {
        return (
          <div id={`dice${diceNum}Side${i}`}>
            <p>{i + 1}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Dice;
