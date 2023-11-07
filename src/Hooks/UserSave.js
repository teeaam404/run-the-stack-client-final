// Save a user to MongoDB
export const saveUser = (user, gender, date, number) => {
    const currentUser = {
      email: user.email,
      userImage: user.photoURL,
      userName: user.displayName,
      userGender: gender,
      userNumber: number,
      userDate: date,
    };
  
    fetch(`https://run-the-stack-server-delta.vercel.app/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };