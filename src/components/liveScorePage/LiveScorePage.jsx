import React from "react";
import bat from "../../assets/svg/bat.svg";
import ball from "../../assets/svg/ball.svg";
import { useSelector } from "react-redux";

const LiveScorePage = () => {
  const { matchData, loading } = useSelector((state) => state.matchData);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-32 h-32 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col justify-around w-5/6 h-auto py-8 mx-auto mt-32 bg-gray-200 shadow-2xl sm:flex-row sm:w-1/2 md:w-2/3 lg:w-1/2 rounded-2xl">
          <div className="px-4 sm:px-0">
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium">Mumbai Indians</span>

              <img src={bat} alt="Bat Logo" className="h-6 ml-2" />
            </div>

            <h1 className="mt-1 text-2xl font-bold">123/4</h1>
            <h1 className="flex justify-between mt-2">
              <span>Rohit Sharma</span>
              <span>54</span>
            </h1>
            <h1 className="flex justify-between">
              <span>Sachin Tendulkar</span>
              <span>54</span>
            </h1>
          </div>
          <div className="px-4 mt-8 sm:px-0 sm:mt-0">
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium">Chennai Super King</span>
              <img src={ball} alt="Ball Logo" className="h-6 ml-2" />
            </div>
            <h1 className="mt-1 text-2xl font-bold">Yet to Bat</h1>
            <h1 className="flex justify-between mt-2">
              <span>Tanvir Khan</span>
              <span>2.2/2</span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveScorePage;
