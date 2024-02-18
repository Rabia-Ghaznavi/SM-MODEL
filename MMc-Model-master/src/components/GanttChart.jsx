import React from "react";

const GanttChart = ({ tasks }) => {
  return (
    <div className="gantt-chart">
      {tasks.map((task, index) => (
        <span style={{border:"1px solid white", borderRadius:"5px",  margin:"10px"}} key={index}>
       {`P${parseInt(task.index)}: start: ${parseInt(task.startingTime)}, end: ${parseInt(task.endingTime)}, server: ${parseInt(task.serverNumber)}`}

          {index < tasks.length - 1}
        </span>
      ))}
    </div>
  );
};

export default GanttChart;
