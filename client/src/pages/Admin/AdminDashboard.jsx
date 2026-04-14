import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import MentorTable from '../../components/Mentor/MentorTable'
import StatsCards from './StatsCards'
import AssignStudents from '../../components/Student/AssignStudents'
import ProgramsTable from '../../components/ProgramsTable/ProgramsTable'

const  AdminDashboard =()=> {
  return (
    <div>
      <AdminLayout>
        <StatsCards/>
         <div className='grid md:grid-cols-3 gap-6'>
            <div className='md:col-span-2'>
              <MentorTable/>
            </div>

            <AssignStudents/>
          </div>

          <ProgramsTable/>
      </AdminLayout>
      
    </div>
  )
}

export default AdminDashboard
