import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-calendar-wrap">
      <GitHubCalendar
        username="Rmahiii"
        blockSize={13}
        blockMargin={4}
        fontSize={14}
        theme={{
          light: ["#e2e8f0", "#bfdbfe", "#60a5fa", "#2563eb", "#1e40af"],
          dark: ["#1e293b", "#1d4ed8", "#2563eb", "#3b82f6", "#93c5fd"],
        }}
      />
    </div>
  );
}

export default Github;
