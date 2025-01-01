import { useState } from "react";

export const STATUS = {
  IDLE: "IDLE",
  IS_LOADING: "IS_LOADING",
  HAS_ERROR: "HAS_ERROR",
  HAS_SUCCEEDED: "HAS_SUCCEEDED",
};

const AComponent = () => {
  const [status, setStatus] = useState(STATUS.IDLE);

  // the rest of the code...
};
