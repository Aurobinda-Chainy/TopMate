import React from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import StudentStats from '../../components/Student/StudentStats'

function StudentDashboard() {
  return (
    <div>
      <StudentLayout>
            <StudentStats/>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-lg font-semibold">My Courses</h2>
            </div>
      </StudentLayout>
    </div>
  )
}

export default StudentDashboard
