import { useEffect, useState } from 'react';
import API from '../utils/api';

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get('/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Job Applications</h1>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job._id} className="bg-white shadow p-4 rounded-lg border">
            <div className="font-semibold text-lg">{job.role}</div>
            <div className="text-gray-700">{job.company}</div>
            <div className="text-sm text-gray-500">{job.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;