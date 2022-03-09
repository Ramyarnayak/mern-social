// import "./profile.css";
// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";


// export default function Profile() {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const [user1, setUser1] = useState({});
//   const [allUsers, setAllUsers] = useState([]);
//   const username = useParams().username;
//   const [file, setFile] = useState(null);
//   const [coverfile, setCoverFile] = useState(null);
//   const city = useRef();
//   const relationship = useRef();
//   const from = useRef();
//   const desc = useRef();
//   const inputRef = useRef(null);
//   const [friends, setFriends] = useState([]);
//   const [nonfriends, setNonFriends] = useState([]);
//   const { user: currentUser, dispatch } = useContext(AuthContext)

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await axios.get(`/users?username=${username}`);
//       setUser1(res.data);

//     };
//     fetchUser();
  
//   }, [username]);

//   const fetchFriends = async () => {
//     try {
//       // alert(user._id)
//       const friendList = await axios.get("/users/friends/" + currentUser._id);
//       setFriends(friendList.data);


//     } catch (err) {

//       alert(err);
//     }
//   }

//   const fetchAllUsers = async () => {
//     try{
//       const res = await axios.get("/users/all");
//        setAllUsers(res.data)
//       console.log( res.data)
//     }catch(err){
//     alert(err)
//     }

//   };


//   useEffect(() => {
//     fetchAllUsers();
//   fetchFriends();
  

//   }, [username]);


// const renderForm= () =>(
// <>
//   <form className="loginBox" onSubmit={handleClick} >
//   <input
//     placeholder="City"
//     required
//      ref={city}
//     className="loginInput"
//   />
//   {/* <input
//     placeholder="From"
//     required
//      ref={from}
//     className="loginInput"

//   /> */}
//   <input
//     placeholder="Relationship status"
//     required
//      ref={relationship}
//     className="loginInput"
//     minLength="6"
//   />
//   <input
//     placeholder="Describe yourself"
//     required
//      ref={desc}
//     className="loginInput"
   
//   />
//   <button className="loginButton" type="submit" >
//     Save
//   </button>
  
// </form>
// </>
// )

// const handleClick = async (e) =>{

//   e.preventDefault();
  
//   try {
//     const res = await axios.get(`/users?username=${username}`);
//     await axios.put(`/users/${res.data._id}`, {
//       city: city.current.value,
//       // from: from.current.value,
//        relationship: relationship.current.value,
//      desc: desc.current.value

//     });
//   } catch (err) {
//     alert(err)
//   }
// }

//   const submit = async () =>{
  
    
//    const user = {

//    }
//       if (file) {
        
//         const data = new FormData();
//         const fileName = Date.now() + file.name;
//         data.append("name", fileName);
//         data.append("file", file);
//         user.profilePicture = fileName;
//         console.log(user);
//         try {
//           await axios.post("/upload", data);
//         } catch (err) {
//           alert(err)
//         }
//       }
//       if (coverfile) {
        
    
//         const data = new FormData();
//         const fileName = Date.now() + coverfile.name;
//         data.append("name", fileName);
//         data.append("file", coverfile);
//         user.coverPicture = fileName;
//         console.log(user);
//         try {
//           await axios.post("/upload", data);
//         } catch (err) {
//           alert(err)
//         }
//       }
//       try {
//         const res = await axios.get(`/users?username=${username}`);
//         await axios.put(`/users/${res.data._id}`, {
//           profilePicture: user.profilePicture,
//           coverPicture: user.coverPicture
//         });
//       } catch (err) {
//         alert(err)
//       }
      
//       // .img = fileName;
  
//     //   try {
//     //     await axios.post("/upload", data);
//     //     alert("hey")
//     //   } catch (err) {
//     // alert("gg"+err)
//     //   }
    
//     // try {
//     //   await axios.put(`/users/${user._id}/profilePic`, {
//     //     profilePicture: fileName
//     //   });
   
    
//     // } catch (err) {
//     //   alert(err)
//     // }
  
//   }

//   return (
//     <>
//       <Topbar />
//       <div className="profile">
//         <Sidebar />
//         <div className="profileRight">
//           <div className="profileRightTop">
//             <div className="profileCover">
             
         
//             <label htmlFor="coverfile" className="profileCoverImg" className="shareOption" >
            
//               {coverfile ? (
//               <>
//                 <img
//                 className="profileCoverImg"
//                 src={URL.createObjectURL(coverfile)}
//                 alt=""
//               />
           
           
//             </>
//         ):   <img
//         className="profileCoverImg"
//         src={
//           user1.coverPicture
//             ? PF + user1.coverPicture
//             : PF + "person/noCover.png"
//         }
//         alt=""
//       />}        <input
//       style={{ display: "none" }}
//       className="profileCoverImg"
//       type="file"
//       id="coverfile"
//       accept=".png,.jpeg,.jpg"
//       onChange={(e) => {
//         setCoverFile(e.target.files[0])
//      }}
//     />
//             </label>
        
//               <label htmlFor="file"  className="profileUserImg" className="shareOption">
               
//               <img
//                 className="profileUserImg"
//                 src={
//                   user1.profilePicture
//                     ? PF + user1.profilePicture
//                     : PF + "person/noAvatar.png"
//                 }
//                 alt=""
//               />
//                  </label>
//               <input
//                 style={{ display: "none" }}
//                 className="profileUserImg"
//                 type="file"
//                 id="file"
//                 accept=".png,.jpeg,.jpg"
//                 onChange={(e) => {
//                   setFile(e.target.files[0])
//                }}
//               />
//                 <button className="updateButton" onClick={submit}>
//        upload
//           </button>
         
//             {/* <h4 >update</h4> */}


//             {file && (
//               <>
//                 <img
//                 className="profileUserImg"
//                 src={URL.createObjectURL(file)}
//                 alt=""
//               />
           
       
//             </>
//         )}


//             </div>



//             <div className="profileInfo">
//               <h4 className="profileInfoName">{user1.username}</h4>
//               <span className="profileInfoDesc">{user1.desc}</span>
//             </div>
//           </div>
     
        
         
//           <div className="profileRightBottom">
//           <div className="profileRightBottomGrid">
//             <Feed username={username} />
//             {user1.city? renderForm(): null}
//             </div>
//             <Rightbar user={user1} allUsers={allUsers} setAllUsers={setAllUsers} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
