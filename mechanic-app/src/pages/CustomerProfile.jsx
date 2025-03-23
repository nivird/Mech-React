import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '/assets/styles.css';

const CustomerProfile = () => {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get('/backend/get_customer_profile.php', {
          withCredentials: true // in case cookies or session are used
        });
        if (response.data.success) {
          setCustomerData(response.data.customer);
        } else {
          alert('Failed to fetch customer data');
        }
      } catch (error) {
        console.error('Error fetching customer data:', error);
        alert('An error occurred while fetching profile data.');
      }
    };

    fetchCustomerData();
  }, []);

  if (!customerData) {
    return <div className="text-center my-5">Loading profile...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="p-4 border rounded bg-white shadow">
            <h2 className="text-center mb-4">Customer Profile</h2>
            <div className="mb-3">
              <strong>Name:</strong> {customerData.firstName} {customerData.lastName}
            </div>
            <div className="mb-3">
              <strong>Email:</strong> {customerData.email}
            </div>
            <div className="mb-3">
              <strong>Phone:</strong> {customerData.phone}
            </div>
            <div className="mb-3">
              <strong>Username:</strong> {customerData.username}
            </div>
            <div className="mb-3">
              <strong>Address:</strong> {customerData.address1}, {customerData.address2}, {customerData.state} - {customerData.zip}
            </div>
            <div className="mb-3">
              <strong>Car Name:</strong> {customerData.carName}
            </div>
            <div className="mb-3">
              <strong>Car Model:</strong> {customerData.carModel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
