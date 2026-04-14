import { useState } from "react";
import batches from "../../data/batchdb";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const BatchList = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleBatches = showAll ? batches : batches.slice(0, 3);

  return (
    <div className="p-8 bg-gray-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Courses</h2>

        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-1 text-blue-600 font-medium hover:underline"
          >
            View All <FiArrowRight />
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center gap-1 text-red-500 font-medium hover:underline"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {visibleBatches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={batch.image}
              alt={batch.title}
              className="w-full h-48 object-cover hover:scale-105 transition duration-300"
            />

            {/* Content */}
            <div className="p-4 space-y-3">

              {/* Category + Rating */}
              <div className="flex justify-between items-center text-sm">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {batch.category}
                </span>

                <span className="flex items-center gap-1 text-yellow-500 font-medium">
                  <FaStar />
                  {batch.rating}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800">
                {batch.title}
              </h3>

              {/* Info */}
              <div className="flex justify-between text-gray-500 text-sm">
                <span>{batch.lessons}</span>
                <span>{batch.students}</span>
                <span>{batch.duration}</span>
              </div>

              {/* Price + Button */}
              <div className="flex justify-between items-center pt-2">
                <p className="font-bold text-lg">{batch.price}</p>

                <button className="flex items-center gap-1 text-blue-600 hover:underline">
                  Enroll <FiArrowRight />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BatchList;