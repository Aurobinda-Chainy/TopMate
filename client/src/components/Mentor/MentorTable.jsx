import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import AddMentorModal from "../../pages/Admin/AddMentorModal";

const MentorTable = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:3000/api/admin/mentors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      setMentors(res.data.mentors);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Manage Mentors</h2>

        <button
        onClick={()=> setIsModalOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          + Add Mentor
        </button>
      </div>

      <div className="flex justify-end mb-5">
        <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100 focus-within:ring-blue-400">
          <input
            type="text"
            placeholder="Search mentors..."
            className="bg-transparent outline-none text-sm"
          />
          <FiSearch className="ml-2 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-6 bg-gray-100 p-3 rounded-lg text-sm font-semibold text-gray-600">
        <span>Name</span>
        <span>Domain</span>
        <span>Experience</span>
        <span>Availability</span>
        <span>Students</span>
        <span>Status</span>
      </div>

      <div className="mt-3 space-y-2">
        {loading && (
          <p className="text-center text-gray-500 py-6">Loading mentors..</p>
        )}

        {!loading && mentors.length === 0 && (
          <p className="text-center text-gray-500 py-6">No mentors found</p>
        )}

        {!loading &&
          mentors.map((mentor) => (
            <div
              key={mentor._id}
              className="grid grid-cols-6 items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    mentor.image ||
                    "https://randomuser.me/api/portraits/men/11.jpg"
                  }
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium text-gray-800">{mentor.username}</p>
                  <p className="text-xs text-gray-500">Mentor</p>
                </div>
              </div>

              <span className="text-sm text-gray-600">
                {mentor.domain || "-"}
              </span>

              <span className="text-sm text-gray-600">
                {mentor.experience || "-"}
              </span>

              <span className="text-sm text-gray-600">
                {mentor.availability || "-"}
              </span>

              <span className="text-sm text-gray-600">
                {mentor.students || 0}
              </span>

               <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs w-fit">
                Active
              </span>
            </div>
          ))}
      </div>
    </div>
    
          <AddMentorModal
            isOpen={isModalOpen}
            onClose={()=>setIsModalOpen(false)}
          />
    
    </>
  );
};

export default MentorTable;
