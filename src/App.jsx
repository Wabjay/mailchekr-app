import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./pages/Api";
import Emails from "./pages/Emails";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Verify from "./pages/auth/Verify";
import Auth from "./pages/auth/Auth";
import Table from "./pages/Table";
import React, { useEffect, useState } from "react";
import { TableContext, UserContext } from "./context/UserContext";
import axios from "./helper/api/axios";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [login, setLogin]= useState(false)
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    // setUser(JSON.parse(localStorage.getItem('user')))
    setLoading(true);
    try {
      axios
        .get("userAuth/userData", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data.mesage);
          setUser(response.data.mesage);
          setLoading(false);
          setLogin(true)
        });
    } catch (err) {
      console.log(err);
      // if (!err?.response) {
      //     setErrMsg('No Server Response');
      // } else if (err.response?.status === 400) {
      //     setErrMsg('Missing Username or Password');
      // } else if (err.response?.status === 401) {
      //     setErrMsg('Unauthorized');
      // } else {
      //     setErrMsg('Login Failed');
      // }
      // errRef.current.focus();
      setUser(localStorage.getItem("user"));
      setLoading(false);
    }
    setLoading(false);
  }, [token, login]);

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, loading, setLoading, login, setLogin }}
    >
      <TableContext.Provider value={{ user, setUser, token, setToken }}>
        <React.Fragment>
          {loading ? (
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
              <TailSpin
                height="300"
                width="300"
                color="#B88700"
                ariaLabel="tail-spin-loading"
                radius="2"
                wrapperStyle={{ paddingRight: "8px" }}
                wrapperClass=""
                visible={loading}
              />{" "}
            </div>
          ) : token ? (
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/emails" element={<Emails />} />
                <Route exact path="/table/:id" element={<Table />} />
                <Route exact path="/api" element={<Api />} />
                <Route exact path="/setting" element={<Settings />} />
                {/* <Route exact path="/project/:id" element={<Project />} /> */}
                <Route path="*" element={<Home />} />
              </Routes>
            </BrowserRouter>
          ) : (!login && (
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Auth />} />
                <Route exact path="/signup" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/auth" element={<Auth />} />
                <Route exact path="/verify/:id" element={<Verify />} />
                <Route exact path="*" element={<Auth />} />
              </Routes>
            </BrowserRouter>)
          )}
        </React.Fragment>
      </TableContext.Provider>
    </UserContext.Provider>
  );
}
 
export default App;
