import axios from "axios";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddMentorModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    domain: "",
    experience: "",
    availability: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/admin/create-mentor",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        },
      );

      console.log("Mentor Created", res.data);

      alert("Mentor created successfully");

      onClose();
    } catch (error) {
      console.error(
        "Create Mentor Error:",
        error.response?.data || error.message,
      );

      alert(error.response?.data?.message || "Error creating mentor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0f172a] p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 transition hover:text-white"
        >
          <FiX size={24} />
        </button>

        <h2 className="mb-8 text-3xl font-bold text-cyan-400">
          Add New Mentor
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {/* Username */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Mentor Name
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter mentor name"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Temporary Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400"
              required
            />
          </div>

          {/* Domain */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">Domain</label>

            <input
              type="text"
              name="domain"
              value={form.domain}
              onChange={handleChange}
              placeholder="e.g. UPSC, CS, BPSC"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              placeholder="e.g. 5 Years"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Availability
            </label>

            <select
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#1e293b] p-4 text-white outline-none transition focus:border-cyan-400"
            >
              <option value="">Select Availability</option>
              <option value="Available">Available</option>
              <option value="Busy">Busy</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="col-span-1 mt-4 flex justify-end gap-4 md:col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-6 py-3 transition hover:border-red-400 hover:text-red-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Mentor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMentorModal;
