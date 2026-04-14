import students from "../../data/studentList";
import { FiSearch } from "react-icons/fi";

const AssignStudents = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Assign Students to Mentors</h2>

        {/* Search */}
        <div className="flex items-center border rounded-lg px-3 py-1 bg-gray-100">
          <input
            type="text"
            placeholder="Search students..."
            className="bg-transparent outline-none text-sm"
          />
          <FiSearch className="ml-2 text-gray-500" />
        </div>
      </div>

      {/* Student List */}
      <div className="space-y-3">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            
            {/* Left */}
            <div className="flex items-center gap-3">
              <img
                src={student.image}
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-xs text-gray-500">{student.type}</p>
              </div>
            </div>

            {/* Program */}
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              {student.program}
            </span>

            {/* Button */}
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
              Assign
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default AssignStudents;