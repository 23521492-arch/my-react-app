import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setResult(evalResult);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div style={{
      maxWidth: 320,
      margin: "60px auto",
      padding: 24,
      borderRadius: 16,
      background: "#f8fafc",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}>
      <h2 style={{textAlign: "center", color: "#0366d6"}}>Calculator</h2>
      <div style={{
        background: "#fff",
        borderRadius: 8,
        padding: "12px 8px",
        marginBottom: 12,
        fontSize: 22,
        textAlign: "right",
        minHeight: 40,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
      }}>
        {input || "0"}
      </div>
      <div style={{
        background: "#e3eafc",
        borderRadius: 8,
        padding: "8px",
        marginBottom: 12,
        fontSize: 20,
        textAlign: "right",
        minHeight: 32,
        color: "#0366d6"
      }}>
        {result !== "" && <> = {result}</>}
      </div>
      <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8}}>
        {["7","8","9","/", "4","5","6","*", "1","2","3","-", "0",".","C","+"].map((btn) =>
          btn === "C" ? (
            <button key={btn} onClick={handleClear} style={btnStyle}>C</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)} style={btnStyle}>{btn}</button>
          )
        )}
        <button onClick={handleCalculate} style={{...btnStyle, gridColumn: "span 4", background: "#0366d6", color: "#fff"}}>=</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "16px 0",
  fontSize: "1.1em",
  borderRadius: 8,
  border: "none",
  background: "#fff",
  color: "#0366d6",
  cursor: "pointer",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  fontWeight: 500
};

export default App;

