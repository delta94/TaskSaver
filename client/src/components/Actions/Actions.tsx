import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { TasksContext } from "../../contexts/TasksContext";
import { useHistory } from "react-router-dom";
import { formTypes } from "../../services/helper";
import { Grid, TextField, Button } from "@material-ui/core";
import TaskForm from "../Tasks/TaskForm/TaskForm";

const Actions = () => {
  const { isAdmin, isDrawerOpened } = useContext(AppContext);
  const { searchValue, setSearchValue } = useContext(TasksContext);
  const history = useHistory();

  const moveToDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <Grid item xs={12} sm={isDrawerOpened ? 12 : 8} md={isDrawerOpened ? 12 : 10}>
        <TaskForm formType={formTypes.add} />
        {isAdmin && <Button className="ml-2" color="primary" variant="contained" onClick={moveToDashboard}>Dashboard</Button>}
      </Grid>

      <Grid item xs={12} sm={isDrawerOpened ? 12 : 8} md={isDrawerOpened ? 12 : 10}>
        <TextField
          style={{ width: isDrawerOpened ? "92%" : "" }}
          className={isDrawerOpened ? "" : "mt-0 mb-0"}
          fullWidth={!isDrawerOpened}
          variant="outlined"
          margin="normal"
          label="search"
          autoComplete="search"
          value={searchValue}
          onChange={e => setSearchValue((e.target as HTMLInputElement).value)}
        />
      </Grid>
    </>
  );
};

export default Actions;