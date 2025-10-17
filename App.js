import React, { useState } from "react";

export default function App() {
  const [date, setDate] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Calendar Picker</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ fontSize: "16px", padding: "5px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Selected Date: {date || "None"}
      </p>
    </div>
  );
}
