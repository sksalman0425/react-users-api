import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDisplay = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users); // Assuming the response has a 'users' property containing the user array
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
    
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>;
  }
 
  return (
    <div>
      <h2>User List</h2>
      {users.map((user:any) => (
        <div key={user.id}>
          User ID : {user.id} {' '}
          First Name : {user.firstName} {' '}
          image : {<img src={user.image} alt='' style={{height:"50px"}} />}
        </div>
      ))}
    </div>
  );
};

export default UserDisplay;