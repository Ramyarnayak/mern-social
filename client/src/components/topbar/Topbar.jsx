import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MeetBook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={()=>{history.push('/')}} >Homepage</span>
          <span className="topbarLink" onClick={()=>{history.push('/news')}}>Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem"
          onClick={()=>{
            history.push(`/profile/add-friends/${user.username}`)
          }}
          >
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem" >
            <Chat  onClick={()=>{history.push('/messenger')}} />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
