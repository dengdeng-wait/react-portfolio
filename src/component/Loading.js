import React from 'react';
import { ScaleLoader } from "react-spinners";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#ee29f9",
  textAlign: "center",
};

const Loading = ({ loading }) => {
  return (
    <div>
      <ScaleLoader
        color="#ee29f9"
        loading={loading}
        cssOverride={override}
        size={50}
      />
    </div>
  );
};

export default Loading;