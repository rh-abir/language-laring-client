

export const saveUser = (user) => {
    const currentuser ={
        name: user.displayName,
        email: user.email,
        roll: 'student',

    };

    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: 'PUT', 
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentuser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}


