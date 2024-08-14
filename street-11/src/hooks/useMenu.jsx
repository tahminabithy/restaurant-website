import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], isPending: isLoading, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axiosPublic.get('/menu')
      console.log(res.data);

      return res.data
    }
  })



  // useEffect(() => {
  //   fetch("http://localhost:3001/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  return [menu, isLoading, refetch];
};
export default useMenu;
