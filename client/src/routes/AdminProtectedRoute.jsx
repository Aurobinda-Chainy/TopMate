import React from 'react'
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute =({children})=> {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"))
  
    if(!token || !user){
        return <Navigate to="/login"/>
    }

    if(user.role !== "admin"){
        return <Navigate to="/"/>
    }
    return children;
}

export default AdminProtectedRoute;
