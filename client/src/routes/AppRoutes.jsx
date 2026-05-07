import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import MentorDashboard from "../pages/Mentor/MentorDashboard";
import StudentDashboard from "../pages/Student/StudentDashboard";
import StudentsPage from "../components/Student/StudentsPage";
import AboutPage from "../pages/About/AboutPage";
import ProductsPage from "../pages/Product/ProductsPage";
import AdminProtectedRoute from "./AdminProtectedRoute";
import VideoCallPage from "../pages/VideoCall/VideoCallPage";

 const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route path="/admin" 
                element={
                    <AdminProtectedRoute>
                        <AdminDashboard/>
                    </AdminProtectedRoute>
                
                }/>
                <Route path="/mentor" element={<MentorDashboard/>}/>
                <Route path="/student" element={<StudentDashboard/>}/>
                <Route path="/admin/students" element={<StudentsPage />} />

                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/products" element={<ProductsPage/>}/>

                <Route path="/video-call" element={<VideoCallPage/>}/>
                <Route path="/video-call/:roomId" element={<VideoCallPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;