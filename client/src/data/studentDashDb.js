const studentData = {
  name: "Aman Sharma",
  role: "Student",
  credits: 4,

  stats: {
    courses: 3,
    completedSessions: 12,
    upcomingSessions: 2,
  },

  courses: [
    {
      id: 1,
      title: "UPSC Foundation",
      mentor: "Ravi Kumar",
      duration: "Jan 2024 - Dec 2025",
      progress: 60,
      status: "Active",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: 2,
      title: "CS Crash Course",
      mentor: "Priya Shah",
      duration: "Mar 2024 - May 2024",
      progress: 30,
      status: "Active",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 3,
      title: "BPSC Test Series",
      mentor: "Amit Verma",
      duration: "Jun 2023 - Dec 2023",
      progress: 100,
      status: "Expired",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    }
  ],

  sessions: [
    {
      id: 1,
      date: "Mon, Apr 22",
      time: "10:00 AM - 11:00 AM",
      course: "UPSC Foundation",
      mentor: "Ravi Kumar",
      type: "Batch",
      status: "Join"
    },
    {
      id: 2,
      date: "Sat, Apr 20",
      time: "04:00 PM - 06:00 PM",
      course: "CS Crash Course",
      mentor: "Priya Shah",
      type: "1:1",
      status: "Join"
    },
    {
      id: 3,
      date: "Fri, Apr 19",
      time: "11:00 AM - 12:00 PM",
      course: "BPSC Test Series",
      mentor: "Amit Verma",
      type: "Batch",
      status: "Cancelled"
    }
  ]
};

export default studentData;