import React from "react";
import { useState, useEffect } from "react";

function RandomJokes() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const url =
    "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1";
  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data.data);
      } catch (error) {
        console.log("Error while fetching Jokes: ", error);
      }
    };
    fetchJokes();
  }, []);

  const nextJoke = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const prevJoke = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  if (data.length === 0) {
    return <div className="">No Jokes found</div>;
  }
  return (
    <div className="items-center justify-center bg-[#3A6D8C] rounded-lg">
      <div className="flex items-center justify-center py-5">
        <div className="bg-[#6A9AB0] shadow-lg hover:shadow-2xl  flex rounded-lg py-2 w-3/4 items-center justify-center overflow-auto">
          {data[index] ? (
            <p className="text-white">{data[index].content}</p>
          ) : (
            <p>No More jokes</p>
          )}
        </div>
      </div>
      <div className="py-2">
        <button
          onClick={prevJoke}
          className="text-black mr-1 bg-[#EAD8B1] rounded-lg items-center hover:bg-orange-300 py-2 px-2  shadow-lg hover:shadow-2xl"
        >
          Previous Joke
        </button>
        <button
          onClick={nextJoke}
          className="text-black bg-[#EAD8B1] rounded-lg items-center hover:bg-orange-300 py-2 px-2 shadow-lg hover:shadow-2xl"
        >
          Next Joke
        </button>
      </div>
    </div>
  );
}

export default RandomJokes;
