// add a select class

export const addSelectClass = async (selectkData) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/select`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(selectkData),
  });
  const data = await res.json();
  return data;
};

// get all select class for user by email

export const getSelectsClass = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/select/${email}`);
  const data = await res.json();
  return data;
};

//delete select class by id TODO
export const deleteSelectClass = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/select/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    }
  });
  const data = await res.json();
  return data;
};
