// add a class

export const addClass = async (classData) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(classData),
  });

  const data = await res.json();
  return data;
};

// get All classes

export const getAllCalss = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
  const data = await res.json();
  return data;
};


// get enroll calss 

export const getPopularClass = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/calss/popular`);
  const data = await res.json();
  return data;
};



// get approve Calss
export const getAllApproveCalss = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/approveclass`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
  const data = await res.json();
  return data;
};

// get all calss by user

export const getClassByUSer = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/class/${email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });

  const data = await res.json();
  return data;
};
