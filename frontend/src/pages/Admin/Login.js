import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";
const apiUrl = process.env.REACT_APP_API_URL;
const frontendUrl = process.env.REACT_FRONT_API_URL;
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const login = async () => {
    try {
        dispatch(ShowLoading());
        const response = await axios.post(`${apiUrl}/api/portfolio/admin-login`,user);
        dispatch(HideLoading());
        if(response.data.success){
            message.success(response.data.message);
            localStorage.setItem("token",JSON.stringify(response.data));
            // window.location.href = `${frontendUrl}/admin`;
            window.location.href = "/admin";
            // navigate("/admin")
        }
        else{
            message.error(response.data.message);
        }
    } catch (error) {
        message.error(error.message);
        dispatch(HideLoading());
    }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white">
        <h1 className="text-2xl">Portfolio - Admin Login</h1>
        <hr />
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter Username"
        />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter Password"
        />
        <button className="bg-primary text-white p-2 " onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
