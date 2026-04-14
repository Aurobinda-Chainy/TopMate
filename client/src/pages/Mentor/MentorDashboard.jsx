import MentorLayout from "../../layouts/MentorLayout";
import MentorStats from "../../components/Mentor/MentorStats";

const MentorDashboard = () => {
  return (
    <MentorLayout>

      {/* Stats */}
      <MentorStats />

      {/* Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold">My Assigned Programs</h2>
        <p className="text-gray-500 mt-2">Programs will appear here...</p>
      </div>

    </MentorLayout>
  );
};

export default MentorDashboard;