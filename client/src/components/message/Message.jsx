// import "./message.css";
// import { format } from "timeago.js";

// export default function Message({ message, own }) {
//   return (
//     <div className={own ? "message own" : "message"}>
//       <div className="messageTop">
//         <img
//           className="messageImg"
//           src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//           alt=""
//         />
//         <p className="messageText">{message.text}</p>
//       </div>
//       <div className="messageBottom">{format(message.createdAt)}</div>
//     </div>
//   );
// }

import "./message.css";import { useEffect, useState, useContext } from "react";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
export default function Message({ message, own }) {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
           user?.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}

