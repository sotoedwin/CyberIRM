// frontend/src/components/Profile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.log("No token found");
      return;
    }

    axios.get("http://localhost:8000/api/me/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.error("Error fetching user profile:", error);
    });
  }, []);

  if (!user) return <p>Cargando perfil...</p>;

  return (
    <div>
      <h1>Perfil de usuario</h1>
      <p>Nombre de usuario: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
