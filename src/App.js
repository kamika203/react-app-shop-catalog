import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Lab2 from "./pages/Lab2";
import ItemDetail from "./pages/ItemDetail";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  const [loged, setLogi] = useState(false);
  
  return (
    <>
      <BrowserRouter>
        <NavBar loged={loged}/>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/profile" 
         element={loged ? <Profile /> : <Navigate to="/login"  />} />
          <Route
            path="/login"
            element={<Login loged={loged} setL={setLogi} />}
          />
          <Route path="/shop" element={<Lab2 />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/*" element={<Navigate to="/main" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
