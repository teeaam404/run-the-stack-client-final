import React, { useEffect, useState } from "react";

const useQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        console.log(data);
        setLoading(false);
      });
  });

  return [questions, loading];
};

export default useQuestion;
