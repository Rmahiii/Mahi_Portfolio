import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-calendar-wrap">
      <GitHubCalendar
        username="23bsm038-Mahi"
        blockSize={13}
        blockMargin={4}
        fontSize={14}
        theme={{
          light: ["#e7edf5", "#9be3c9", "#4fc49b", "#168765", "#0b5d4e"],
          dark: ["#1d2a33", "#1d5a61", "#278d80", "#55c7a4", "#baf7d6"],
        }}
      />
    </div>
  );
}

export default Github;
