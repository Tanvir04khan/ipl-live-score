import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchNames } from "../../redux/actions/matchName.action";
import Card from "../list/Card";

const Home = () => {
  const dispatch = useDispatch();

  const { matchNames } = useSelector((state) => state.matchName);
  useEffect(() => {
    dispatch(getMatchNames());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 lg:max-w-screen-xl lg:mx-auto">
      {matchNames?.map((matchName, i) => (
        <Card matchName={matchName} key={i} />
      ))}
    </div>
  );
};

export default Home;
