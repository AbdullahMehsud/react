import React from "react";
import { useState, useEffect } from "react";
function RandomUser() {
  const [user, setUser] = useState([]);
  const url = "https://api.freeapi.app/api/v1/public/randomusers";
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setUser(result.data.data);
      } catch (error) {
        console.log("error fatching users", error);
      }
    };
    fetchUsers();
  }, []);

  if (user.length === 0) {
    return <div className="text-white">No user found</div>;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {user.map((user, index) => {
          const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
          const email = `${user.email}`;
          const image = `${user.picture.large}`;
          const contect = `${user.cell}`
          const age = `${user.dob.age}`
          return (
            <div
              className="bg-white w-[300px] m-4 rounded-xl shadow-lg hover:shadow-2xl py-10 hover:bg-blue-400"
              key={index}
            >
              <div className="w-40 mx-auto">
                <img src={image} alt={name} className="rounded-full" />
              </div>
              <div className="ml-2 rounded-x">
                <p className="text-black flex py-2 justify-center">
                  Name: {name}
                </p>
                <p className="text-black flex py-2 justify-center">
                  Email: {email}
                </p>
                <p className="text-black flex py-2 justify-center">
                  Contect: {contect}
                </p>
                <p className="text-black flex py-2 justify-center">
                  Age: {age}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RandomUser;
