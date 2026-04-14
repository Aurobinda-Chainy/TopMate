import programs from "../../data/programList";

const ProgramsTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">

      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Programs</h2>

      {/* Table Header */}
      <div className="grid grid-cols-4 bg-gray-100 p-3 rounded-lg text-sm font-semibold text-gray-600">
        <span>Program Name</span>
        <span>Duration</span>
        <span>Students</span>
        <span>Status</span>
      </div>

      {/* Table Body */}
      <div className="mt-2 space-y-2">
        {programs.map((program) => (
          <div
            key={program.id}
            className="grid grid-cols-4 items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            <span className="font-medium">{program.name}</span>
            <span>{program.duration}</span>
            <span>{program.students}</span>

            {/* Status */}
            <span
              className={`text-xs px-2 py-1 rounded-full w-fit
                ${
                  program.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : program.status === "Upcoming"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-200 text-gray-600"
                }`}
            >
              {program.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProgramsTable;