import { useEffect, useState } from "react";
import UserApi from "../UserApi/UserApi";
const DeleteUsers = () => {
  const { data: initialData, fetchUserData } = UserApi();
  const [DeletedData, setDeletedData] = useState([]);
  const handleDelete = (id) => {
    const updatedData = initialData.filter((user) => user?.uid !== id);
    setDeletedData(updatedData);
    console.log("DeletedDataaaa", DeletedData);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return { handleDelete, DeletedData };
};

export default DeleteUsers;
