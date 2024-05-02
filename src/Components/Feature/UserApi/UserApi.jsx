import { useState } from "react";
import { apiService } from "../../Services/ApiService";
const UserApi = () => {
  const [data, setData] = useState([]);
  const fetchUserData = async () => {
    try {
      const res = await apiService();
      if (res) {
        setData(res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return { data, fetchUserData, setData };
};

export default UserApi;
