"use client";
import { queryKeys } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import { useQuery } from "@tanstack/react-query";

const getGeneral = async () => {
  const response = await fetchData(`api/${queryKeys.generalInformation}`);
  console.log(response);
  return response;
};

export const { data: generalData } = useQuery({
  queryKey: [queryKeys.generalInformation],
  queryFn: () => getGeneral(),
});

//Notice
const getNotice = async () => {
  const response = await fetchData(`api/${queryKeys.notices}`);
  console.log(response);
  return response;
};

export const { data: noticeData } = useQuery({
  queryKey: [queryKeys.notices],
  queryFn: () => getNotice(),
});

