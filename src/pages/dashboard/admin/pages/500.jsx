import { Button, Result } from "antd";
import React from "react";

const SomethingWentWrong = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Result
        status="500"
        title="500"
        subTitle="Désolé, quelque chose a mal tourné."
        extra={
          <a href="/">
            <Button type="primary">Back Home</Button>
          </a>
        }
      />
    </div>
  );
};

export default SomethingWentWrong;
