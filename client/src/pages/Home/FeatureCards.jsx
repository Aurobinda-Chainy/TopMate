import { FaCertificate, FaTrophy } from "react-icons/fa";

const FeatureCards = () => {
  return (
    <div className="bg-gray-900 py-12 px-8">
      
      <div className="grid md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="flex justify-between items-center bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition duration-300">

          {/* Left Text */}
          <div>
            <p className="text-gray-400 text-sm">Earn a Professional</p>

            <h2 className="text-2xl font-bold text-blue-500">
              CERTIFICATE
            </h2>

            <button className="mt-3 text-blue-400 hover:underline flex items-center gap-1">
              View Programs →
            </button>
          </div>

          {/* Icon */}
          <FaCertificate className="text-orange-500 text-6xl" />
        </div>

        {/* Card 2 */}
        <div className="flex justify-between items-center bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition duration-300">

          {/* Left Text */}
          <div>
            <p className="text-gray-400 text-sm">Award winning</p>

            <h2 className="text-2xl font-bold text-blue-500">
              COURSES
            </h2>

            <button className="mt-3 text-blue-400 hover:underline flex items-center gap-1">
              Explore Courses →
            </button>
          </div>

          {/* Icon */}
          <FaTrophy className="text-orange-500 text-6xl" />
        </div>

      </div>

    </div>
  );
};

export default FeatureCards;