import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default UseAdmin;
