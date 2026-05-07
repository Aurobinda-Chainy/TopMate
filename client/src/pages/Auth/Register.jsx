import {useState} from "react";
import axios from "axios";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async() =>{
    try{
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
      {
        username,
        email,
        password
      },
      {
        withCredentials:true
      }
      );

      console.log("Register Success: ",res.data);
    }catch(err){
    console.log("Register Error:",err.response?.data || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow w-[350px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e)=> setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e)=> setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=> setPassword(e.target.value)}
        />

        <button onClick={handleRegister}
         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>

    </div>
  );
};

export default Register;