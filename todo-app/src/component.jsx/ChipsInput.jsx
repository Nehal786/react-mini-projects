// const Accordian = () => {
//     return (
//         <div className="accordian-container">
//             <div></div>
//         </div>
//     )
// }
import React, { useState } from "react";

function ChipsInput() {
  const [inputData, setInputData] = useState("");
  const [arr, setArr] = useState([]);
  function handleKeyDown(event) {
    if (event.key === "Enter" && inputData !== "") {
      setArr([...arr, inputData]);
      console.log(arr);
      setInputData("");
    }
  }
  function removeChip(indexToRemove) {
    setArr(arr.filter((_, index) => index !== indexToRemove));
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "10px",
            flexWrap: "wrap",
          }}
        >
          {arr.map((chip, index) => (
            <span
              style={{
                padding: "5px 10px",
                background: "#ddd",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
              }}
              key={index}
            >
              {chip}{" "}
              <span
                style={{
                  marginLeft: "8px",
                  cursor: "pointer",
                  color: "red",
                  fontWeight: "bold",
                }}
                onClick={() => removeChip(index)}
              >
                x
              </span>
            </span>
          ))}
        </div>
      }
    </div>
  );
}

export default ChipsInput;
