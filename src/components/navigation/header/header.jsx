import React from "react";
import Navbar from "./navbar";
import Subheader from "./sub-header";
import { fetchData } from "@/utils/query/query";
import { queryKeys } from "@/utils/constants/constants";

const Header = async () => {
  const generalData = await fetchData(`api/${queryKeys.generalInformation}`);

  return (
    <div>
      <Subheader />
      <Navbar />
    </div>
  );
};

export default Header;
