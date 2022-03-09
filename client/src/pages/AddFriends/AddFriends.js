// import "./../../components/rightbar/rightbar.css";
// import { Users } from "../../dummyData";
// import Online from "../../components/online/Online";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { Add, Remove } from "@material-ui/icons";

// export default function AddFriends() {
//     const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//     const [friends, setFriends] = useState([]);
//     const [user, setUser] = useState({});
//      const [allUsers, setAllUsers] = useState(null);
//     const { user: currentUser, dispatch } = useContext(AuthContext);
//     const [followed, setFollowed] = useState(
//       currentUser.followings.includes(user?.id)
//     );
  
//     useEffect(() => {
//       console.log("hey")
//       alert("ey")
//      getFriends();
//     }, [user]);
  
//       const getFriends = async () => {
//         try {
//           // alert(user._id)
//           const friendList = await axios.get("/users/friends/" + user._id);
//           setFriends(friendList.data);
//           alert(friendList.data)
//         } catch (err) {
  
//         alert(err);
//         }
//       };
    
  

  
  
  
//     const HomeRightbar = () => {
//       return (
//         <>
//           <div className="birthdayContainer">
//             <img className="birthdayImg" src="assets/gift.png" alt="" />
//             <span className="birthdayText">
//               <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
//             </span>
//           </div>
//           <img className="rightbarAd" src="assets/ad.png" alt="" />
//           <h4 className="rightbarTitle">Online Friends</h4>
         
//         </>
//       );
//     };
  
//     const AddFriends = () => {
//       return (
//         <>
         
   
        
//           <h4 className="rightbarTitle">User friends</h4>
  
  
//           <div className="rightbarFollowings">
//             {friends.map((friend) => (
//               <Link
//                 to={"/profile/" + friend.username}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div className="rightbarFollowing">
//                   <img
//                     src={
//                       friend.profilePicture
//                         ? PF + friend.profilePicture
//                         : PF + "person/noAvatar.png"
//                     }
//                     alt=""
//                     className="rightbarFollowingImg"
//                   />
//                   <span className="rightbarFollowingName">hh{friend.username}</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </>
//       );
//     };
//     return (
//       <div className="rightbar">
//         <div className="rightbarWrapper">
//           {user ? <AddFriends /> : <AddFriends />}
//         </div>
//       </div>
//     );
//   }
  