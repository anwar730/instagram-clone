import React, { useEffect, useState } from "react";
import Titlebar from "./components/Titlebar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost"
import LoginSwitch from "./components/LoginSwitch";
import Comments from "./components/Comments";
import Profile from "./components/Profile";


function App() {
  const [user, setUser] = useState(null);
  // const [posts, setPost] = useState([]);


  // useEffect(() => {
  //   fetch("/posts")
  //     .then((r) => r.json())
  //     .then(setPost);
  // }, []);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginSwitch onLogin={setUser} />;
  return  (
    <>
    <Titlebar profile={user} setUser={setUser}/>
    <Routes>
    <Route path="/" element={<Home profile={user} />} />
    <Route exact path="/trending" element={<AddPost profile={user}/>} />
    <Route exact path="/comments" element={<Comments profile={user}/>} />
    <Route exact path="/profile" element={<Profile profile={user}/>} />
    </Routes>
    </>
  )
}

export default App;
