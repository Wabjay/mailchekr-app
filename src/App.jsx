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
import Tables from "./pages/Table";
import React, { useEffect, useState } from "react";
import { TableContext, UserContext } from "./context/UserContext";
import axios from "./helper/api/axios";
import { TailSpin } from "react-loader-spinner";
import Layout from "./component/Layouts/Layout";
import Spinner from "./component/Others/Spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [login, setLogin]= useState(false)
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect 
  (() => {
    setToken(sessionStorage.getItem("token"));
    // setUser(JSON.parse(sessionStorage.getItem('user')))
    setLoading(true);
    console.log(loading)
    try {
      // lOAD WHEN THERE IS TOKEN
      Object.keys(token).length !== 0 &&
      axios
        .get("userAuth/userData", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
      setUser(sessionStorage.getItem("user"));
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
                  <Spinner loading={loading} />
          ) : token ? (
            
            <BrowserRouter>
            <Layout />
              <div className="mt-[56px] py-5 px-4 md:px-6 lg:py-[42px] lg:mt-0 lg:ml-[256px] xl:px-8 text-UntitledSans">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/emails" element={<Emails />} />
                <Route exact path="/table/:id" element={<Tables />} />
                <Route exact path="/api" element={<Api />} />
                <Route exact path="/setting" element={<Settings />} />
                {/* <Route exact path="/project/:id" element={<Project />} /> */}
                <Route path="*" element={<Home />} />
              </Routes>
                </div>
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
