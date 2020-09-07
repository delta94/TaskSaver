import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { getAllUsersByRoom } from "../../services/rooms";
import { User } from "../../interfaces/interfaces";
import { Drawer, List, Divider, ListItem, ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";
import "./LeftSidebar.scss";

const LeftSidebar = () => {
  const { isDrawerOpened, loggedInUser, socket } = useContext(AppContext);
  const [users, setUsers] = useState<User[]>([]);
  const { _id: userId, organizationId: room, organizationName } = loggedInUser;
  const notLoggedInUser = (user: User) => user._id !== loggedInUser._id;
  const admins = users.filter((user: User) => notLoggedInUser(user) && user.role === 0);
  const regularUsers = users.filter((user: User) => notLoggedInUser(user) && user.role === 1);

  useEffect(() => {
    const getAllUsers = async () => {
      const res: any = await getAllUsersByRoom(room);

      if (userId) {
        const usersExceptLoggedInUser = res.data?.users.filter((user: User) => notLoggedInUser(user));
        setUsers(usersExceptLoggedInUser);
      }
    };

    if (room) {
      getAllUsers();
    }

    // eslint-disable-next-line
  }, [loggedInUser]);

  useEffect(() => {
    if (socket) {
      socket.on("registrationToRoom", (newUser: User) => {
        if (newUser) {
          setUsers((prevUsers: User[]) => [...prevUsers, newUser]);
        }
      });
    }

    return () => socket.removeAllListeners();

  }, [socket]);

  interface PersonProps {
    user: User,
    length: number,
    index: number;
  }

  const Person: React.FC<PersonProps> = ({ user, length, index }) => {
    return (
      <ListItem button className={`list-item ` + (index === length - 1 ? "last" : "")}>
        <ListItemAvatar>
          <Avatar alt="avatar" src={`https://material-ui.com/static/images/avatar/${index < 7 ? index + 1 : 1}.jpg`} />
        </ListItemAvatar>
        <ListItemText primary={`${user.firstName} ${user.lastName}`} />
      </ListItem>
    );
  };

  return isDrawerOpened ?
    (
      <Drawer variant="permanent" className="left-sidebar">
        <div className="drawer-content">
          <List className="list">
            <ListItem button className="group-title organizationName">
              <ListItemText primary={organizationName} />
            </ListItem>

            {admins.length > 0 &&
              <>
                <Divider className="divider" />
                <ListItem button className="group-title">
                  <ListItemText primary="Admins" />
                </ListItem>
                {admins.map((user: User, index: number) => (
                  <Person user={user} length={admins.length} index={index} key={user._id} />
                ))}
              </>
            }

            {regularUsers.length > 0 &&
              <>
                <Divider className="divider" />

                <ListItem button className="group-title">
                  <ListItemText primary="Users" />
                </ListItem>
                {regularUsers.map((user: User, index: number) => (
                  <Person user={user} length={regularUsers.length} index={index} key={user._id} />
                ))}
              </>
            }
          </List>
        </div>
      </Drawer>
    ) :
    (
      <></>
    );
};

export default LeftSidebar;