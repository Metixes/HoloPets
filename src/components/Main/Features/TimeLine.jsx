import React, { useState } from "react";
import { Steps } from "antd";

export default function TimeLine() {
  const [current, setCurrent] = useState(0);
  const description = 'sdfsdfdsf'
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <></>
    // <Steps
    //   current={current}
    //   onChange={onChange}
    //   direction="vertical"
    //   items={[
    //     {
    //       title: "Customizable Pets:",
    //       description,
    //     },
    //     {
    //       title: "Step 2",
    //       description,
    //     },
    //     {
    //       title: "Step 3",
    //       description,
    //     },
    //   ]}
    // />
  );
}
