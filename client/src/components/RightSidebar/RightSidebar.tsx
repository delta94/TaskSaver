import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useLocation } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import Actions from "../Actions/Actions";
import "./RightSidebar.scss";

const RightSidebar = () => {
  const { isDrawerOpened, isAdmin } = useContext(AppContext);
  const location = useLocation();
  const isTasksPanel = location.pathname === "/tasks" || location.pathname === "/";

  return isTasksPanel && isDrawerOpened ? (
    <Drawer variant="permanent" className="right-sidebar" anchor="right">
      <div className={"drawer-content " + (isAdmin ? "admin" : "not-admin")}>
        <Actions />
      </div>
    </Drawer>
  ) : (<></>);
};

export default RightSidebar;