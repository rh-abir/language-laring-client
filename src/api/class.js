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
