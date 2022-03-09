import { Avatar } from "@material-ui/core";
import "./closeFriend.css";

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
     { !user.profilePicture?
      <Avatar className="sidebarFriendImg"  src={PF+user.profilePicture}/>:
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
     } 
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
