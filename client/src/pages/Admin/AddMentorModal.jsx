import axios from "axios";
import { useState } from "react";
import {FiX} from "react-icons/fi";

const AddMentorModal  = ({ isOpen, onClose})=>{
    const [form, setForm] = useState({
        username:"",
        email: "",
        password: "",
        domain: "",
        experience:"",
        availability:"",
        image: null,
    });

    if(!isOpen) return null;

    const handleChange = (e) =>{
        const {name,value,files} = e.target;

        if(name === "image"){
            setForm({ ...form, image: files[0] });
        }else{
            setForm({ ...form, [name]: value});
        }
    };

    const handleSubmit =async (e) =>{
        e.preventDefault();

        try{
            const formData =  new FormData();

            formData.append("username", form.username);
            formData.append("email", form.email);
            formData.append("password", form.password);
            formData.append("domain", form.domain);
            formData.append("availability", form.availability);
            formData.append("experience", form.experience);

            if(form.image){
                formData.append("image",form.image);
            }

            const res = await axios.post(
                "http://localhost:3000/api/admin/create-mentor",
                formData,
                {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                    withCredentials: true,
                }
            );

            console.log("Mentor Created", res.data);

            alert("Mentor created successfully");

            onClose();
        } catch (error){
            console.error("Create Mentor Error:", error.response?.data || error.message);
            alert("Error creating mentor");
        }
    };

    return(
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    <FiX size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-4">
                    Add New Mentor
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input name="username"
                    placeholder="Full Name"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    />

                    <input name="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    />

                    <input name="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    />
                    
                    <input name="domain"
                    placeholder="Domain (UPSC /CS)"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    />
                    <input name="experience"
                    placeholder="Experience (e.g. 5 years)"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    />
                    
                    <input name="availability"
                    placeholder="availability (Mon-Fri)"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    />
                    <input type="file"
                    name="image"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    />

                    <div className="flex justify-end gap-3 pt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 rounded"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Create Mentor
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default AddMentorModal;