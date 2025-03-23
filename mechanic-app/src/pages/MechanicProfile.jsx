// React + Node.js Implementation with Backend Data Fetch

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

const MechanicProfileDashboard = () => {
  const [mechanicData, setMechanicData] = useState(null);

  useEffect(() => {
    axios.get('/api/mechanic/profile')
      .then(response => {
        setMechanicData(response.data);
      })
      .catch(error => {
        console.error('Error fetching mechanic data:', error);
      });
  }, []);

  if (!mechanicData) return <div className="text-center mt-5">Loading...</div>;

  const {
    name,
    profilePicture,
    certifications,
    rating,
    earnings,
    upcomingJobs,
    completedJobs,
    experienceYears,
    feedbackHighlights,
    services
  } = mechanicData;

  return (
    <div className="container py-4">
      {/* Profile Header */}
      <div className="text-center mb-4">
        <img src={profilePicture} alt="Profile" className="profile-pic mb-3" />
        <h2 className="fw-bold">{name}</h2>
        <div>
          {certifications.map((cert, index) => (
            <span key={index} className="badge badge-custom">{cert}</span>
          ))}
        </div>
        <div className="mt-2">
          {'⭐'.repeat(Math.floor(rating))}{rating % 1 !== 0 ? '☆' : ''} ({rating} / 5)
        </div>
      </div>

      {/* Earnings & Transaction History */}
      <div className="mb-4">
        <h4 className="section-header">Earnings & Transactions</h4>
        <div className="row">
          <div className="col-md-3">
            <p>Total Earnings:</p>
            <h5>${earnings.total}</h5>
          </div>
          <div className="col-md-3">
            <p>Monthly Earnings:</p>
            <h5>${earnings.monthly}</h5>
          </div>
          <div className="col-md-3">
            <p>Pending Payouts:</p>
            <h5>${earnings.pending}</h5>
          </div>
          <div className="col-md-3">
            <p>Available Balance:</p>
            <h5>${earnings.available}</h5>
          </div>
        </div>
        <button className="btn btn-primary mt-2">Download Invoices</button>
        <div className="mt-3">
          <p><strong>Earnings Projection:</strong> Estimated ${earnings.projected} next month based on current job trends.</p>
        </div>
      </div>

      {/* Job Calendar & Scheduling */}
      <div className="mb-4">
        <h4 className="section-header">Upcoming Jobs Calendar</h4>
        <p>[Calendar integration here]</p>
        <div className="mt-3">
          {upcomingJobs.map((job, index) => (
            <p key={index}><strong>{job.date}:</strong> {job.customer} - {job.type} - {job.duration} - {job.location}</p>
          ))}
        </div>
        <h5 className="mt-3">Completed Jobs</h5>
        <p>[Filterable List by date and job type]</p>
      </div>

      {/* Certifications & Experience */}
      <div className="mb-4">
        <h4 className="section-header">Certifications & Experience</h4>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
          <li>{experienceYears} Years of Experience</li>
        </ul>
        <button className="btn btn-secondary" disabled>Upload New Certification (Coming Soon)</button>
      </div>

      {/* Ratings & Reviews */}
      <div className="mb-4">
        <h4 className="section-header">Customer Ratings & Reviews</h4>
        <h5>⭐ {rating} / 5</h5>
        <p><strong>Feedback Highlights:</strong></p>
        <ul>
          {feedbackHighlights.map((feedback, index) => (
            <li key={index}>{feedback}</li>
          ))}
        </ul>
        <button className="btn btn-secondary" disabled>Dispute Resolution (Coming Soon)</button>
      </div>

      {/* Services & Pricing */}
      <div className="mb-4">
        <h4 className="section-header">Services & Pricing (Read-Only)</h4>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <a href="#" className="btn btn-link">Go to Settings for Pricing</a>
      </div>

      {/* Refer a Friend */}
      <div className="text-center">
        <button className="btn btn-success">Refer a Friend</button>
      </div>
    </div>
  );
};

export default MechanicProfileDashboard;

/* App.css */
