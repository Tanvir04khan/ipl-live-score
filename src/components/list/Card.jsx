import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMatchData } from "../../redux/actions/matchData.action";

const Card = ({ matchName }) => {
  const match = matchName.split(" ");
  const date = match.splice(3, 1)[0];

  const dispatch = useDispatch();

  const history = useHistory();

  const clickHandler = async () => {
    history.push("/live-score");

    const formattedMatchName = matchName.split(" ").join("-");

    await dispatch(getMatchData(formattedMatchName));
  };

  return (
    <div
      className="flex items-center justify-between w-11/12 h-20 p-5 mx-auto my-4 text-xl font-medium bg-gray-100 shadow-md cursor-pointer md:w-9/12 rounded-2xl hover:shadow-lg"
      onClick={clickHandler}
    >
      <div>{match.join(" ")}</div>
      <div>{date}</div>
    </div>
  );
};

export default Card;
