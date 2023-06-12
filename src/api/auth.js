// save a user
export const saveUser = (user) => {
  const currentuser = {
    name: user.displayName,
    image: user.photoURL,
    email: user.email,
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentuser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);  
    });
};



// make a Instructor
export const makeInstructor  = (email) => {
  const currentUser = {
    role: 'instructor',
  }

  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  }).then(res => res.json())
}


// make a Instructor
export const makeAdmin  = (email) => {
  const currentUser = {
    role: 'admin',
  }
  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  }).then(res => res.json())
}



// get a user and role 

export const getRole =async (email) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`);
  const data = await res.json()
  return data;
}

// get all user

export const getAlluser = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);

  const data = await res.json();
  return data;
}; 
