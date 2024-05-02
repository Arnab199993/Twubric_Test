import { useEffect } from "react";
import UserApi from "../UserApi/UserApi";

const SortedList = () => {
  const { data, fetchUserData } = UserApi();
  const sortedArray = data
    .slice()
    .sort((a, b) => b.twubric.total - a.twubric.total);
  useEffect(() => {
    fetchUserData();
  }, []);
  return { sortedArray };
};

export default SortedList;
