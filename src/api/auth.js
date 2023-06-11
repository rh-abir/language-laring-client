// save all user

export const saveUser = (user) => {
  const currentuser = {
    name: user.displayName,
    image: user.photoURL,
    email: user.email,
    roll: "student",

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

// get all user

export const getAlluser = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);

  const data = await res.json();
  return data;
};
