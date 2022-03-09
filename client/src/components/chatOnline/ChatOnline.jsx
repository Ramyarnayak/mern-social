// import axios from "axios";
// import { useEffect, useState, useContext } from "react";
// import "./chatOnline.css";
// import { AuthContext } from "../../context/AuthContext";
// import Conversation from "../conversations/Conversation";
// export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
//   const [friends, setFriends] = useState([]);
//   const [onlineFriends, setOnlineFriends] = useState([]);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
// const [ conversation, setConversation] = useState([])
// const { user } = useContext(AuthContext);
// const [ c, setC] = useState(false)
// const [ conversations, setConversations] = useState([])

// useEffect(() => {
//     const getFriends = async () => {
//     try {
//       // alert(user._id)
//       const friendList = await axios.get("/users/friends/" + currentId);
//       setFriends(friendList.data);
     

//     } catch (err) {

//       console.log(err);
//     }
//   }
//     getFriends();
//   }, [currentId]);

//   useEffect(() => {
//     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
//   }, [friends, onlineUsers]);

//   const  addnewConversation= async (o, user)=>{
  
    
//     try{  
     
//       const res =  await axios.post("/conversations", {
//         senderId: userId,
//         receiverId : OId
//       })
//       setConversations(...conversations, res.data)

//     }catch(err){
//       alert(err)
//     }
//   }

//   const handleClick = async (user) => {
//     try {
//       const res = await axios.get(
//         `/conversations/find/${currentId}/${user._id}`
//       );
//       setCurrentChat(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="chatOnline">
//       {friends.map((o) => (
//         <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
//           <div   onClick={()=>
//           { 
//             addnewConversation(o, user)
//           }}  >
//           <div className="chatOnlineImgContainer" 
       
//             >
//             <img
//               className="chatOnlineImg"
//               src={
//                 o?.profilePicture
//                   ? PF + o.profilePicture
//                   : PF + "person/noAvatar.png"
//               }
//               alt=""
//             />
//             <div className="chatOnlineBadge"></div>
//           </div>
//           <span className="chatOnlineName" >{o?.username}</span>
//           </div>  
//         </div>
//       ))}
     
//     </div>
//   );
// }
import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}