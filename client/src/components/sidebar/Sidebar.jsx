import "./sidebar.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../apiCalls";
import { useContext } from "react";
import { useHistory } from "react-router";


export default function Sidebar() {
  const history = useHistory();
  const {  dispatch } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users/all`);
      setAllUsers(res.data);
      // allUsers.filter((f) => allUsers.some((u) => u._id === f))
      console.log(res.data)
    };
    fetchUsers();
  }, []);

 
  const logOut = () =>{
    logout(
      dispatch
    );
    history.push('/')
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem" onClick={()=>{history.push('/')}}>
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem" onClick={()=>{history.push('/messenger')}}>
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>
          </li>
          <li className="sidebarListItem" onClick={()=>{history.push('/news')}}>
          <Event className="sidebarIcon" />
            <span className="sidebarListItemText">News</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem" onClick={()=>{history.push('/covid')}}>
          <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Covid</span>
          </li>
          <li className="sidebarListItem" onClick={logOut}>
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
          {/* <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li> */}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {allUsers && allUsers.map((u) => (
            <CloseFriend key={u._id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
