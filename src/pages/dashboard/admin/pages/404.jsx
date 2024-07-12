import React, { useEffect, useState } from "react";
import { Button, Result } from "antd";
import { motion } from "framer-motion";

const NotFound = () => {
  const path = window.location.pathname;
  const [text, setText] = useState(
    "La page que vous avez demandée n'existe pas."
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
      setText("Désolé, vous n'êtes pas autorisé à accéder à cette page.");
      setCode("403");
    } else {
      setText("La page que vous avez demandée n'existe pas.");
      setCode("404");
    }
  }, [path]);

  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/login");
    }, 3000);
  }, []);

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg"
      >
        <Result
          status={code}
          title={
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold text-gray-800"
            >
              {code}
            </motion.h1>
          }
          subTitle={
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-gray-600 mt-2"
            >
              {text}
            </motion.p>
          }
          extra={
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-semibold text-lg text-center text-gray-700 mb-4"
              >
                Redirection dans{" "}
                <span className="text-primary">{timeLeft}</span> secondes
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a href="/login">
                  <Button
                    className="bg-primary hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                    // type="primary"
                  >
                    Retour à la connexion
                  </Button>
                </a>
              </motion.div>
            </>
          }
        />
      </motion.div>
    </div>
  );
};

export default NotFound;