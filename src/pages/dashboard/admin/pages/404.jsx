import { Button, Result } from "antd";
import React, { useEffect, useState } from "react";

const NotFound = () => {
  const path = window.location.pathname;
  const [text, setText] = useState(
    "La page que vous avez demandée n’existe pas."
  );
  const [code, setCode] = useState("404");

  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
    }
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    if (path === "/" || path === "/dashboard" || path === "/map") {
      setText("Désolé, vous n’êtes pas autorisé à accéder à cette page.");
      setCode("403");
    } else {
      setText("La page que vous avez demandée n’existe pas.");
      setCode("404");
    }
  }, [path]);

  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/login");
    }, 3000);
  }, []);

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Result
        status={code}
        title={code}
        subTitle={text}
        extra={
          <>
            <div className="font-semibold text-base text-center">
              Redirecting in {timeLeft}
            </div>
            <a href="/login" className="">
              <Button className="bg-blue-500 mt-4" type="primary">
              Retour à la connexion
              </Button>
            </a>
          </>
        }
      />
    </div>
  );
};

export default NotFound;
