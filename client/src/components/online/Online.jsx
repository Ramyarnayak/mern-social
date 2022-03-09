import "./online.css";
import { Avatar } from "@material-ui/core";
export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
      { !user.profilePicture?
      <Avatar className="sidebarFriendImg"  src={PF+user.profilePicture}/>:
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
     }
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
