import mentors from "../../data/mentorDb";
import { FiSearch } from "react-icons/fi";

const MentorTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Mentors</h2>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          + Add Mentor
        </button>
      </div>

      {/* Search */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
          <input
            type="text"
            placeholder="Search mentors..."
            className="bg-transparent outline-none text-sm"
          />
          <FiSearch className="ml-2 text-gray-500" />
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 bg-gray-100 p-3 rounded-lg text-sm font-semibold text-gray-600">
        <span>Name</span>
        <span>Subject</span>
        <span>Experience</span>
        <span>Availability</span>
        <span>Students</span>
        <span>Status</span>
      </div>

      {/* Table Body */}
      <div className="mt-2 space-y-2">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="grid grid-cols-6 items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            
            {/* Name + Image */}
            <div className="flex items-center gap-3">
              <img
                src={mentor.image}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{mentor.name}</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>

            <span>{mentor.subject}</span>
            <span>{mentor.experience}</span>
            <span className="text-sm">{mentor.availability}</span>
            <span>{mentor.students}</span>

            {/* Status */}
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs w-fit">
              {mentor.status}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
};

export default MentorTable;