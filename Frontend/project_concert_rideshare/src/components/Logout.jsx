// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 

// function Logout({user, setUser, setIsLoggedIn}) {

//   const navigate = useNavigate();

//   const handleLogout = () => {

    
//     setIsLoggedIn(false)
//     setUser(null)
//     navigate('/');
//   };

//   return (
//     <button onClick={handleLogout}>
//       Logout
//     </button>
//   );
// }

// export default Logout;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Logout({user, setUser, setIsLoggedIn}) {

  const navigate = useNavigate();

  const handleLogout = () => {

    
    setIsLoggedIn(false)
    setUser(null)
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
