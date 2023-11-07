import React, { useEffect, useState } from "react";

const useAnswer = () => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/answer")
      .then((res) => res.json())
      .then((data) => {
        setAnswers(data);
        setLoading(false);
      });
  });

  return [answers, loading];
};

export default useAnswer;
