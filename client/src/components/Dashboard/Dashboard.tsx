import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Button } from "@material-ui/core";
import { AppContext } from "../../contexts/AppContext";
import { TasksContext } from "../../contexts/TasksContext";
import { useHistory } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { theme, isMobile, isDrawerOpened } = useContext(AppContext);
  const { chartData } = useContext(TasksContext);
  const history = useHistory();
  const dataSetColorByTheme = theme === "dark" ? "#c26565" : "#4f8a8b";
  const textColorByTheme = theme === "dark" ? "white" : "black";

  const chartState = {
    labels: ["Open Tasks", "Closed Tasks"],
    datasets: [{
      label: "Open Tasks",
      data: [chartData.openTasks, 0],
      backgroundColor: dataSetColorByTheme,
      barThickness: 30,
      borderWidth: 2
    },
    {
      label: "Closed Tasks",
      data: [0, chartData.closedTasks],
      backgroundColor: "#f3ecc2",
      barThickness: 30,
      borderWidth: 2
    }]
  };

  const backToTasksPanel = () => {
    history.push("/tasks");
  };

  return (
    <div className={isDrawerOpened ? "ml-10" : ""}>
      <Button className="mb-5" variant="contained" color="primary" onClick={backToTasksPanel}>Back</Button>

      <div style={{ minHeight: "500px", maxHeight: isMobile ? "35vh" : "" }}>
        <Bar
          data={chartState}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Tasks status",
              fontSize: 20,
              fontColor: textColorByTheme
            },
            legend: {
              labels: {
                fontColor: textColorByTheme
              }
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontColor: textColorByTheme
                }
              }],
              yAxes: [{
                gridLines: {
                  color: theme === "dark" ? "rgba(10, 10, 10, 0.2)" : "#E8E8E8"
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: textColorByTheme
                }
              }]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;