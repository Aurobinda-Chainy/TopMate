import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () =>{
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password
        },
       {
        withCredentials: true
       }
      );
       console.log("Login Success",res.data);
    }catch(err){
      console.log("Login Error", err.response?.data || err.message);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow w-[350px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=> setPassword(e.target.value)}
        />

        <button 
        onClick={handleLogin}
         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>

    </div>
  );
};

export default Login;