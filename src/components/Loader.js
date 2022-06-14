import React from "react";
import { Stack } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  // <Stack
  //   direction="row"
  //   justifyContent="center"
  //   alignItems="center"
  //   width="100%"
  // >
  <TailSpin color="#00BFFF" height={180} width={180} />;
  {
    /* </Stack>; */
  }
};

export default Loader;
