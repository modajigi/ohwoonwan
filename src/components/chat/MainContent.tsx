"use client";

import { useStore } from "@/store/store";
import axios from "axios";
import { useState } from "react";

const MainContent = () => {
  const { selections } = useStore();
  const [test, setTest] = useState(
    "1994년 6월 22일 8시 35분 출생 남자의 오늘의 운세 봐줘"
  );
  const [answer, setAnswer] = useState("");

  const testAPI = async () => {
    if (test.length < 2) return;
    const body = {
      prompt: test,
    };
    const res = await axios.post("http://localhost:5050/api/data", body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (res.data) {
      setAnswer(res.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-500">
      {Object.entries(selections).map(
        ([key, value]) =>
          value && (
            <p key={key}>
              선택된 {key}: {value}
            </p>
          )
      )}
      <div className="flex flex-col">
        <input
          type="text"
          value={test}
          onChange={(e) => setTest(e.target.value)}
          className="mb-5"
        />
        <button onClick={testAPI} className="mb-5">
          test
        </button>
        <div className="w-full text-start">{answer}</div>
      </div>
    </div>
  );
};

export default MainContent;
